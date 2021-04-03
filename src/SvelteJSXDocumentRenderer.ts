import { AttributeClassPropDefinition, IntrinsicElementDefinition, JSXDocument } from './JSXExporter';
import JSXDocumentRenderer from "./JSXDocumentRenderer";

export class SvelteJSXDocumentRenderer extends JSXDocumentRenderer {
    renderJSXNamespace(intrinsicElements: IntrinsicElementDefinition[]): string {
        return (`
interface IntrinsicElements {
${this.renderIntrinsicElements(intrinsicElements)} 
}
`);
    }

    render(doc: JSXDocument) {
        return `export {} //Ensure this is a module
${this.renderImports(doc.imports)}

declare global {
namespace svelteNative.JSX {

${this.renderClasses(doc.classDefinitions)}

${this.renderJSXNamespace(doc.instrinsicElements)}

}
}
`  
    }
}

