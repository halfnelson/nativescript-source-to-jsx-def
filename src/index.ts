import { Project, ts, SourceFile, ClassDeclaration, Scope, Type, Node } from 'ts-morph'
import * as path from 'path'
import * as fs from 'fs'
import pascalCase from 'uppercamelcase';

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

const project = new Project({
    tsConfigFilePath: nativescriptSourcePath + "/tsconfig.json",
});


function getUISourceFiles() {
    let ui = project.getSourceFiles()
        .filter(d => /\/ui\//.test(d.getDirectoryPath()))
        .filter(f => {
            let folder_name = path.basename(f.getDirectoryPath())
            let file_name = path.basename(f.getFilePath())
            return file_name == `${folder_name}.d.ts` && folder_name != 'repeater'
        })

    let text = [
        project.getSourceFile(nativescriptSourcePath + "/ui/text-base/formatted-string.ts")!,
        project.getSourceFile(nativescriptSourcePath + "/ui/text-base/span.ts")!
    ]

    return ui.concat(text);
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
    var propertyfile = project.getSourceFileOrThrow(nativescriptSourcePath + "/ui/core/properties/properties.ts")
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
                            propertyName: propExpr.getText().replace(/Property$/, ""),
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
    typeDef: string,
}


function propertyRegistrationsForClass(c: string): ClassProp[] {
    return propertyRegistrations.filter(r => r.targetClassName == c).map(r => ({ name: r.propertyName, typeDef: getTypeDef(r.propertyType, r.propertyNode, true) }))
}


// some of the .d.ts files neglect to mention some properties so we will inspect the base class
function getPropertiesFromSkippedParent(c: ClassDeclaration): ClassProp[] {

     // patch missing properties if we have skipped a base class in our .d.ts file
    let currentFile = c.getSourceFile().getFilePath();
    if (!currentFile.endsWith(".d.ts")) return []
    let declaredBaseClass = c.getBaseClass();
    if (!declaredBaseClass) return []


    //find our base class:

    //look for a -common file
    let filename = path.basename(currentFile, ".d.ts");
    let commonFilename = path.dirname(currentFile) + "/" + filename + "-common.ts";
    let commonSource = project.getSourceFile(commonFilename);

    //if there is no -common, then give up
    if (!commonSource) return []

    //find the class declaration
    let baseClass = commonSource.getClass(c.getName() + "Base");
    if (!baseClass) {
        baseClass = commonSource.getClass(c.getName() + "Common")
    }

    if (!baseClass) {
        return []
    }

    if (declaredBaseClass.getName() == baseClass.getName()) return [];

    //get the props
    return getClassProperties(baseClass);
}

var gestureTypes = project.getSourceFileOrThrow(nativescriptSourcePath + "/ui/gestures/gestures.d.ts").getEnumOrThrow("GestureTypes");


function getSyntheticEventHandlers(c: ClassDeclaration): ClassProp[] {
    var props: ClassProp[] = []

    for (var m of c.getInstanceMethods().filter(m => m.getName() == "on")) {


        let params = m.getParameters();
        if (!params || params.length < 2) continue;

        let [eventParam, callbackParam] = params;

        //explicitly defined event
        if (eventParam.getType().isStringLiteral()) {
            var propname = "on" + pascalCase(eventParam.getType().getText().replace(/"/g, ""));
            props.push({
                name: propname,
                typeDef: getTypeDef(callbackParam.getType(), callbackParam),
            })
        }

        //add gesture type events to this class if it supports it
        if (eventParam.getType().isUnion() && eventParam.getType().getUnionTypes().find(ut => ut.getText(eventParam) == "GestureTypes")) {
            let gestureSource = gestureTypes.getSourceFile();
            let defaultEventType = gestureSource.getInterfaceOrThrow("GestureEventData");
            for (var gesture of gestureTypes.getMembers().map(m => m.getName())) {
                let name = "on" + pascalCase(gesture);
                let expectedEventDataTypeName = gesture == "tap" ? "DoubleTapGestureEventData" : pascalCase(gesture) + "GestureEventData";
                let eventType = gestureSource.getInterface(expectedEventDataTypeName) || defaultEventType;

                props.push({
                    name: name,
                    typeDef: `(arg: ${getTypeDef(eventType.getType(), eventType)}) => any`
                })
            }
        }
    }
    return props;

}

var propertyChangeDataType = project.getSourceFileOrThrow(nativescriptSourcePath + "/data/observable/observable.d.ts").getInterfaceOrThrow("PropertyChangeData");

function getClassSetterProperties(c: ClassDeclaration): ClassProp[] {
    let setterProps: ClassProp[] = []
    //get any setters that proxy through to style
    // they look like this
    // set borderTopWidth(value: Length) {
    //    this.style.borderTopWidth = value;
    let setters = c.getSetAccessors();
    for (const setter of setters) {
        if (Node.isSetAccessorDeclaration(setter)) {
            let setterArg = setter.getParameters()[0].getName();
            let setterName = setter.getName()
            let body = setter.getBody();
            if (body) {
                for (const stmt of body.getDescendantStatements()) {
                    if (Node.isExpressionStatement(stmt)) {
                        let expr = stmt.getExpression();
                        if (Node.isBinaryExpression(expr)) {
                            let propAccess = expr.getLeft();
                            let equal = expr.getOperatorToken();
                            let right = expr.getRight();
                            if (equal.getText() == "=" && Node.isPropertyAccessExpression(propAccess) && Node.isIdentifier(right)) {
                                if (right.getText() == setterArg) {
                                    if (propAccess.getExpression().getType().getText().endsWith("Style")) {
                                        let newType = getTypeDef(setter.getType(), setter, true);
                                        setterProps.push({
                                            name: setterName,
                                            typeDef: newType
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return setterProps;
}


function getClassProperties(c: ClassDeclaration): ClassProp[] {

    var props: Map<string, string> = new Map()
    for (var p of c.getInstanceProperties()) {
        if (p.getScope() == Scope.Public && !p.getName().startsWith("_") && !p.getName().endsWith("Protected")) {
            props.set(p.getName(), getTypeDef(p.getType(), p));
        }
    }

     //add in setter props
     for (let s of getClassSetterProperties(c)) {
        let existing = props.get(s.name);
        if (existing) {
            console.log("patching existing prop ", c.getName(), s.name, existing, '->', s.typeDef)
            props.set(s.name, s.typeDef);
        } else {
            console.log("adding  prop ", c.getName(), s.name, s.typeDef)
            props.set(name, s.typeDef)
        }
    }

    for (var r of getSyntheticEventHandlers(c)) {
        props.set(r.name, r.typeDef)
    }

    for (var s of getPropertiesFromSkippedParent(c)) {
        if (s.typeDef != 'ViewCommon') {
            props.set(s.name, s.typeDef)
        }
    }

    var className: string = c.getName() ?? "";

    //patch in any dynamic properties 
    for (var r of propertyRegistrationsForClass(className)) {
        props.set(r.name, r.typeDef)
        props.set('on' + pascalCase(r.name) + "Change", `(args: ${getTypeDef(propertyChangeDataType.getType())}) => void`)
    }


    //there are some setters that act like properties at runtime using a (if typeof value === "string") pattern
    //which are a pain to find in the ast for now so we just patch them in here
    if (c.getName() == "ViewBase") {
        let p = props.get("style");
        if (p) {
            props.set("style", "string | " + p)
        }
    }

    if (c.getName() == "Label") {
        let p = props.get("textWrap");
        if (p) {
            props.set("textWrap", "string | " + p)
        }
    }

    //combine
    var allProps: ClassProp[] = []
    for (var key of props.keys()) {
        allProps.push({
            name: key,
            typeDef: props.get(key)!
        })
    }

    

    allProps.sort((a, b) => a.name < b.name ? -1 : 1)
    return allProps;
}

type Import = {
    path: string,
    name: string
}

let imports = new Map<string, Import>();

function getTypeDef(t: Type, node?: Node, isProperty?: boolean): string {
    var typeText

    if (t.isClassOrInterface() || t.isArray() || t.isObject() || !node) {
        typeText = t.getText();
    } else {
        //expand union types in-place instead of using includes, to keep the definition file easier to read
        if (t.isUnion()) {
            typeText = t.getUnionTypes()
                .map(ut => getTypeDef(ut))
                .map(i => i.includes('=>') ? `(${i})` : i) //arrow functions should be wrapped in braces when in union literal
                .join(" | ");
        } else {
            typeText = t.getText(node, ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation)
        }
    }

    let replaceImports = (text: string) => {
        return text.replace(/import\("(.*?)"\)\.([a-zA-Z_0-9\<\>\[\]]+)/g, (match: string, importPath: string, importName: string) => {
            let importAlias = importName.replace("[]", "");
            importPath = ('@nativescript/core/' + path.relative(nativescriptSourcePath, importPath)).replace(/\\/g, '/');
    
            //do we have an alias for this already?
            let existingImportAlias = [...imports.entries()].find(e => e[1].name == importAlias
                    && (e[1].path == importPath || e[1].path == path.dirname(importPath) || importPath == path.dirname(e[1].path) || path.dirname(importPath) == path.dirname(e[1].path))
                );
    
            if (existingImportAlias)
                return importName.replace(importAlias, existingImportAlias?.[0])
    
            //no existing import
            //is our alias free?
            if (imports.get(importAlias)) {
                let oldAlias = importAlias;
                importAlias = pascalCase(path.basename(importPath)) + importAlias;
                imports.set(importAlias, { name: oldAlias, path: importPath });
                return importName.replace(oldAlias, importAlias);
            }
    
            imports.set(importAlias, { path: importPath, name: importAlias });
    
            return importName;
        });
    }

    let replaceGenericImports = (text: string) => {
        return text.replace(/<(.*?)>/g, (match: string, genericType: string) => {
           return `<${replaceImports(genericType)}>`;
        });
    }


    typeText =  replaceImports(replaceGenericImports(typeText));


    //"properties" have a value converter from string, so we need to add the "string" as valid type (if not present)
    if (isProperty) {
        if (t.isUnion()) {
            if (t.getUnionTypes().some(x => !x.isStringLiteral()) && !t.getUnionTypes().some(x => x.isString())) {
                typeText = "string | " + typeText
            }
        } else {
            if (!t.isString() && !t.isStringLiteral()) {
                typeText = "string | " + typeText;
            }
        }
    }


    return typeText
}


function classPropDef(t: ClassProp): string {
    return `${t.name.toLowerCase()}?: ${t.typeDef};`
}

function getAttributesClassName(c: ClassDeclaration) {
    return `${c.getName()}Attributes`
}

function getClassTypeDef(c: ClassDeclaration): string {

    var propDefs = getClassProperties(c).map(x => classPropDef(x));

    var baseclass = c.getBaseClass();
    var classDef = `// ${path.relative(nativescriptSourcePath, c.getSourceFile().getFilePath()).replace(/\\/g, "/")}\ntype ${getAttributesClassName(c)} =  ${baseclass ? `${getAttributesClassName(baseclass)} & ` : ''}{\n${propDefs.map(d => "    " + d).join("\n")}\n};`;
    return classDef;
}


function getClassTypeDefs() {
    let classDefs = uiClassDefs().map(getClassTypeDef);

    let classImportStatements = [...imports.keys()].map(c => `type ${c} = import("${imports.get(c)?.path}").${imports.get(c)?.name};`).join("\n");
    let classTypeDefs = classDefs.join("\n\n");
    return `${classImportStatements}\n\n${classTypeDefs}`;
}


function getIntrinsicElementDef(classDec: ClassDeclaration): string {
    let name = classDec.getName()!;
    return `${name.toLowerCase()}: ${getAttributesClassName(classDec)};`
}


function getJSXNamespaceDef() {
    return `
declare namespace svelteNative.JSX {
    /* svelte2tsx JSX */
    interface ElementClass {
      $$prop_def: any;
    }
  
    interface ElementsProperty {
      $$prop_def: any; // specify the property name to use
    }
  
    interface Intrinsics {}

    interface IntrinsicElements {
${uiClasses.map(c => getIntrinsicElementDef(c)).map(d => `        ${d}`).join("\n")}
        [name: string]: { [name: string]: any };
    }
}
`
}

function getFullJSXDef(): string {
    return `${getClassTypeDefs()}\n\n${getJSXNamespaceDef()}`
}


fs.writeFileSync("./sveltenative-jsx.d.ts", getFullJSXDef());



//console.log(getUISourceFiles().map(s => s.getFilePath()).join("\n"));


