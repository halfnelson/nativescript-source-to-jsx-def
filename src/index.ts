import { Project, ts, SourceFile, ClassDeclaration, Scope, Type, Node } from 'ts-morph'
import * as path from 'path'
import * as fs from 'fs'
import pascalCase from 'uppercamelcase';

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
            return file_name == `${folder_name}.d.ts` && folder_name != 'repeater'
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


const uiClasses = getUIClasses()
const classNames = new Set(uiClassDefs().map(u => u.getName()));
const propertyRegistrations = getPropertyRegistrations().map(x => { 
    //The propertie registrations refer to classes from the TS files, but these do not match the ones from the .d.t files.
    //we use the discovered convention that common classes are exposed as "Base" and where some base classes are not exposed
    //to try and find a class to pin our property on.
    var targetClassName = classNames.has(x.targetClassName) ? x.targetClassName : x.targetClassName.replace("Common", "Base")
    targetClassName = classNames.has(targetClassName) ? targetClassName : targetClassName.replace("Base", "");
    return {
        ...x,
        targetClassName: targetClassName
    }
})

type ClassProp = {
    name: string,
    type: Type,
    typeNode: Node,
    isProperty?: boolean
}


function propertyRegistrationsForClass(c: string): ClassProp[] {
    return propertyRegistrations.filter(r => r.targetClassName == c).map(r => ({ name: r.propertyName, type: r.propertyType, typeNode: r.propertyNode, isProperty: true }))
}


// some of the .d.ts files neglect to mention some properties so we will inspect the base class
function patchMissingProperties(c: ClassDeclaration, props: ClassProp[]) {
    // patch missing properties if we have skipped a base class in our .d.ts file
    let currentFile = c.getSourceFile().getFilePath();
    if (!currentFile.endsWith(".d.ts")) return;
    let declaredBaseClass = c.getBaseClass();
    if (!declaredBaseClass) return;
    if (declaredBaseClass.getName() == c.getName()+"Base") return;

    //find our base class:
    
    //look for a -common file
    let filename = path.basename(currentFile, ".d.ts");
    let commonFilename = path.dirname(currentFile) +"/" + filename + "-common.ts";
    let commonSource = project.getSourceFile(commonFilename);
    
    //if there is no -common, then give up
    if (!commonSource) return;

    //find the class declaration
    let baseClass = commonSource.getClass(c.getName()+"Base");
    if (!baseClass) return;

    //get the props
    let baseProps = getClassProperties(baseClass);
    for (var baseProp of baseProps) {
        if (!props.find(x => x.name == baseProp.name)) {
            console.log("Found missing property-  ", baseProp.name, ": ", baseProp.type.getText(baseProp.typeNode))
            props.push(baseProp);
        }
    }
}


function getClassProperties(c: ClassDeclaration): ClassProp[] {
    
    var props: Map<string, { type: Type, node: Node, isProperty?: boolean}> = new Map()
    for (var p of c.getInstanceProperties()) {
        if (p.getScope() == Scope.Public && !p.getName().startsWith("_") && !p.getName().endsWith("Protected")) {
            props.set(p.getName(), { type: p.getType(), node: p });
        }
    }
    var className: string = c.getName() ?? "";

    //patch in any dynamic properties 
    for (var r of propertyRegistrationsForClass(className)) {
        props.set(r.name, { type: r.type, node: r.typeNode, isProperty: true })
    }

    //combine
    var allProps:ClassProp[] = []
    for( var key of props.keys()) {
        allProps.push({
            name: key,
            type: props.get(key)!.type,
            typeNode: props.get(key)!.node,
            isProperty: props.get(key)!.isProperty
        })
    }
    patchMissingProperties(c, allProps);

    allProps.sort((a,b) => a.name < b.name ? -1 : 1)
    return allProps;
}

type Import = {
    path: string,
    name: string
}

let imports = new Map<string, Import>();

