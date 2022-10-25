import { AttributeClassDefinition, AttributeClassPropDefinition, IntrinsicElementDefinition, JSXDocument } from './JSXExporter';
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
    renderClass(classDefinition: AttributeClassDefinition): string {
        // Convert our derived event handler props to svelte like "on:" handlers.
        // we leave the existing `ontap` ones there for back compat for now
        var eventProps = classDefinition.props.filter(p => p.meta.derivedFrom.includes("SyntheticEvent:") && p.name.startsWith("on"))
        var svelteEventProps = eventProps.map(ep => ({...ep, name: `"on:${ep.name.substring(2)}"`}))
        var classWithEvents = { ...classDefinition, props: classDefinition.props.concat(svelteEventProps)}
        return super.renderClass(classWithEvents);
    }
}

