import JSXExporter, { getAncestors, JSXDocument, ClassDefinitionBuilderContext, AttributeClassPropDefinition, AttributeClassDefinition, ImportMap, JSXDocumentBuilderContext } from "./JSXExporter";
import { Project, Node, ClassDeclaration, Type } from "ts-morph";


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
    project: Project;
    _dynamicProperties: PropertyRegistration[] | undefined;
    
    abstract propertyChangeType: Type;
    abstract propertyClass: ClassDeclaration;

    protected constructor(project: Project) {
        super();
        this.project = project;
    }

    get dynamicProperties():PropertyRegistration[] {
        return this._dynamicProperties ?? this.getPropertyRegistrations();
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


  

    protected addStringToType(t: Type, def: string): string {
        //already compatible with string
        if (t.isStringLiteral() || t.isString())
            return def;

        if (t.isUnion()) {
            let incompatibleWithString = t.getUnionTypes().some(x => !x.isStringLiteral()) && !t.getUnionTypes().some(x => x.isString());
            if (!incompatibleWithString) { return def }
        } else {
            if (def.includes('=>')) {
                def = `(${def})`;
            }
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
                var propname = "on" + eventParam.getType().getText().replace(/"/g, "");
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
                name: `on${p.name}Change`,
                type: `(args: ${this.getTypeDefinition(this.propertyChangeType)}) => void`,
                meta: {
                    derivedFrom: "SyntheticEvent:PropertyChange",
                    sourceFile: p.meta.sourceFile
                }
            }
            ctx.props.set(changeEventProp.name, changeEventProp);
        })
    }

    getPropertyRegistrations(): PropertyRegistration[] {
        let registrations:PropertyRegistration[] = [];
        var propertyClass = this.propertyClass;
        for (var node of propertyClass.findReferencesAsNodes()) {
            let possibleDeclaration = node.getParent()?.getParent();
            
            if (possibleDeclaration && (Node.isVariableDeclaration(possibleDeclaration) || Node.isPropertyDeclaration(possibleDeclaration))) {
                let typeRef = possibleDeclaration.getTypeNode();
                let name = possibleDeclaration.getName().replace(/Property$/, "");
                if (typeRef) {
                    let [targetClassType, propertyValueType] = typeRef.getType().getTypeArguments();
                    registrations.push({
                        propertyName: name,
                        propertyNode: typeRef,
                        propertyType: propertyValueType,
                        targetClassName: targetClassType.getText(typeRef)
                    })
                    //console.log(`Found prop ${targetClassType.getText(typeRef)}.${name}: ${propertyValueType.getText(typeRef)} in ${path.basename(node.getSourceFile().getFilePath())}`);        
                }
            }
            
        }
        return registrations;
    }

    
    getDynamicPropertiesForClass(classDecl: ClassDeclaration): AttributeClassPropDefinition[] {
        let propsForThisClass = this.dynamicProperties.filter(x => x.targetClassName == classDecl.getName());

        //remove duplicates
        let propMap: Map<string, PropertyRegistration> = new Map()

        propsForThisClass.forEach(p => {
            if (propMap.has(p.propertyName)) {
                //don't overwrite if we end in common.d.ts
                if (p.propertyNode.getSourceFile().getFilePath().endsWith('common.d.ts')) return;
            }
            propMap.set(p.propertyName, p);
        })

        return [...propMap.values()].map(p => ({
            name: p.propertyName,
            type: this.addStringToType(p.propertyType, this.getTypeDefinition(p.propertyType, p.propertyNode)),
            meta: {
                derivedFrom: "DynamicPropertyRegistration",
                sourceFile: p.propertyNode.getSourceFile().getFilePath()
            }
        }) as AttributeClassPropDefinition)
    }


    buildJSXDocument(): JSXDocument {
        let doc = this.buildJSXDocumentFromElementClassDeclarations(this.getElementClassDeclarations(this.project));
        
        return doc;
    }
}