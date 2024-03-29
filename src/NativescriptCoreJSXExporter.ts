import { ClassDefinitionBuilderContext, AttributeClassPropDefinition, AttributeClassDefinition, ImportMap, JSXDocumentBuilderContext } from "./JSXExporter";
import { Project, Node, ClassDeclaration, Type } from "ts-morph";
import path from "path";
import pascalCase from 'uppercamelcase';
import NativescriptJSXExporter, { PropertyRegistration } from "./NativescriptJSXExporter";

/*
  Exports the nativescript core ui classes. Expects a path to the nativescript source, since it needs the original TS files to find properties that were not exposed in the .d.ts
*/

export default class NativescriptCoreJSXExporter extends NativescriptJSXExporter {

    nativescriptCorePath: string;
    propertyChangeType: Type;
    propertyClass: ClassDeclaration;

    static FromSourcePath(nativescriptSourcePath: string): NativescriptCoreJSXExporter {
        let project = new Project({
            tsConfigFilePath: nativescriptSourcePath + "/tsconfig.json",
        });
        return new NativescriptCoreJSXExporter(nativescriptSourcePath, project);
    }

    constructor(srcPath: string, project: Project) {
        super(project)
        this.nativescriptCorePath = path.normalize(srcPath).replace(/\\/g, '/');
        this.propertyChangeType = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/data/observable/index.ts").getInterfaceOrThrow("PropertyChangeData").getType();
        this.propertyClass = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/ui/core/properties/index.ts").getClassOrThrow("Property");
    }

