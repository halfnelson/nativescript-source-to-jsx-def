import NativescriptJSXExporter, { isUIClass } from "./NativescriptJSXExporter";
import { Project, ClassDeclaration, Type } from "ts-morph";
import path from "path";
import { getAncestors, ClassBuilderContext, AttributeClassDefinition } from "./JSXExporter";


//TODO
export default class NativescriptPluginJSXExporter extends NativescriptJSXExporter {
    pluginFolder: string;

    propertyChangeType: Type;
    propertyClass: ClassDeclaration;
    moduleName: string;
    nativescriptCorePath: string;


    static FromNodeModule(moduleName: string, modulePath: string, nativescriptCorePath: string): NativescriptPluginJSXExporter {
        let project = new Project({ 
            compilerOptions: {
                allowJs: true,
            }
        });
        let pluginFolder = modulePath;
       // let nativescriptFolder = path.dirname(require.resolve("@nativescript/core", ));
        project.addSourceFilesAtPaths(nativescriptCorePath+"/**/*.d.ts");
        project.addSourceFilesAtPaths(pluginFolder+"/**/*.d.ts");
        project.addSourceFilesAtPaths(pluginFolder+"/**/*.js");
        project.resolveSourceFileDependencies();
        return new NativescriptPluginJSXExporter(pluginFolder, moduleName, nativescriptCorePath, project);
    }
   

 
    constructor(modulePath: string, moduleName: string,  nativescriptCorePath: string, project: Project) {
        super(project);
        this.moduleName = moduleName;
        this.pluginFolder = path.normalize(modulePath).replace(/\\/g, '/');
        this.nativescriptCorePath = path.normalize(nativescriptCorePath).replace(/\\/g, '/');
        this.propertyChangeType = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/data/observable/index.d.ts").getInterfaceOrThrow("PropertyChangeData").getType();
        this.propertyClass = this.project.getSourceFileOrThrow(this.nativescriptCorePath + "/ui/core/properties/index.d.ts").getClassOrThrow("Property");
    }

    isElementClass(c: ClassDeclaration) {
        let srcPath = c.getSourceFile().getFilePath();
     
        let isInModule = srcPath.startsWith(this.pluginFolder); 
        if (!isInModule) {
             return false;
        }
        
        //ignore .android and .ios versions
        if ( path.basename(srcPath).includes(".android.") ||path.basename(srcPath).includes(".ios.") ) return false;

        let isClassOk = isUIClass(c);
        if (!isClassOk) {
            return false;
        }
        return true;
    }

    // short circuit ancestors that aren't part of this module
    buildAttributeClassDefinition(c: ClassDeclaration, context: ClassBuilderContext): AttributeClassDefinition {
        let srcPath = c.getSourceFile().getFilePath();
        if (!srcPath.startsWith(this.pluginFolder)) {
            return {
                className: this.getAttributeClassName(c),
                parentClasses: [],
                props: [],
                meta: {
                    sourceFile: srcPath
                }
            }
        }

        return super.buildAttributeClassDefinition(c, context);
    }



    buildJSXDocument() {
        let doc = super.buildJSXDocument();
        
        //only include files from this module
        doc.classDefinitions = doc.classDefinitions.filter(d => d.meta.sourceFile.startsWith(this.pluginFolder));

        doc.classDefinitions.forEach(c => {
            c.meta.sourceFile = path.relative(this.pluginFolder, c.meta.sourceFile);
        })

       
        doc.imports.forEach(c => {

            if (c.path.startsWith(this.pluginFolder)) {
                c.path = c.path.replace(this.pluginFolder, this.moduleName);
            }
            if (c.path.startsWith(this.nativescriptCorePath)) {
                c.path = c.path.replace(this.nativescriptCorePath, '@nativescript/core');
            }
            if (c.path.endsWith('/index')) {
                c.path = c.path.substring(0, c.path.length - '/index'.length)
            }
        })
        
        return doc;
    }


}