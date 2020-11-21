import { JSXDocument } from './JSXExporter';
import NativescriptCoreJSXExporter from './NativescriptCoreJSXExporter';
import NativescriptPluginJSXExporter from './NativescriptPluginJSXExporter';
import { SvelteJSXDocumentRenderer } from './SvelteJSXDocumentRenderer';
import { ReactJSXDocumentRenderer } from './ReactJSXDocumentRenderer';


export function renderSvelte(jsxDoc: JSXDocument): string {
    let svelteRenderer = new SvelteJSXDocumentRenderer();
    return svelteRenderer.render(jsxDoc);
}

export function renderReact(jsxDoc: JSXDocument, isCore: boolean = false): string {
   
    let rnsRenderer = new ReactJSXDocumentRenderer(isCore);
    return rnsRenderer.render(jsxDoc);
}

export function buildCoreJSX(nativescriptCorePackageSrcPath: string): JSXDocument {
 
    let jsxExporter = NativescriptCoreJSXExporter.FromSourcePath(nativescriptCorePackageSrcPath);
    let jsxDoc = jsxExporter.buildJSXDocument();
    return jsxDoc;
}

export function buildModuleJSX(moduleName: string, modulePath: string, nativescriptCorePath: string): JSXDocument {
    let jsxExporter = NativescriptPluginJSXExporter.FromNodeModule(moduleName, modulePath, nativescriptCorePath)
    let jsxDoc = jsxExporter.buildJSXDocument();
    return jsxDoc;
}







