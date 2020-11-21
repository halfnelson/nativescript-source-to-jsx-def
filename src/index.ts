import * as path from 'path'
import * as fs from 'fs'
import { AttributeClassDefinition, AttributeClassPropDefinition, IntrinsicElementDefinition } from './JSXExporter';
import JSXDocumentRenderer from "./JSXDocumentRenderer";
import NativescriptCoreJSXExporter from './NativescriptCoreJSXExporter';
import NativescriptPluginJSXExporter from './NativescriptPluginJSXExporter';
import { SvelteJSXDocumentRenderer } from './SvelteJSXDocumentRenderer';

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/packages/core");

class ReactJSXDocumentRenderer extends JSXDocumentRenderer {
    renderClass(classDefinition: AttributeClassDefinition): string {
        let rendered = super.renderClass(classDefinition);
        return rendered.replace(/^type /m, "export type ");
    }

    renderClassPropertyName(prop: AttributeClassPropDefinition): string {
        if (prop.meta.derivedFrom.includes("SyntheticEvent") && prop.name.startsWith('on')) {
            return prop.name.slice(0,2) + prop.name[2].toUpperCase() + prop.name.slice(3);
        } else {
            return prop.name;
        }
    }

    renderJSXNamespace(intrinsicElements: IntrinsicElementDefinition[]) {
        return ''
    }
}

function exportCore() {
    console.log("Exporting core")
    let jsxExporter = NativescriptCoreJSXExporter.FromSourcePath(nativescriptSourcePath);
    let jsxDoc = jsxExporter.buildJSXDocument();
    let svelteRenderer = new SvelteJSXDocumentRenderer();
    fs.writeFileSync("./svelte-native-defs/svelte-native-jsx-nativescript-core.d.ts", svelteRenderer.render(jsxDoc));
    
    //RNS doesn't want the style attribute
    jsxDoc.imports.filter(i => i.alias != "Style");

    for (let c of jsxDoc.classDefinitions) {
        if (c.className == "ViewBaseAttributes") {
            c.props = c.props.filter(p => p.name != "style")
        }
    }
    let rnsRenderer = new ReactJSXDocumentRenderer();
    fs.writeFileSync("./react-nativescript-defs/react-nativescript-jsx.ts", rnsRenderer.render(jsxDoc));
}

function exportModule(moduleName: string) {
    console.log(`Exporting ${moduleName}`)
    const pluginExporter = NativescriptPluginJSXExporter.FromNodeModule(moduleName);
    let svelteRenderer = new SvelteJSXDocumentRenderer();
    let rnsRenderer = new ReactJSXDocumentRenderer();
    let doc = pluginExporter.buildJSXDocument()
   
    fs.writeFileSync(`./svelte-native-defs/svelte-native-jsx-${moduleName}.d.ts`, svelteRenderer.render(doc));
    fs.writeFileSync(`./react-nativescript-defs/react-nativescript-jsx-${moduleName}.ts`, rnsRenderer.render(doc));
}


fs.mkdirSync("./svelte-native-defs", { recursive: true});
fs.mkdirSync("./react-nativescript-defs", { recursive: true});

exportCore()
//exportModule("nativescript-ui-sidedrawer")
//exportModule("nativescript-ui-listview")
//exportModule("nativescript-ui-chart")
