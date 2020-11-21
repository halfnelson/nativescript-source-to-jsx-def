import NativescriptJSXExporter, { isUIClass } from "./NativescriptJSXExporter";
import { Project, ClassDeclaration, Type } from "ts-morph";
import path from "path";
import { getAncestors, ClassBuilderContext, AttributeClassDefinition } from "./JSXExporter";


//TODO
export default class NativescriptPluginJSXExporter extends NativescriptJSXExporter {
    pluginFolder: string;

    propertyChangeType: Type;
    propertyClass: ClassDeclaration;


    static FromNodeModule(moduleName: string): NativescriptPluginJSXExporter {
        let project = new Project({ 
            compilerOptions: {
                allowJs: true,
            }
        });
        let pluginFolder = path.dirname(require.resolve(moduleName+"/package.json"));
        let nativescriptFolder = path.dirname(require.resolve("@nativescript/core"));
        project.addSourceFilesAtPaths(nativescriptFolder+"/**/*.d.ts");
        project.addSourceFilesAtPaths(pluginFolder+"/**/*.d.ts");
        project.addSourceFilesAtPaths(pluginFolder+"/**/*.js");
        project.resolveSourceFileDependencies();

        return new NativescriptPluginJSXExporter(pluginFolder, nativescriptFolder, project);
    }
   

 
    constructor(modulePath: string, nativescriptCorePath: string, project: Project) {
        super(project);
        this.pluginFolder = path.normalize(modulePath).replace(/\\/g, '/');
        nativescriptCorePath = path.normalize(nativescriptCorePath).replace(/\\/g, '/');
        this.propertyChangeType = this.project.getSourceFileOrThrow(nativescriptCorePath + "/data/observable/index.d.ts").getInterfaceOrThrow("PropertyChangeData").getType();
        this.propertyClass = this.project.getSourceFileOrThrow(nativescriptCorePath + "/ui/core/properties/index.d.ts").getClassOrThrow("Property");
    }

    isElementClass(c: ClassDeclaration) {
        let srcPath = c.getSourceFile().getFilePath();
     
        let isInModule = srcPath.startsWith(this.pluginFolder); 
        if (!isInModule) {
             return false;
        }
        
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

        let nodeModulesFolder = path.dirname(this.pluginFolder);
        doc.imports.forEach(c => {

            if (c.path.startsWith(nodeModulesFolder)) {
                c.path = c.path.replace(nodeModulesFolder+"/", "");
            }
        })
        
        return doc;
    }


}