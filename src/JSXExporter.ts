import { Project, ClassDeclaration } from "ts-morph";

interface JSXExporterConfig {
    project: Project;
    isElementClass: (classDecl: ClassDeclaration) => boolean;
}

export default class JSXExporter {

    project: Project;
    config: JSXExporterConfig;

    constructor(config: JSXExporterConfig) {
        this.config = config;
        this.project = config.project;
    }

    getElementClasses() {
        var uiClasses = [];
        for (var file of this.project.getSourceFiles()) {
            let classes = file.getClasses();
            for (var classDef of classes) {
                if (this.config.isElementClass(classDef)) {
                    uiClasses.push(classDef);
                }
            }
        }
        return uiClasses;
    }
}