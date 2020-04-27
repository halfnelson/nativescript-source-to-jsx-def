import JSXExporter, { getAncestors, JSXDocument, ClassDefinitionBuilderContext, AttributeClassPropDefinition, AttributeClassDefinition, ImportMap, JSXDocumentBuilderContext } from "./JSXExporter";
import { Project, Node, ClassDeclaration, Type, SourceFile, InterfaceDeclaration } from "ts-morph";
import path from "path";
import pascalCase from 'uppercamelcase';



function isElementClass(c: ClassDeclaration) {
    // nativescript can have multiple definitions of a class, one in the .d.ts file and the other in .android/.ios file (or even in -common) file
    // so as well as ensuring it inherits from viewbase, we should also prefer the ones defined in the .d.ts files where available
    const fp = c.getSourceFile().getFilePath();

    //only consider files in /ui/*
    if (! /\/ui\//.test(fp)) return false

    //prefer .d.ts versions where possible (except for formatted-string and span where ts-morph won't load their .d.ts files)
    const isValidFile = (fp.endsWith('text-base/formatted-string.ts')
        || fp.endsWith('text-base/span.ts')
        || path.basename(fp) == `${path.basename(path.dirname(fp))}.d.ts`
    )

    if (!isValidFile) return false;

    return isUIClass(c);
}

function inheritsFromViewBase(cl: ClassDeclaration): boolean {
    var parents = getAncestors(cl);//  getParentClasses(cl);
    //we must inherit from ViewBase
    return parents.find(p => p.getName() == "ViewBase") ? true : false;
}

function isUIClass(cl: ClassDeclaration) {
    return inheritsFromViewBase(cl) && (!cl.getName()?.endsWith("Base"))
}


function getPropertyRegistrations(project: Project, sourcePath: string) {
    var statements: PropertyRegistration[] = [];
    var propertyfile = project.getSourceFileOrThrow(sourcePath + "/ui/core/properties/properties.ts")
    var property = propertyfile.getClassOrThrow("Property");
    var refs = property.getMethod("register")?.findReferencesAsNodes() ?? []
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

export type PropertyRegistration = {
    propertyName: string,
    targetClassName: string,
    propertyType: Type,
    propertyNode: Node
}


export default class NativescriptCoreJSXExporter extends JSXExporter {
    nativescriptSourcePath: string;
    project: Project;

    dynamicProperties: PropertyRegistration[]
    propertyChangeType: Type;

    constructor(nativescriptSourcePath: string) {
        super();
        this.nativescriptSourcePath = nativescriptSourcePath;
        this.project = new Project({
            tsConfigFilePath: this.nativescriptSourcePath + "/tsconfig.json",
        });

        this.dynamicProperties = getPropertyRegistrations(this.project, this.nativescriptSourcePath);
        this.propertyChangeType = this.project.getSourceFileOrThrow(nativescriptSourcePath + "/data/observable/observable.d.ts").getInterfaceOrThrow("PropertyChangeData").getType();
    }

    getElementClassDeclarations(project: Project) {
        let uiClasses: ClassDeclaration[] = []
        for (var file of project.getSourceFiles()) {
            let classes = file.getClasses();
            for (var classDef of classes) {
                if (isElementClass(classDef)) {
                    uiClasses.push(classDef);
                }
            }
        }
        return uiClasses
    }

    private addStringToType(t: Type, def: string): string {
        //already compatible with string
        if (t.isStringLiteral() || t.isString())
            return def;

        if (t.isUnion()) {
            let incompatibleWithString = t.getUnionTypes().some(x => !x.isStringLiteral()) && !t.getUnionTypes().some(x => x.isString());
            if (!incompatibleWithString) { return def }
        }

        //otherwise just preprend it
        return `string | ${def}`
    }


    getSyntheticEventHandlers(c: ClassDeclaration): AttributeClassPropDefinition[] {
        var props: AttributeClassPropDefinition[] = []

        var gestureTypes = this.project.getSourceFileOrThrow(this.nativescriptSourcePath + "/ui/gestures/gestures.d.ts").getEnumOrThrow("GestureTypes");

        for (var m of c.getInstanceMethods().filter(m => m.getName() == "on")) {

            let params = m.getParameters();
            if (!params || params.length < 2) continue;

            let [eventParam, callbackParam] = params;

            //explicitly defined event
            if (eventParam.getType().isStringLiteral()) {
                var propname = "on" + pascalCase(eventParam.getType().getText().replace(/"/g, ""));
                props.push({
                    name: propname,
                    type: this.getTypeDefinition(callbackParam.getType(), callbackParam),
                    meta: {
                        derivedFrom: "SyntheticEvent:Explicit",
                        sourceFile: eventParam.getSourceFile().getFilePath()
                    }
                })
            }

            //add gesture type events to this class if it supports it
            if (eventParam.getType().isUnion() && eventParam.getType().getUnionTypes().find(ut => ut.getText(eventParam) == "GestureTypes")) {
                let gestureSource = gestureTypes.getSourceFile();
                let defaultEventType = gestureSource.getInterfaceOrThrow("GestureEventData");
                for (var gesture of gestureTypes.getMembers().map(m => m.getName())) {
                    let name = "on" + pascalCase(gesture);
                    let expectedEventDataTypeName = gesture == "tap" ? "DoubleTapGestureEventData" : pascalCase(gesture) + "GestureEventData";
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
        let filename = path.basename(currentFile, ".d.ts");
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

    addImportsFromPropDefinition = (prop: AttributeClassPropDefinition, classDef: AttributeClassDefinition, { imports }: JSXDocumentBuilderContext) => {
        if (prop.meta.addImports) {
            prop.type = prop.meta.addImports(imports)
        } else {
            prop.type = this.addImportsFromTypeDefinition(prop.type, imports);
        }
    }

    getDynamicPropertiesForClass(classDecl: ClassDeclaration): AttributeClassPropDefinition[] {
        let propsForThisClass = this.dynamicProperties.filter(x => x.targetClassName == classDecl.getName());

        return propsForThisClass.map(p => ({
            name: p.propertyName,
            type: this.addStringToType(p.propertyType, this.getTypeDefinition(p.propertyType, p.propertyNode)),
            meta: {
                derivedFrom: "DynamicPropertyRegistration",
                sourceFile: p.propertyNode.getSourceFile().getFilePath()
            }
        }) as AttributeClassPropDefinition)
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

        // synthetic event handlers, that is, we add a dom like on<EventName> for each event declared in the defs
        let eventHandlers = this.getSyntheticEventHandlers(ctx.classType);
        eventHandlers.forEach(p => ctx.props.set(p.name, p));

        // patch in properties or definitions based on an underlying type not specified in the .d.ts file
        let hiddenProps = this.getPropertiesFromSkippedParent(ctx.classType);
        hiddenProps.forEach(hiddenDef => {
            this.addImportHandlerForHiddenProp(hiddenDef, ctx.props.get(hiddenDef.name))
            ctx.props.set(hiddenDef.name, hiddenDef)
        })

        let dynamicProps = this.getDynamicPropertiesForClass(ctx.classType);
        dynamicProps.forEach(p => {
            ctx.props.set(p.name, p)
        })
        // add propchange events
        dynamicProps.forEach(p => {
            let changeEventProp: AttributeClassPropDefinition = {
                name: `on${pascalCase(p.name)}Change`,
                type: `(args: ${this.getTypeDefinition(this.propertyChangeType)}) => void`,
                meta: {
                    derivedFrom: p.meta.derivedFrom,
                    sourceFile: p.meta.sourceFile
                }
            }
            ctx.props.set(changeEventProp.name, changeEventProp);
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


    buildJSXDocumentFromNativeScriptSource(): JSXDocument {
        return this.buildJSXDocument(this.getElementClassDeclarations(this.project));
    }

    buildJSXDocument(elementClassDeclarations: ClassDeclaration[]): JSXDocument {
        let doc = super.buildJSXDocument(elementClassDeclarations);

        //patch imports to point to their npm package
        doc.imports.forEach(p => {
            p.path = '@nativescript/core/' + path.relative(this.nativescriptSourcePath, p.path).replace(/\\/g, '/');
        })

        //patch class file meta to be relative
        doc.classDefinitions.forEach(c => {
            c.meta.sourceFile = path.relative(this.nativescriptSourcePath, c.meta.sourceFile).replace(/\\/g, '/');
        })

        return doc;
    }
}