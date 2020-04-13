import { Project, ts, SourceFile, ClassDeclaration, Scope, ClassElement, Type, Node, PropertyAccessExpression } from 'ts-morph'
import * as path from 'path'
import * as fs from 'fs'
import { type } from 'os';
import { nodeModuleNameResolver } from 'typescript';
const walkSync = require('walk-sync');

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

const project = new Project({
    tsConfigFilePath: nativescriptSourcePath + "/tsconfig.json",
    addFilesFromTsConfig: false,
    skipFileDependencyResolution: true,
});

var files = walkSync(nativescriptSourcePath, {
    directories: false,
    includeBasePath: true
})

for (var f of files) {
    if (f.endsWith(".d.ts")) continue;
    
    if (f.endsWith(".android.ts")) {
    //    console.log(f.replace(".android.ts",".ts"));
        project.createSourceFile(f.replace(".android.ts", ".ts"), fs.readFileSync(f, 'utf8'), { overwrite: true}); 
    } else {
        project.addSourceFileAtPath(f)
    }
}

//project.resolveSourceFileDependencies();

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
    propertyType: Type,
    propertyNode: Node
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
                            propertyNode: propExpr,
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
const propertyRegistrations = getPropertyRegistrations()

type ClassProp = {
    name: string,
    type: Type,
    typeNode: Node
}

function propertyRegistrationsForClass(c: string): ClassProp[] {
    return propertyRegistrations.filter(r => r.targetClassName == c).map(r => ({ name: r.propertyName, type: r.propertyType, typeNode: r.propertyNode }))
}

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
            if (current?.getSourceFile().getFilePath().endsWith(".d.ts")) {
                current = undefined;
            }
        }
    }
    return classes;
}

function getClassProperties(c: ClassDeclaration): ClassProp[] {
    
    var props: Map<string, { type: Type, node: Node}> = new Map()
    for (var p of c.getInstanceProperties()) {
        if (p.getScope() == Scope.Public && !p.getName().startsWith("_") && !p.getName().endsWith("Protected")) {
            var typ = p.getType();
            
            if (!typ.isClassOrInterface()) {
                console.log(typ.getText(p, ts.TypeFormatFlags.InArrayType | ts.TypeFormatFlags.InArrayType | ts.TypeFormatFlags.InTypeAlias), typ.getApparentType().getText());
            }
            
            
            props.set(p.getName(), { type: p.getType(), node: p });
        }
    }
    var className: string = c.getName() ?? "";
    //patch in any dynamic properties
    for (var r of propertyRegistrationsForClass(className)) {
        if (props.has(r.name)) {
       //     console.log("replacing ",r.name,":", props.get(r.name)?.getText(), "with", r.type.getText() );
        } else {
       //     console.log("adding ",r.name,":",r.type.getText() ," to ", className)
        }
        //TODO: inject "string" type here.
        props.set(r.name, { type: r.type, node: r.typeNode })
    }

    //todo find any registered props
    var allProps:ClassProp[] = []
    for( var key of props.keys()) {
        allProps.push({
            name: key,
            type: props.get(key)!.type,
            typeNode: props.get(key)!.node
        })
    }
    allProps.sort((a,b) => a.name < b.name ? -1 : 1)
    return allProps;
}

function typeDef(t: ClassProp): string {
    return t.type.getText(t.typeNode, ts.TypeFormatFlags.InTypeAlias);
}

function getClassTypeDef(c: ClassDeclaration): string {
    var defLines = getClassProperties(c).map(x => `    ${x.name}: ${typeDef(x)}`);
    return `//${c.getSourceFile().getFilePath()}\ntype ${c.getName()} = {\n${defLines.join("\n")}\n};`;
}


function getClassTypeDefs() {
    return uiClassDefs().map(c => getClassTypeDef(c)).join("\n\n");
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
fs.writeFileSync("./sveltenative-jsx.d.ts", getClassTypeDefs());
//console.log(project.getSourceFiles().map(s => s.getFilePath()))


/*
for (var reg of getPropertyRegistrations()) {
    console.log(reg.propertyName,": ", reg.propertyType.getText(), " on ",reg.targetClassName);
}
*/