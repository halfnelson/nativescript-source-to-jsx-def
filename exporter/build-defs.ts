import { buildCoreJSX, buildModuleJSX, renderReact, renderSvelte } from 'nativescript-source-to-jsx-def'
import fs from 'fs';
import path from 'path';
import { chdir } from 'process';

function exportModule(moduleName: string) {
    console.log(`Exporting ${moduleName}`)
    let modulePath = path.dirname(require.resolve(moduleName+"/package.json"))
    let doc = buildModuleJSX(moduleName, modulePath, path.dirname(require.resolve("@nativescript/core/package.json")));
    let module_filename = moduleName.replace(/[^\w]/g, '-');

    fs.writeFileSync(`../svelte-native-defs/svelte-native-jsx-${module_filename}.d.ts`, renderSvelte(doc));
    fs.writeFileSync(`../react-nativescript-defs/react-nativescript-jsx-${module_filename}.ts`, renderReact(doc));
}

function exportCore(corePath: string) {
    console.log(`Exporting Core`)
    let doc = buildCoreJSX(corePath);

    fs.writeFileSync("../svelte-native-defs/svelte-native-jsx-nativescript-core.d.ts", renderSvelte(doc));
    fs.writeFileSync("../react-nativescript-defs/react-nativescript-jsx.ts", renderReact(doc, true));
}

function doExports() {
    const nativescriptSourcePath = path.resolve(__dirname, "./nativescript_src/packages/core");
    chdir(__dirname)

    fs.mkdirSync("../svelte-native-defs", { recursive: true});
    fs.mkdirSync("../react-nativescript-defs", { recursive: true});

    exportCore(nativescriptSourcePath)
    exportModule("nativescript-ui-listview")
    exportModule("nativescript-ui-chart")
    exportModule("nativescript-ui-sidedrawer")
}


doExports();