function getTypeDef(t: Type, node?:Node, isProperty?: boolean ): String {
    var typeText 

    if (t.isClassOrInterface() || t.isArray() ||  !node) {
        typeText = t.getText();
    }  else {
        //expand union types in-place instead of using includes, to keep the definition file easier to read
        if (t.isUnion()) {
            typeText = t.getUnionTypes()
                        .map(ut => getTypeDef(ut))
                        .map( i => i.includes('=>') ? `(${i})` : i) //arrow functions should be wrapped in braces when in union literal
                        .join(" | ");
        } else {
            typeText = t.getText(node, ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation)
        }
    }

    typeText = typeText.replace(/import\("(.*)"\)\.([a-zA-Z_0-9\[\]]+)/g, (match:string, importPath: string, importName:string) => {
        let importAlias = importName.replace("[]","");
        importPath = ('@nativescript/core/' + path.relative(nativescriptSourcePath, importPath)).replace(/\\/g,'/');

        //do we have an alias for this already?
        let existingImportAlias =  [...imports.entries()].find( e => e[1].name == importAlias && e[1].path == importPath);
        if (existingImportAlias)  
            return importName.replace(importAlias, existingImportAlias?.[0])
        
        //no existing import
        //is our alias free?
        if (imports.get(importAlias)) {
            let oldAlias = importAlias;
            importAlias = pascalCase(path.basename(importPath))+importAlias;
            imports.set(importAlias, { name: oldAlias, path: importPath });
            return importName.replace(oldAlias, importAlias);
        }

        imports.set(importAlias, { path: importPath, name: importAlias });
        
        return importName;
    });

    //"properties" have a value converter from string, so we need to add the "string" as valid type (if not present)
    if (isProperty) {
        if (t.isUnion()) {
            if (!t.getUnionTypes().reduce<boolean>((p:boolean, c: Type) => p && (c.isStringLiteral() || c.isString()), true )) {
                typeText = "string | " + typeText
            } 
        } else {
            if (!t.isString() && !t.isStringLiteral()) {
                typeText = "string | "+typeText;
            } 
        }
    }
  

    return typeText
}


function classPropDef(t: ClassProp): string {
    if (t.name == "itemTemplateSelector") {
        debugger;
    }
    var typedef = getTypeDef(t.type, t.typeNode, t.isProperty);
    return `${t.name}: ${typedef};`
}

function getClassTypeDef(c: ClassDeclaration): string {
    
    var propDefs = getClassProperties(c).map(x =>classPropDef(x));

    var baseclass = c.getBaseClass();
    var classDef = `// ${path.relative(nativescriptSourcePath, c.getSourceFile().getFilePath()).replace(/\\/g, "/")}\ntype ${c.getName()}Attributes =  ${baseclass ? `${baseclass.getName()}Attributes & ` : '' }{\n${propDefs.map(d => "    " + d).join("\n")}\n};`;
    return classDef;
}   


function getClassTypeDefs() {
    let classDefs = uiClassDefs().map(getClassTypeDef);

    let classImportStatements = [...imports.keys()].map(c => `type ${c} = import("${imports.get(c)?.path}").${imports.get(c)?.name};`).join("\n");
    let classTypeDefs = classDefs.join("\n\n");
    return `${classImportStatements}\n\n${classTypeDefs}`;
}

/*

var view: ClassDeclaration | undefined = uiClasses.find(x => x.getName() == "GridLayout") || error("message");
while (view) {
    for( var p of view.getSetAccessors()) {
       // if (p.getName().startsWith(" ")) {
            console.log(p.getName(), p.getType().getText());
       // }
    }
    //view = view.getBaseClass();
}

*/
fs.writeFileSync("./sveltenative-jsx.d.ts", getClassTypeDefs());
//console.log(project.getSourceFiles().map(s => s.getFilePath()))

//let propClasses = new Set(propertyRegistrations.map(p=>p.targetClassName))

//propertyRegistrations.sort((a,b) => a.propertyName < b.propertyName ? -1 : a.propertyName == b.propertyName  ? 0 : 1 )

//console.log(propertyRegistrations.map(r => `${r.propertyName} on ${r.targetClassName}`))
//console.log("props: ", propClasses.keys())
//console.log("classes: ", classNames.keys())
//console.log("missing classes", [...propClasses.keys()].filter(k => !classNames.has(k)))

/*
for (var reg of getPropertyRegistrations()) {
    console.log(reg.propertyName,": ", reg.propertyType.getText(), " on ",reg.targetClassName);
}
*/