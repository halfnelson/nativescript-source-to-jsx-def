import { buildModuleJSX, renderSvelte, renderReact } from '..'
import fs from 'fs';
import path from 'path';
import { argv } from 'process';

// find nativescript core 
let nativescriptPath
try {
    nativescriptPath = path.dirname(require.resolve("@nativescript/core/package.json", { paths: [ process.cwd() ]}))
} catch (e) {
    console.error("Couldn't find @nativescript/core package.")
    process.exit(1);
}

if (!argv[2] || argv[2] == "--help" || argv[2] == '-h' ) {
    console.log(`Usage: svelte-native-jsx <node-module-name>`)
    process.exit(1);
}

let isSvelteNative = !(argv[3] && argv[3] == "--react");

let targetModule = argv[2];
let targetModulePath
try {
    targetModulePath = path.dirname(require.resolve(targetModule+"/package.json", { paths: [ process.cwd() ]}))
} catch (e) {
    console.error(`Couldn't resolve module ${targetModule}`)
    process.exit(1)
}

let module_filename = targetModule.replace(/@/g, '').replace(/[^\w]/g, '-');

let doc = buildModuleJSX(targetModule, targetModulePath, nativescriptPath)
if (isSvelteNative) {
    fs.writeFileSync(`svelte-native-jsx-${module_filename}.d.ts`, renderSvelte(doc));
} else {
    fs.writeFileSync(`react-nativescript-jsx-${module_filename}.d.ts`, renderReact(doc));
}