    isElementClass(c: ClassDeclaration) {
        // nativescript can have multiple definitions of a class, one in the .d.ts file and the other in .android/.ios file (or even in -common) file
        // so as well as ensuring it inherits from viewbase, we should also prefer the ones defined in the .d.ts files where available
        const fp = c.getSourceFile().getFilePath();

        //only consider files in /ui/*
        if (! /\/ui\//.test(fp)) return false

        //prefer .d.ts versions where possible (except for formatted-string and span where ts-morph won't load their .d.ts files)
        const isValidFile = (fp.endsWith('text-base/formatted-string.ts')
            || fp.endsWith('text-base/span.ts')
            || path.basename(fp) == `index.d.ts`
            || path.basename(fp) == `index.ts`
        )

        if (!isValidFile) return false;
        return super.isElementClass(c);
    }

    getSyntheticEventHandlers(c: ClassDeclaration): AttributeClassPropDefinition[] {
        let props = super.getSyntheticEventHandlers(c);

        var gestureTypes = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/ui/gestures/index.d.ts").getEnumOrThrow("GestureTypes");

        var classMethods = c.getInstanceMethods().filter(m => m.getName() == "on");


        // some classes have a partner interface of the same name which specifies the events
        var className = c.getName();
        var partnerInterface = className ? c.getSourceFile().getInterface(className) : null;
        var interfaceMethods = partnerInterface?.getMethods().filter(m => m.getName() == "on") ?? []

        for (var i of interfaceMethods) {
            let params = i.getParameters()
            let [eventParam, callbackParam] = params;

            //explicitly defined event
            if (eventParam.getType().isStringLiteral()) {
                var propname = "on" + eventParam.getType().getText().replace(/"/g, "");
                if (props.find(p => p.name == propname)) continue;
                props.push({
                    name: propname,
                    type: this.getTypeDefinition(callbackParam.getType(), callbackParam),
                    meta: {
                        derivedFrom: "SyntheticEvent:ExplicitInterface",
                        sourceFile: eventParam.getSourceFile().getFilePath()
                    }
                })
            }
        }

        for (var m of classMethods) {

            let params = m.getParameters();
            if (!params || params.length < 2) continue;

            let [eventParam, _] = params;

            //add gesture type events to this class if it supports it
            if (eventParam.getType().isUnion() && eventParam.getType().getUnionTypes().find(ut => ut.getText(eventParam) == "GestureTypes")) {
                let gestureSource = gestureTypes.getSourceFile();
                let defaultEventType = gestureSource.getInterfaceOrThrow("GestureEventData");
                for (var gesture of gestureTypes.getMembers().map(m => m.getName())) {
                    let name = "on" + gesture;
                    let expectedEventDataTypeName = gesture == "doubleTap" ? "TapGestureEventData" : pascalCase(gesture) + "GestureEventData";
                    let eventType = gestureSource.getInterface(expectedEventDataTypeName) || defaultEventType;

                    let eventTypeDef = this.getTypeDefinition(eventType.getType(), eventType);
                    props.push({
                        name: name,
                        type: `(arg: ${eventTypeDef}) => any`,
                        meta: {
                            derivedFrom: "SyntheticEvent:Gesture",
                            sourceFile: eventParam.getSourceFile().getFilePath()
                        }
                    })
                }
            }
        }
        return props;

    }

    getPropertyRegistrations() {
        var statements: PropertyRegistration[] = [];
        var propertyClass = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/ui/core/properties/index.ts").getClassOrThrow("Property");

        var refs = propertyClass.getMethod("register")?.findReferencesAsNodes() ?? []
        for (var ref of refs) {
            let accessExpr = ref.getParent();
            if (accessExpr && Node.isPropertyAccessExpression(accessExpr)) {
                let propExpr = accessExpr.getExpression();
                if (Node.isIdentifier(propExpr)) {
                    var callExpr = accessExpr.getParent();
                    if (callExpr && Node.isCallExpression(callExpr)) {
                        var target = callExpr.getArguments()[0];
                        if (Node.isIdentifier(target)) {
                            statements.push({
                                propertyName: propExpr.getText().replace(/Property$/, ""),
                                propertyType: propExpr.getType().getTypeArguments()[1], //Property<Target, valueType>
                                propertyNode: propExpr,
                                targetClassName: target.getText()
                            })
                        }
                    }
                }
            }
        }

        return statements;
    }

    private getStyleProxyProperties(c: ClassDeclaration): AttributeClassPropDefinition[] {
        let setterProps: AttributeClassPropDefinition[] = []
        //get any setters that proxy through to style
        // they look like this
        // set borderTopWidth(value: Length) {
        //    this.style.borderTopWidth = value;
        let setters = c.getSetAccessors();
        for (const setter of setters) {
            if (Node.isSetAccessorDeclaration(setter)) {
                let setterArg = setter.getParameters()[0].getName();
                let setterName = setter.getName()
                let body = setter.getBody();
                if (body) {
                    for (const stmt of body.getDescendantStatements()) {
                        if (Node.isExpressionStatement(stmt)) {
                            let expr = stmt.getExpression();
                            if (Node.isBinaryExpression(expr)) {
                                let propAccess = expr.getLeft();
                                let equal = expr.getOperatorToken();
                                let right = expr.getRight();
                                if (equal.getText() == "=" && Node.isPropertyAccessExpression(propAccess) && Node.isIdentifier(right)) {
                                    if (right.getText() == setterArg) {
                                        if (propAccess.getExpression().getType().getText().endsWith("Style")) {
                                            let newType = this.getTypeDefinition(setter.getType(), setter);
                                            newType = this.addStringToType(setter.getType(), newType);

                                            setterProps.push({
                                                name: setterName,
                                                type: newType,
                                                meta: {
                                                    sourceFile: setter.getSourceFile().getFilePath(),
                                                    derivedFrom: "StyleProxy"
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return setterProps;
    }

    getPropertiesFromSkippedParent(c: ClassDeclaration): AttributeClassPropDefinition[] {
        // patch missing properties if we have skipped a base class in our .d.ts file
        let currentFile = c.getSourceFile().getFilePath();
        if (!currentFile.endsWith(".d.ts")) return []
        let declaredBaseClass = c.getBaseClass();
        if (!declaredBaseClass) return []


        //find our base class:

        //look for a -common file
        // our common files are usually named after our containing folder suffixed with -common.ts in the case of index.d.ts
        // or their current name with -common.ts instead of .d.ts

        let filename = path.basename(currentFile, ".d.ts");
        if (filename == "index")
            filename = path.basename(path.dirname(currentFile));
        let commonFilename = path.dirname(currentFile) + "/" + filename + "-common.ts";
        let commonSource = this.project.getSourceFile(commonFilename);

        //if there is no -common, then give up
        if (!commonSource) return []

        //find the class declaration
        let baseClass = commonSource.getClass(c.getName() + "Base");
        if (!baseClass) {
            baseClass = commonSource.getClass(c.getName() + "Common")
        }

        if (!baseClass) {
            return []
        }

        if (declaredBaseClass.getName() == baseClass.getName()) return [];

        // get the props
        let baseClassProps: Map<string, AttributeClassPropDefinition> = new Map();

        this.addPropDefintions({
            className: baseClass.getName() ?? "Unknown",
            classType: baseClass,
            parentClasses: [],
            props: baseClassProps
        })

        // some classes and properties get included when they shouldn't. Let's do some cleanup
        for (let p of [...baseClassProps.values()]) {
            if (p.type.endsWith(".ViewCommon")) {
                p.type = "View"
            }

            p.meta.derivedFrom = `FromMissingParent(${p.meta.derivedFrom})`
        }

        return [...baseClassProps.values()];
    }

    private addImportHandlerForHiddenProp(hiddenDef: AttributeClassPropDefinition, originalDef?: AttributeClassPropDefinition) {
        //add a handler for when we resolve imports
        //see `addImportsFromPropDefinition
        hiddenDef.meta.addImports = (imports: ImportMap) => {

            if (!originalDef) {
                return this.addImportsFromTypeDefinition(hiddenDef.type, imports);
            }

            //Compute imports added by the original def
            let tempImports = new Map(imports);
            this.addImportsFromTypeDefinition(originalDef.type, tempImports);
            let originalImports = Array.from(tempImports.values()).filter(importAlias => !imports.has(importAlias.alias));

            //find our import by path and name from available imports

            //first compute any new imports created
            tempImports = new Map(imports);
            this.addImportsFromTypeDefinition(hiddenDef.type, tempImports);
            let hiddenImports = Array.from(tempImports.values()).filter(importAlias => !imports.has(importAlias.alias));

            let hiddenDefType = hiddenDef.type;
            //add the imports, using the available imports where possible
            for (let hiddenImport of hiddenImports) {
                // we need to search by import name since the clashed alias generator might be non-deterministic
                // there is still a chance of clash if the property imports properties of the same name as part of union
                let matchingOriginalImport = [...originalImports.values()].find(v => v.name == hiddenImport.name)

                if (matchingOriginalImport) {
                    hiddenDefType = hiddenDefType.replace(/import\("(.*?)"\)/g, `import("${matchingOriginalImport.path}")`);
                }
            }

            return this.addImportsFromTypeDefinition(hiddenDefType, imports);
        }
    }

    addPropDefintions(ctx: ClassDefinitionBuilderContext) {
        super.addPropDefintions(ctx);

        // We need to detect which attributes are properites that proxy to style
        let styleProxyDefs = this.getStyleProxyProperties(ctx.classType);
        styleProxyDefs.forEach(p => ctx.props.set(p.name, p));

        // patch in properties or definitions based on an underlying type not specified in the .d.ts file
        let hiddenProps = this.getPropertiesFromSkippedParent(ctx.classType);
        hiddenProps.forEach(hiddenDef => {
            this.addImportHandlerForHiddenProp(hiddenDef, ctx.props.get(hiddenDef.name))
            ctx.props.set(hiddenDef.name, hiddenDef)
        })

        // some hard coded patches for Core
        // there are some setters that act like properties at runtime using a (if typeof value === "string") pattern
        // which are a pain to find in the ast for now so we just patch them in here
        if (ctx.classType.getName() == "ViewBase") {
            let p = ctx.props.get("style");
            // style takes a string 
            if (p) {
                p.type = `string | ${p.type}`
                p.meta.derivedFrom = `ManuallyPatched(${p.meta.derivedFrom})`
            }
        }

        if (ctx.classType.getName() == "Label") {
            let p = ctx.props.get("textWrap");
            if (p) {
                p.type = `string | ${p.type}`
                p.meta.derivedFrom = `ManuallyPatched(${p.meta.derivedFrom})`
            }
        }

        // NS has some protected properties published as public, so we nuke them here
        for (let p of [...ctx.props.values()]) {
            if (p.name.endsWith("Protected")) {
                ctx.props.delete(p.name);
            }
        }
    }

    buildJSXDocument() {
        let doc = super.buildJSXDocument();
        const keepPaths = ["lineargradient", "domnode", "cssshadow", "navigationdata", "selectedindexchangedeventdata"]
        //patch imports to point to their npm package
        doc.imports.forEach(p => {
            if (p.path.startsWith(this.nativescriptCorePath)) {
                if (p.name.toLowerCase().startsWith('ios') || p.name.toLowerCase().startsWith('android') || keepPaths.includes(p.name.toLowerCase())) {
                    p.path = '@nativescript/core/' + path.relative(this.nativescriptCorePath, p.path).replace(/\\/g, '/');
                    p.path = p.path.replace(/\/index$/, '');
                } else {
                    p.path = '@nativescript/core'
                }
            }
        })

        //patch class file meta to be relative
        doc.classDefinitions.forEach(c => {
            c.meta.sourceFile = path.relative(this.nativescriptCorePath, c.meta.sourceFile).replace(/\\/g, '/');
        })

        return doc;
    }
}