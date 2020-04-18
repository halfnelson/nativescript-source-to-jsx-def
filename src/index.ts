import { Project, ts, SourceFile, ClassDeclaration, Scope, ClassElement, Type, Node, PropertyAccessExpression, Program } from 'ts-morph'
import * as path from 'path'
import * as fs from 'fs'
import { type } from 'os';
import { nodeModuleNameResolver } from 'typescript';
const walkSync = require('walk-sync');

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

/*
// We need to rename *.android.ts to *.ts
// and remove any .d.ts files since they lie!
var files = walkSync(nativescriptSourcePath, {
    directories: false,
    includeBasePath: true
})

for (var f of files) {
    if (f.endsWith(".d.ts")) {
        fs.unlinkSync(f);
    }
    
    if (f.endsWith(".android.ts")) {
        // copy .android.ts to index.ts
        fs.copyFileSync(f, path.dirname(f)+"/index.ts");
        // remove .android.ts
        fs.unlinkSync(f);
    }
}
*/

const project = new Project({
    tsConfigFilePath: nativescriptSourcePath + "/tsconfig.json",
});

//project.resolveSourceFileDependencies();

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
    var targetClassName = classNames.has(x.targetClassName) ? x.targetClassName : x.targetClassName.replace("Base", "")
    targetClassName = classNames.has(targetClassName) ? targetClassName : x.targetClassName.replace("Common", "");
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

function error(message: string): never {
    throw new Error(message);
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
        if (props.has(r.name)) {
           console.log("adding ",r.name,":",r.type.getText() ," to ", className)
        }
        //TODO: inject "string" type here.
        props.set(r.name, { type: r.type, node: r.typeNode, isProperty: true })
    }

    //todo find any registered props
    var allProps:ClassProp[] = []
    for( var key of props.keys()) {
        allProps.push({
            name: key,
            type: props.get(key)!.type,
            typeNode: props.get(key)!.node,
            isProperty: props.get(key)!.isProperty
        })
    }
    allProps.sort((a,b) => a.name < b.name ? -1 : 1)
    return allProps;
}

type TypeImports = {[index: string]: string}

function mergeTypeImports(a: TypeImports, b: TypeImports): TypeImports {
    var dest = { ... a};
    //A little bit of safety mixed with a little laziness :)
    for (var alias in b) {
        if (dest[alias] && dest[alias] != b[alias]) {
            console.log("collision", alias, dest[alias], b[alias]);
            throw Error("Time for the developer to stop being lazy and handle import collisions")
        }
        dest[alias] = b[alias]
    }
    return dest;
}

type DefWithImports = {
    definition: string;
    typeImports: TypeImports
}

function getTypeDef(t: Type, node?:Node, isProperty?: boolean ): DefWithImports {
    var typeText 
    var imports: TypeImports = {};
   

    if (t.isClassOrInterface() || t.isArray() || !node) {
        typeText = t.getText();
    }  else {
        //collect imports for class types
        if (t.isUnion()) {
            let unionImports = t.getUnionTypes().filter(ut => ut.isClassOrInterface() || ut.isArray()).map(ut => getTypeDef(ut).typeImports);
            imports = unionImports.reduce((p,c)=> mergeTypeImports(p,c), imports);
        }

        typeText = t.getText(node, ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation)
    }
    //if (typeText.includes("Template")) 
    //    debugger;
    typeText = typeText.replace(/import\("(.*)"\)\.([a-zA-Z_0-9\[\]]+)/g, (match:string, importPath: string, importName:string) => {;
        let importAlias = importName.replace("[]","");
        imports[importAlias] = importPath;  // importPath.replace(nativescriptSourcePath, "@nativescript_core")
        return importName;
    });

    if (isProperty) {
        typeText = "string | "+typeText;
    }

    return { 
        definition: typeText,
        typeImports: imports
    }
}


function classPropDef(t: ClassProp): DefWithImports {
    var typedef = getTypeDef(t.type, t.typeNode, t.isProperty);

    return {
        definition: `${t.name}: ${typedef.definition};`,
        typeImports: typedef.typeImports
    }
}

function getClassTypeDef(c: ClassDeclaration): DefWithImports {
    
    var propDefs = getClassProperties(c).map(x =>classPropDef(x));

    var baseclass = c.getBaseClass();
    var classDef = `//${c.getSourceFile().getFilePath()}\ntype ${c.getName()}Attributes =  ${baseclass ? `${baseclass.getName()}Attributes & ` : '' }{\n${propDefs.map(d => "    " + d.definition).join("\n")}\n};`;
    var classImports: TypeImports = { }
    for (let propImports of propDefs.map(d => d.typeImports)) {
        classImports = mergeTypeImports(classImports, propImports);
    }
    return {
        definition: classDef,
        typeImports: classImports
    }
}


function getClassTypeDefs() {
    let classDefs = uiClassDefs().map(getClassTypeDef);
    let classImports = classDefs.reduce((p: TypeImports, c: DefWithImports) =>  mergeTypeImports(p, c.typeImports), {} as TypeImports)

    let classImportStatements = Object.keys(classImports).map(c => `type ${c} = import("${classImports[c]}").${c};`).join("\n");
    let classTypeDefs = classDefs.map(c => c.definition).join("\n\n");
    return `${classImportStatements}\n\n${classTypeDefs}`;
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

let propClasses = new Set(propertyRegistrations.map(p=>p.targetClassName))

//console.log("promises: ", propClasses.keys())
//console.log("classes: ", classNames.keys())
//console.log("missing classes", [...propClasses.keys()].filter(k => !classNames.has(k)))

/*
for (var reg of getPropertyRegistrations()) {
    console.log(reg.propertyName,": ", reg.propertyType.getText(), " on ",reg.targetClassName);
}
*/