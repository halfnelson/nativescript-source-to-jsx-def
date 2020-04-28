import * as path from 'path'
import * as fs from 'fs'
import { AttributeClassPropDefinition, AttributeClassDefinition, IntrinsicElementDefinition } from './JSXExporter';
import JSXDocumentRenderer from "./JSXDocumentRenderer";
import NativescriptCoreJSXExporter from './NativescriptCoreJSXExporter';
import NativescriptPluginJSXExporter from './NativescriptPluginJSXExporter';

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

class SvelteJSXDocumentRenderer extends JSXDocumentRenderer {
    renderClassPropertyName(prop: AttributeClassPropDefinition): string {
        return prop.meta.derivedFrom.includes("SyntheticEvent") ? prop.name : prop.name.toLowerCase();
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


const jsxExporter = NativescriptCoreJSXExporter.FromSourcePath(nativescriptSourcePath)

function exportSvelte() {
    console.log("writing svelte defs");

    let jsxDoc = jsxExporter.buildJSXDocument();
    let renderer = new SvelteJSXDocumentRenderer();
    fs.writeFileSync("./sveltenative-jsx.d.ts", renderer.render(jsxDoc));
}

function exportReact() {
    console.log("writing react defs");

    let reactRenderer = new ReactJSXDocumentRenderer();

    let reactJsxDoc = jsxExporter.buildJSXDocument();
    reactJsxDoc.imports.filter(i => i.alias != "Style");

    for (let c of reactJsxDoc.classDefinitions) {
        if (c.className == "ViewBaseAttributes") {
            c.props = c.props.filter(p => p.name != "style")
        }
    }

    fs.writeFileSync("./react-nativescript-jsx.ts", reactRenderer.render(reactJsxDoc));
}


function exportSideDrawer() {
    const pluginExporter = NativescriptPluginJSXExporter.FromNodeModule("nativescript-ui-sidedrawer");

    let renderer = new SvelteJSXDocumentRenderer(true);
    let doc = pluginExporter.buildJSXDocument()
    fs.mkdirSync("./plugins");
    fs.writeFileSync('./plugins/sveltenative-jsx-nativescript-ui-sidedrawer.d.ts', renderer.render(doc));
}

exportSvelte()
exportReact()
exportSideDrawer()
