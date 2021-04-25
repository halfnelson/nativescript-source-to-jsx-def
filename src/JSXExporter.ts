import { ClassDeclaration, ts, Node, Scope, Type, SourceFile } from "ts-morph";
import pascalCase from 'uppercamelcase';
import path from "path";

export function orderBy<T>(items: T[], selector: (x: T) => any): T[] {
    return [...items].sort((a, b) => {
        const selectedA = selector(a);
        const selectedB = selector(b);
        if (selectedA < selectedB) return -1;
        if (selectedA > selectedB) return 1;
        return 0;
    })
}


export function getAncestors(cl: ClassDeclaration): ClassDeclaration[] {
    var parents = [];
    var tip: ClassDeclaration | undefined = cl;
    while (tip) {
        tip = tip.getBaseClass();
        if (tip) {
            parents.push(tip)
        }
    }
    return parents;
}

export function includeAncestors(classes: ClassDeclaration[]): ClassDeclaration[] {
    var allClasses: Set<ClassDeclaration> = new Set(classes);
    for (var c of classes) {
        getAncestors(c).forEach(a => allClasses.add(a));
    }
    return [...allClasses.values()];
}


export type ClassDefinitionBuilderContext = {
    classType: ClassDeclaration,
    className: string,
    parentClasses: AttributeClassDefinition[],
    props: Map<string, AttributeClassPropDefinition>
}

export type PropType = string

export type TypeResolver = {
    resolveImports: (existingImports: ImportMap) => TypeDefinitionWithImports
}

export type ClassProp = {
    name: string,
    typeDef: TypeResolver,
}

export type AttributeClassPropDefinition = {
    name: string,
    type: PropType,
    meta: {
        sourceFile: string,
        derivedFrom: string | "InstanceProperty"
        [index: string]: any
    }
}

export type AttributeClassDefinition = {
    className: string,
    parentClasses: AttributeClassDefinition[],
    props: AttributeClassPropDefinition[],
    meta: {
        sourceFile: string,
        [index: string]: any
    }
}

export type TypeDefinitionWithImports = {
    def: string,
    imports: ImportMap
}

export type Import = {
    path: string,
    name: string
}

export type ImportAlias = {
    alias: string,
    path: string,
    name: string,
    isNamespace?: boolean
}

export type IntrinsicElementDefinition = {
    name: string,
    attributeClass: AttributeClassDefinition
}

export type JSXDocument = {
    imports: ImportAlias[],
    classDefinitions: AttributeClassDefinition[],
    instrinsicElements: IntrinsicElementDefinition[]
}

export type JSXDocumentBuilderContext = {
    elementClassDeclarations: ClassDeclaration[],
    imports: ImportMap,
    classDefinitions: Map<string, AttributeClassDefinition>
    intrinsicElements: Map<string, IntrinsicElementDefinition>
}

export type ClassBuilderContext = {
    uiClasses: ClassDeclaration[],
    classDefinitions: Map<string, AttributeClassDefinition>
}

export type ImportMap = Map<string, ImportAlias>;

