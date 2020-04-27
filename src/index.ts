import * as path from 'path'
import * as fs from 'fs'
import { AttributeClassPropDefinition, JSXDocumentRenderer, AttributeClassDefinition, IntrinsicElementDefinition } from './JSXExporter';
import NativescriptCoreJSXExporter, { PropertyRegistration } from './NativescriptCoreJSXExporter';

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

class SvelteJSXDocumentRenderer extends JSXDocumentRenderer {
    renderClassPropertyName(prop: AttributeClassPropDefinition): string {
        return prop.meta.derivedFrom.startsWith('SyntheticEvent') ? prop.name : prop.name.toLowerCase();
    }

    renderJSXNamespace(intrinsicElements: IntrinsicElementDefinition[]): string {
        return (
            `declare namespace svelteNative.JSX {
    interface IntrinsicElements {
${this.renderIntrinsicElements(intrinsicElements)} 
        [name: string]: { [name: string]: any };
    }
}`)

    }
}

class ReactJSXDocumentRenderer extends JSXDocumentRenderer {
    renderClass(classDefinition: AttributeClassDefinition): string {
        let rendered = super.renderClass(classDefinition);
        return rendered.replace(/^type /m, "export type ");
    }

    renderJSXNamespace(intrinsicElements: IntrinsicElementDefinition[]) {
        return ''
    }
}


const jsxExporter = new NativescriptCoreJSXExporter(nativescriptSourcePath)

function exportSvelte() {
    console.log("writing svelte defs");

    let jsxDoc = jsxExporter.buildJSXDocumentFromNativeScriptSource();
    let renderer = new SvelteJSXDocumentRenderer();
    fs.writeFileSync("./sveltenative-jsx.d.ts", renderer.render(jsxDoc));
}

function exportReact() {
    console.log("writing react defs");

    let reactRenderer = new ReactJSXDocumentRenderer();

    let reactJsxDoc = jsxExporter.buildJSXDocumentFromNativeScriptSource();
    reactJsxDoc.imports.filter(i => i.alias != "Style");

    for (let c of reactJsxDoc.classDefinitions) {
        if (c.className == "ViewBaseAttributes") {
            c.props = c.props.filter(p => p.name != "style")
        }
    }

    fs.writeFileSync("./react-nativescript-jsx.ts", reactRenderer.render(reactJsxDoc));
}

exportSvelte()
exportReact()


