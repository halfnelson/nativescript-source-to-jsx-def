import path from "path";
import { ImportAlias, AttributeClassPropDefinition, AttributeClassDefinition, orderBy, IntrinsicElementDefinition, JSXDocument } from "./JSXExporter";
export default class JSXDocumentRenderer {
    
    constructor(public debug: boolean = false) { }
    
    renderImport({ alias, path, name, isNamespace }: ImportAlias) {
        if (isNamespace) 
            return `import type { ${name == alias ? alias : `${name} as ${alias}`} } from "${path}"`
        
        return `type ${alias} = import("${path}").${name};`;
    }
    
    renderImports(imports: ImportAlias[]): string {
        return orderBy(imports, x => !x.isNamespace).map(i => this.renderImport(i)).join("\n") +  "\ntype Override<What, With> = Omit<What, keyof With> & With\n";
    }

    renderClassPropertyName(propDefinition: AttributeClassPropDefinition): string {
        return `${propDefinition.name}`;
    }

    renderPropertyDefintion(propDefinition: AttributeClassPropDefinition): string {
        return `    ${this.renderClassPropertyName(propDefinition)}?: ${propDefinition.type};${this.debug ? ` // ${propDefinition.meta.derivedFrom} ${path.basename(propDefinition.meta.sourceFile)}` : ''}`;
    }

    renderClass(classDefinition: AttributeClassDefinition): string {
        let propDefs = orderBy(classDefinition.props, x => x.name).map(p => this.renderPropertyDefintion(p));
        let baseClassPreamble = classDefinition.parentClasses.length > 0 ? `Override<${classDefinition.parentClasses.map(x => x.className).join(" & ")}, ` : ``;
        let baseClassPostscript = classDefinition.parentClasses.length > 0 ? `>`: ``;
        return `// ${classDefinition.meta.sourceFile}\ntype ${classDefinition.className} = ${baseClassPreamble}{\n${propDefs.join("\n")}\n}${baseClassPostscript};`;
    }

    renderClasses(classDefinitions: AttributeClassDefinition[]): string {
        return classDefinitions.map(c => this.renderClass(c)).join("\n\n");
    }

    renderIntrinsicElementTagName(intrinsicElement: IntrinsicElementDefinition) {
        return intrinsicElement.name[0].toLowerCase() + intrinsicElement.name.substr(1);
    }

    renderIntrinsicElement(intrinsicElement: IntrinsicElementDefinition) {
        return `        ${this.renderIntrinsicElementTagName(intrinsicElement)}: ${intrinsicElement.attributeClass.className};`;
    }

    renderIntrinsicElements(intrinsicElements: IntrinsicElementDefinition[]) {
        return intrinsicElements.map(c => this.renderIntrinsicElement(c)).join("\n");
    }

    renderJSXNamespace(intrinsicElements: IntrinsicElementDefinition[]) {
        return (`declare namespace JSX {
    interface IntrinsicElements {
${this.renderIntrinsicElements(intrinsicElements)} 
    [name: string]: { [name: string]: any };
    }
}
`);
    }

    render(doc: JSXDocument) {
        return `${this.renderImports(doc.imports)}\n\n${this.renderClasses(doc.classDefinitions)}\n\n${this.renderJSXNamespace(doc.instrinsicElements)}\n\n`;
    }
}
