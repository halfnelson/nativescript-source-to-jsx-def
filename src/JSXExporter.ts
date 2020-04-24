import { Project, ClassDeclaration } from "ts-morph";


export function orderBy<T>(items: T[], selector: (x:T) => any): T[] {
    return [...items].sort((a,b) => {
        const selectedA = selector(a);
        const selectedB = selector(b);
        if (selectedA < selectedB) return -1;
        if (selectedA > selectedB) return 1;
        return 0;
    })
}


export function getAncestors(cl: ClassDeclaration): ClassDeclaration[] {
    var parents = [];
    var tip: ClassDeclaration | undefined = cl;
    while (tip) {
        tip = tip.getBaseClass();
        if (tip) {
            parents.push(tip)
        }
    }
    return parents;
}

export function includeAncestors(classes: ClassDeclaration[]): ClassDeclaration[] {
    var allClasses: Set<ClassDeclaration> = new Set(classes);
    for (var c of classes) {
        getAncestors(c).forEach(a => allClasses.add(a));
    }
    return [...allClasses.values()];
}

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