import JSXExporter, { getAncestors, JSXDocument, ClassDefinitionBuilderContext, AttributeClassPropDefinition, AttributeClassDefinition, ImportMap, JSXDocumentBuilderContext } from "./JSXExporter";
import { Project, Node, ClassDeclaration, Type, SourceFile, InterfaceDeclaration } from "ts-morph";
import path from "path";
import pascalCase from 'uppercamelcase';





export function inheritsFromViewBase(cl: ClassDeclaration): boolean {
    var parents = getAncestors(cl);//  getParentClasses(cl);
    //we must inherit from ViewBase
    return parents.find(p => p.getName() == "ViewBase") ? true : false;
}

export function isUIClass(cl: ClassDeclaration) {
    return inheritsFromViewBase(cl) && (!cl.getName()?.endsWith("Base"))
}




export type PropertyRegistration = {
    propertyName: string,
    targetClassName: string,
    propertyType: Type,
    propertyNode: Node
}


export default abstract class NativescriptJSXExporter extends JSXExporter {
    nativescriptCorePath: string;
    project: Project;

    dynamicProperties: PropertyRegistration[]
    propertyChangeType: Type;

    protected constructor(nativescriptCorePath: string, project: Project) {
        super();
        this.nativescriptCorePath = path.normalize(nativescriptCorePath).replace(/\\/g, '/');
    
        this.project = project;

        this.propertyChangeType = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/data/observable/observable.d.ts").getInterfaceOrThrow("PropertyChangeData").getType();
        this.dynamicProperties = this.getPropertyRegistrations();
    }

    isElementClass(c: ClassDeclaration) {
        return isUIClass(c);
    }

    getElementClassDeclarations(project: Project) {
        let uiClasses: ClassDeclaration[] = []
        for (var file of project.getSourceFiles()) {
            let classes = file.getClasses();
            for (var classDef of classes) {
                if (this.isElementClass(classDef)) {
                    uiClasses.push(classDef);
                }
            }
        }
        return uiClasses
    }


    getPropertyRegistrations() {
        var statements: PropertyRegistration[] = [];
        var propertyClass = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/ui/core/properties/properties.d.ts").getClassOrThrow("Property");
        
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

    protected addStringToType(t: Type, def: string): string {
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
        }
        return props;
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

    addPropDefintions(ctx: ClassDefinitionBuilderContext) {
        super.addPropDefintions(ctx);

        // synthetic event handlers, that is, we add a dom like on<EventName> for each event declared in the defs
        let eventHandlers = this.getSyntheticEventHandlers(ctx.classType);
        eventHandlers.forEach(p => ctx.props.set(p.name, p));

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
                    derivedFrom: "SyntheticEvent:PropertyChange",
                    sourceFile: p.meta.sourceFile
                }
            }
            ctx.props.set(changeEventProp.name, changeEventProp);
        })
    }

    buildJSXDocument(): JSXDocument {
        let doc = this.buildJSXDocumentFromElementClassDeclarations(this.getElementClassDeclarations(this.project));
        
        //patch imports to point to their npm package
        doc.imports.forEach(p => {
            if (p.path.startsWith(this.nativescriptCorePath)) {
                p.path = '@nativescript/core/' + path.relative(this.nativescriptCorePath, p.path).replace(/\\/g, '/');
            }
        })

      

        return doc;
    }
}