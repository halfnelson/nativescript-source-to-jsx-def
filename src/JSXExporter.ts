import { Project, ClassDeclaration, ts, Node, Scope, Type } from "ts-morph";
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


type ClassDefinitionFilterContext = {
    classType: ClassDeclaration,
    className: string,
    parentClasses: AttributeClassDefinition[],
    props: Map<string, PropType>,
    getTypeDefinition(t: Type, node?: Node, dereferenceUnionTypes?: boolean): PropType
}

export type ClassDefinitionFilter = (context: ClassDefinitionFilterContext) => void;

interface JSXExporterConfig {
    project: Project;
    isElementClass: (classDecl: ClassDeclaration) => boolean;
    classDefinitionFilters?: ClassDefinitionFilter[]
    documentFilters?: ((context: JSXDocumentBuilderContext) => void)[]
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
}


export type AttributeClassDefinition = {
    className: string,
    parentClasses: AttributeClassDefinition[],
    props: AttributeClassPropDefinition[]
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
    name: string
}

export type JSXDocument = {
    imports: ImportAlias[],
    classDefinitions: AttributeClassDefinition[]
    attributeClasses: AttributeClassDefinition[]
}

type JSXDocumentBuilderContext = {
    imports: ImportMap,
    classDefinitions: Map<string, AttributeClassDefinition>
    attributeClasses: Set<AttributeClassDefinition>
}

type ClassBuilderContext = {
    uiClasses: ClassDeclaration[],
    classDefinitions: Map<string, AttributeClassDefinition>
}

function combinedMap<K, V>(a: Map<K, V>, b: Map<K, V>): Map<K, V> {
    return new Map([...a.entries()].concat([...b.entries()]))
}

function createAliasForClash(existingImports: ImportMap, importPath: string, importName: string): string {
    //TODO Check existing imports for clash and add a digit or something
    return pascalCase(path.basename(importPath)) + importName;
}



function resolveImports(text: string, imports: ImportMap): string {

    //Recursively replace imports inside generic type specifiers
    let def = text.replace(/<(.*?)>/g, (match: string, genericType: string) => {
        let replaced = resolveImports(genericType, imports)
        return `<${replaced}>`;
    });

    //replace the remaining 
    def = def.replace(/import\("(.*?)"\)\.([a-zA-Z_0-9\<\>\[\]]+)/g, (match: string, importPathMatch: string, importExpression: string) => {
        let importName = importExpression.replace("[]", "");
        let importPath = importPathMatch; //('@nativescript/core/' + path.relative(nativescriptSourcePath, importPathMatch)).replace(/\\/g, '/');

        let existingImportAlias = Array.from(imports).find(([_, imp]) => (imp.name == importName && imp.path == importPath))

        if (existingImportAlias)
            return importExpression.replace(importName, existingImportAlias?.[0])

        //no existing import alias, create one
        let importAlias = importName;

        //is our alias unique?
        if (imports.get(importName)) {
            //create a new alias
            importAlias = createAliasForClash(imports, importPath, importName);
            imports.set(importAlias, { name: importName, path: importPath });
            return importExpression.replace(importName, importAlias);
        }

        //use name as alias
        imports.set(importAlias, { path: importPath, name: importName });
        return importExpression;
    });

    return def
}



export type ImportMap = Map<string, Import>;


export default class JSXExporter {

    config: JSXExporterConfig;

    constructor(config: JSXExporterConfig) {
        this.config = config;
    }

    getElementClasses() {
        var uiClasses = [];
        for (var file of this.config.project.getSourceFiles()) {
            let classes = file.getClasses();
            for (var classDef of classes) {
                if (this.config.isElementClass(classDef)) {
                    uiClasses.push(classDef);
                }
            }
        }
        return uiClasses;
    }

    getAttributeClassName(c: ClassDeclaration) {
        return pascalCase(c.getName()!) + "Attributes"
    }

