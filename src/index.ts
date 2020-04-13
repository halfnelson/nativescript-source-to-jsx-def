import { Project, ts, SourceFile, ClassDeclaration, Scope, ClassElement, Type, Node, PropertyAccessExpression } from 'ts-morph'
import * as path from 'path'


const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

const project = new Project({
    tsConfigFilePath: nativescriptSourcePath + "/tsconfig.json",
});

function getUISourceFiles() {
    return project.getSourceFiles()
        .filter(d => /\/ui\//.test(d.getDirectoryPath()))
        .filter(f => {
            let folder_name = path.basename(f.getDirectoryPath())
            let file_name = path.basename(f.getFilePath())
            return file_name == `${folder_name}.ts` || file_name == `${folder_name}.android.ts`
        })
}

function getClasses(sf: SourceFile): ClassDeclaration[] {
    return sf.getClasses()
}

function getParentClasses(cl: ClassDeclaration): ClassDeclaration[] {
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

function inheritsFromViewBase(cl: ClassDeclaration): boolean {
    var parents = getParentClasses(cl);
    //we must inherit from ViewBase
    return parents.find(p => p.getName() == "ViewBase") ? true : false;
}

function hasNoDecendants(cl: ClassDeclaration) {
    return cl.getDerivedClasses().length == 0;
}

function isUIClass(cl: ClassDeclaration) {
    return inheritsFromViewBase(cl) && (!cl.getName()?.endsWith("Base"))
}

function getUIClasses() {
    var uiClasses = [];
    for (var file of getUISourceFiles()) {
        let classes = getClasses(file);
        for (var classdef of classes) {
            if (isUIClass(classdef)) {
                uiClasses.push(classdef);
            }
        }
    }
    return uiClasses;
}

type propertyRegistration = {
    propertyName: string,
    targetClassName: string,
    propertyType: Type
}


function getPropertyRegistrations() {
    var statements: propertyRegistration[] = [];
    var propertyfile = project.getSourceFileOrThrow(nativescriptSourcePath+"/ui/core/properties/properties.ts")
    var property = propertyfile.getClassOrThrow("Property");
    var refs = property.getMethod("register")?.findReferencesAsNodes() ?? []
    for (var ref of refs) {
        let accessExpr = ref.getParent();
        if (accessExpr && Node.isPropertyAccessExpression(accessExpr)) {
            let propExpr = accessExpr.getExpression();
            if (Node.isIdentifier(propExpr)) {
                var callExpr = accessExpr.getParent();
                if (callExpr && Node.isCallExpression(callExpr)) {
                    var target = callExpr.getArguments()[0];
                    if (Node.isIdentifier(target)) {
                        statements.push({
                            propertyName: propExpr.getText().replace(/Property$/,""),
                            propertyType: propExpr.getType().getTypeArguments()[1], //Property<Target, valueType>
                            targetClassName: target.getText()
                        })
                    }
                }
            }
        }
    }
    return statements;
}



const uiClasses = getUIClasses()

function error(message: string): never {
    throw new Error(message);
}


function uiClassDefs() {
    var classes: ClassDeclaration[] = []
    for (var c of uiClasses) {
        var current: ClassDeclaration | undefined = c;
        while (current) {
            if (!classes.includes(current)) {
                classes.push(current);
            }
            current = current.getBaseClass();
        }
    }
    return classes;
}

type ClassProp = {
    name: string,
    type: Type
}

function getClassProperties(c: ClassDeclaration) {
    var props: ClassProp[] = []
    for (var p of c.getInstanceProperties()) {
        if (p.getScope() == Scope.Public && !p.getName().startsWith("_")) {
            props.push({
                name: p.getName(),
                type: p.getType()
            });
        }
    }

   /* for (var s of c.getSetAccessors()) {
        if (s.getScope() == Scope.Public && !s.getName().startsWith("_")) {
            props.push({
                name: s.getName(),
                type: s.getType()
            });
        }
    }*/

    //todo find any registered props
    return props;
}


function getClassTypeDefs() {
    for (var c of uiClassDefs()) {
        console.log(c.getName());
    }
}

/*

var view: ClassDeclaration | undefined = uiClasses.find(x => x.getName() == "GridLayout") || error("message");
while (view) {
    for( var p of view.getSetAccessors()) {
       // if (p.getName().startsWith("rows")) {
            console.log(p.getName(), p.getType().getText());
       // }
    }
    //view = view.getBaseClass();
}

*/
var view: ClassDeclaration | undefined = uiClasses.find(x => x.getName() == "GridLayout") || error("message");
/*
while (view) {
    console.log("\n----" + view.getName() + "-----")
    for (var p of getClassProperties(view)) {
        console.log(p.name, p.type.getText())
    }
    view = view.getBaseClass();
}
*/


for (var reg of getPropertyRegistrations()) {
    console.log(reg.propertyName,": ", reg.propertyType.getText(), " on ",reg.targetClassName);
}