function withoutGenericArgs(name: string) {
    return name.match(/[^<\[]+/)![0];
}

export default class JSXExporter {

    getAttributeClassName(c: ClassDeclaration) {
        return pascalCase(c.getName()!) + "Attributes"
    }

    getTypeDefinition: (t: Type, node?: Node, dereferenceUnionTypes?: boolean) => PropType = (t: Type, node?: Node, dereferenceUnionTypes = true) => {
        //expand union types in-place instead of using imports, to keep the definition file easier to read
        if (dereferenceUnionTypes && t.isUnion() && !t.isEnum() && !t.isBoolean()) {
            let utDefs = t.getUnionTypes()
                .map(ut => this.getTypeDefinition(ut, undefined, false))
                .map(d => d.includes('=>') ? `(${d})` : d);

            return utDefs.join(" | ");
        }

        if (t.isClassOrInterface() || t.isArray() || t.isObject() || t.isEnum() || !node) {
            return t.getText();
        } else {
            // by passing in these flags, our type is no rendered as an import and is expanded if possible
            return t.getText(node, ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation);
        }
    }


    createAliasForImport(imports: ImportMap, importPath: string, importName: string): string {
        let alias = importName;

        if (!imports.get(alias)) {
            return alias;
        }

        // first try prefix with parent module
        alias = pascalCase(path.basename(importPath) == "index" ? path.basename(path.dirname(importPath)) : path.basename(importPath)) + importName;

        // if we still clash, we will just start adding numbers
        let i = 1;
        let baseAlias = withoutGenericArgs(alias);
        let oldAlias = alias;

        while (imports.get(alias)) {
            alias = oldAlias.replace(baseAlias, baseAlias + `_${i}`);
            i = i + 1;
        } 

        return alias;
    }

    addImportsFromTypeDefinition(text: string, imports: ImportMap): string {

        //Recursively replace imports inside generic type specifiers
        let def = text.replace(/<(.*?)>/g, (match: string, genericType: string) => {
            let replaced = this.addImportsFromTypeDefinition(genericType, imports)
            return `<${replaced}>`;
        });

        

        //replace the remaining 
        def = def.replace(/import\("(.*?)"\)\.(([a-zA-Z_0-9]+)(\<.*\>)?(\[\])?)(\.[a-zA-Z_0-9]+)?/g, (match: string, importPath: string, importExpression: string, importName: string, importGenericArgs: string, importArrayArgs: string, namespaceMember: string ) => {

            let aliasArgs = "";
            if (importGenericArgs) {
                let idx = 1;
                aliasArgs = importGenericArgs.replace(/[^<>,\s]+/g, m => `T${idx++}`);
            }
            let importAlias = importName + aliasArgs;


            let existingImportAlias = Array.from(imports).find(([_, imp]) => (imp.name == importAlias && imp.path == importPath))

            if (existingImportAlias)
                return importExpression.replace(importName, withoutGenericArgs(existingImportAlias?.[0])) + (namespaceMember ?? "")

            //no existing import alias, create one
            importAlias = this.createAliasForImport(imports, importPath, importAlias);
            imports.set(importAlias, { alias: importAlias, name: importName+aliasArgs, path: importPath, isNamespace: !!namespaceMember });
            
            return importExpression.replace(importName, withoutGenericArgs(importAlias)) + (namespaceMember ?? "");
        });

        return def
    }


    addinstancePropsClassDefinitions(context: ClassDefinitionBuilderContext) {
        for (var p of context.classType.getInstanceProperties()) {
            if (p.getScope() == Scope.Public && !p.getName().startsWith("_")) {
                let prop: AttributeClassPropDefinition = {
                    name: p.getName(),
                    type: this.getTypeDefinition(p.getType(), p),
                    meta: {
                        sourceFile: p.getSourceFile().getFilePath(),
                        derivedFrom: "InstanceProperty"
                    }
                }
                context.props.set(p.getName(), prop);
            }
        }
    }

    addPropDefintions(context: ClassDefinitionBuilderContext) {
        this.addinstancePropsClassDefinitions(context);
    }

    buildAttributeClassDefinition(c: ClassDeclaration, context: ClassBuilderContext): AttributeClassDefinition {
        let defContext: ClassDefinitionBuilderContext = {
            className: this.getAttributeClassName(c),
            classType: c,
            parentClasses: [],
            props: new Map()
        }

        let baseClass = c.getBaseClass();
        if (baseClass) {
            defContext.parentClasses.push(this.getOrAddClassDefinition(baseClass, context))
        }

        this.addPropDefintions(defContext);

        return {
            className: defContext.className,
            parentClasses: defContext.parentClasses,
            props: [...defContext.props.values()],
            meta: {
                sourceFile: c.getSourceFile().getFilePath()
            }
        }
    }

    addClassDefinition(c: ClassDeclaration, context: ClassBuilderContext) {
        let attributeClassName = this.getAttributeClassName(c);
        let builtDef = this.buildAttributeClassDefinition(c, context)
        context.classDefinitions.set(attributeClassName, builtDef);
    }

    getOrAddClassDefinition(c: ClassDeclaration, context: ClassBuilderContext): AttributeClassDefinition {
        let attributeClassName = this.getAttributeClassName(c);

        if (context.classDefinitions.has(attributeClassName)) {
            return context.classDefinitions.get(attributeClassName)!;
        }

        this.addClassDefinition(c, context);
        return context.classDefinitions.get(attributeClassName)!;
    }


    addImportsFromPropDefinition = (prop: AttributeClassPropDefinition, classDef: AttributeClassDefinition, { imports }: JSXDocumentBuilderContext) => {
        prop.type = this.addImportsFromTypeDefinition(prop.type, imports);
    }

    addImportsFromClassDefinitions = (context: JSXDocumentBuilderContext) => {
        for (let classDef of context.classDefinitions.values()) {
            for (let prop of classDef.props) {
                this.addImportsFromPropDefinition(prop, classDef, context);
            }
        }
    }

    addClassDefinitions = (context: JSXDocumentBuilderContext) => {
        let { elementClassDeclarations: uiClasses, classDefinitions, intrinsicElements } = context;

        let classBuilderContext: ClassBuilderContext = {
            uiClasses: uiClasses,
            classDefinitions: classDefinitions
        }

        for (let uiClass of uiClasses) {
            let intrinsicElementName = uiClass.getName()!;
            intrinsicElements.set(intrinsicElementName, { name: intrinsicElementName,  attributeClass: this.getOrAddClassDefinition(uiClass, classBuilderContext)})
        }
    }


    buildJSXDocumentFromElementClassDeclarations(elementClassDeclarations: ClassDeclaration[]): JSXDocument {
        let documentContext: JSXDocumentBuilderContext = {
            elementClassDeclarations: elementClassDeclarations,
            imports: new Map(),
            classDefinitions: new Map(),
            intrinsicElements: new Map()
        }

        this.addClassDefinitions(documentContext);
        this.addImportsFromClassDefinitions(documentContext);

        let importAliases = Array.from(documentContext.imports).map(([alias, props]) => ({ ...props, alias }))

        let doc: JSXDocument = {
            instrinsicElements: orderBy([...documentContext.intrinsicElements.values()], x => x.name),
            classDefinitions: orderBy([...documentContext.classDefinitions.values()], x => x.className),
            imports: orderBy(importAliases, x => x.alias)
        }

        return doc;
    }

}