    getTypeDefinition: (t: Type, node?: Node, dereferenceUnionTypes?: boolean) => PropType = (t: Type, node?: Node, dereferenceUnionTypes = true) => {
        //expand union types in-place instead of using imports, to keep the definition file easier to read
        if (dereferenceUnionTypes && t.isUnion()) {
            let utDefs = t.getUnionTypes()
                .map(ut => this.getTypeDefinition(ut, undefined, false))
                .map(d => d.includes('=>') ? `(${d})` : d);

            return utDefs.join(" | ");
        }

        if (t.isClassOrInterface() || t.isArray() || t.isObject() || !node) {
            return t.getText();
        } else {
            // by passing in these flags, our type is no rendered as an import and is expanded if possible
            return t.getText(node, ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation);
        }
    }

    instancePropsClassDefinitionFilter(context: ClassDefinitionFilterContext) {
        for (var p of context.classType.getInstanceProperties()) {
            if (p.getScope() == Scope.Public && !p.getName().startsWith("_")) {
                context.props.set(p.getName(), context.getTypeDefinition(p.getType(), p));
            }
        }
    }

    buildAttributeClassDefinition(c: ClassDeclaration, context: ClassBuilderContext): AttributeClassDefinition {
        let defContext: ClassDefinitionFilterContext = {
            className: this.getAttributeClassName(c),
            classType: c,
            parentClasses: [],
            props: new Map(),
            getTypeDefinition: this.getTypeDefinition
        }

        let baseClass = c.getBaseClass();
        if (baseClass) {
            defContext.parentClasses.push(this.getAttributeClassDef(baseClass, context))
        }

        for (var filter of [this.instancePropsClassDefinitionFilter.bind(this), ...(this.config.classDefinitionFilters || [])]) {
            filter(defContext);
        }

        return {
            className: defContext.className,
            parentClasses: defContext.parentClasses,
            props: [...defContext.props.entries()].map(([name, def]) => ({ name: name, type: def }))
        }
    }

    getAttributeClassDef(c: ClassDeclaration, context: ClassBuilderContext): AttributeClassDefinition {
        let attributeClassName = this.getAttributeClassName(c);

        if (context.classDefinitions.has(attributeClassName)) {
            return context.classDefinitions.get(attributeClassName)!;
        }
        let builtDef = this.buildAttributeClassDefinition(c, context)
        context.classDefinitions.set(attributeClassName, builtDef);
        return builtDef;
    }


    extractImportsFromProp = ( prop: AttributeClassPropDefinition, classDef: AttributeClassDefinition, { imports }: JSXDocumentBuilderContext ) => {
        prop.type = resolveImports(prop.type, imports);
    }


    extractImportsFromClasses = (ctx: JSXDocumentBuilderContext) => {
        for (let classDef of ctx.classDefinitions.values()) {
            for (let prop of classDef.props) {
                this.extractImportsFromProp(prop, classDef, ctx);
            }
        }
    }

    processClassDefinitions = ({ classDefinitions, attributeClasses }: JSXDocumentBuilderContext) => {
        let uiClasses = this.getElementClasses();

        let classBuilderContext: ClassBuilderContext = {
            uiClasses: uiClasses,
            classDefinitions: classDefinitions
        }

        for (let uiClass of uiClasses) {
            attributeClasses.add(this.getAttributeClassDef(uiClass, classBuilderContext))
        }
    }


    buildJSXDocument(): JSXDocument {
        let documentContext: JSXDocumentBuilderContext = {
            imports: new Map(),
            classDefinitions: new Map(),
            attributeClasses: new Set()
        }

        this.processClassDefinitions(documentContext);
        this.extractImportsFromClasses(documentContext);

        let importAliases = Array.from(documentContext.imports).map(([alias, { path, name }]) => ({ alias, path, name }))

        let doc: JSXDocument = {
            attributeClasses: orderBy([...documentContext.attributeClasses.values()], x => x.className),
            classDefinitions: orderBy([...documentContext.classDefinitions.values()], x => x.className),
            imports: orderBy(importAliases, x => x.alias)
        }

        return doc;
    }

}