import { Project, ts, ClassDeclaration, Scope, Type, Node } from 'ts-morph'
import * as path from 'path'
import * as fs from 'fs'
import pascalCase from 'uppercamelcase';
import JSXExporter, { getAncestors, includeAncestors, orderBy } from './JSXExporter';

const nativescriptSourcePath = path.resolve(__dirname, "../nativescript_src/nativescript-core");

const project = new Project({
    tsConfigFilePath: nativescriptSourcePath + "/tsconfig.json",
});


function inheritsFromViewBase(cl: ClassDeclaration): boolean {
    var parents = getAncestors(cl);//  getParentClasses(cl);
    //we must inherit from ViewBase
    return parents.find(p => p.getName() == "ViewBase") ? true : false;
}

function isUIClass(cl: ClassDeclaration) {
    return inheritsFromViewBase(cl) && (!cl.getName()?.endsWith("Base"))
}


function isElementClass(c: ClassDeclaration) {
    // nativescript can have multiple definitions of a class, one in the .d.ts file and the other in .android/.ios file (or even in -common) file
    // so as well as ensuring it inherits from viewbase, we should also prefer the ones defined in the .d.ts files where available
    const fp = c.getSourceFile().getFilePath();

    //only consider files in /ui/*
    if (! /\/ui\//.test(fp)) return false

    //prefer .d.ts versions where possible (except for formatted-string and span where ts-morph won't load their .d.ts files)
    const isValidFile = (fp.endsWith('text-base/formatted-string.ts')
        || fp.endsWith('text-base/span.ts')
        || path.basename(fp) == `${path.basename(path.dirname(fp))}.d.ts`
    )

    if (!isValidFile) return false;

    return isUIClass(c);
}


const jsxExporter = new JSXExporter({
    project,
    isElementClass: isElementClass
})


/*
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

*/
/*
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
*/



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
/*
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
*/

const uiClasses = jsxExporter.getElementClasses(); //getUIClasses()
const classNames = new Set(includeAncestors(uiClasses).map(u => u.getName()));
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
    typeDef: TypeResolver,
}


function propertyRegistrationsForClass(c: string): ClassProp[] {
    return propertyRegistrations.filter(r => r.targetClassName == c).map(r => ({ name: r.propertyName, typeDef: getTypeResolver(r.propertyType, r.propertyNode, true) }))
}


// some of the .d.ts files neglect to mention some properties so we will inspect the base class
function getPropertiesFromSkippedParent(c: ClassDeclaration, options: ClassPropertiesOptions): ClassProp[] {

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
    return getClassProperties(baseClass, options);
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
                typeDef: getTypeResolver(callbackParam.getType(), callbackParam),
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

                let eventTypeDef = getTypeResolver(eventType.getType(), eventType);
                props.push({
                    name: name,
                    typeDef: AlterResolvedTypeDef(eventTypeDef, d => `(arg: ${d}) => any`)
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
                                        let newType = getTypeResolver(setter.getType(), setter, true);
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


function getClassProperties(c: ClassDeclaration, options: ClassPropertiesOptions): ClassProp[] {
    const { eventNameCasing, allowStringStyles, omitStyleFromViewBase } = options;

    var props: Map<string, TypeResolver> = new Map()
    for (var p of c.getInstanceProperties()) {
        if (p.getScope() == Scope.Public && !p.getName().startsWith("_") && !p.getName().endsWith("Protected")) {
            props.set(p.getName(), getTypeResolver(p.getType(), p));
        }
    }

    //add in setter props
    for (let s of getClassSetterProperties(c)) {
        let existing = props.get(s.name);
        if (existing) {
         //   console.log("patching existing prop ", c.getName(), s.name, existing, '->', s.typeDef)
            props.set(s.name, s.typeDef);
        } else {
         //   console.log("adding  prop ", c.getName(), s.name, s.typeDef)
            props.set(name, s.typeDef)
        }
    }

    for (var r of getSyntheticEventHandlers(c)) {
        props.set(r.name, r.typeDef)
    }

    for (var s of getPropertiesFromSkippedParent(c, options)) {
        // if (s.typeDef.resolve(new Map()).def != 'ViewCommon') {
        const parentDef = s;
        let existingDef = props.get(s.name);
        if (!existingDef) {
            props.set(s.name, s.typeDef)
        } else {
            //when updating we want to keep the imports from the .d.ts file if they clash with the ones from viewcommon.
            props.set(s.name, {
                resolve: (existingImports: ImportMap) => {
                    let mainClassImports = existingDef!.resolve(existingImports);
                    let skippedParentImports = parentDef.typeDef.resolve(existingImports);
                    if (skippedParentImports.def == "ViewCommon") {
                        return mainClassImports;
                    }
                    for (let skippedParentImport of skippedParentImports.imports.entries()) {
                        let [alias, importDef] = skippedParentImport;
                        // we need to search by import name since the clashed alias generator might be non-deterministic
                        // there is still a chance of clash if the property imports properties of the same name as part of union
                        let matchingMainImport = [...mainClassImports.imports.values()].find(v => v.name == importDef.name)
                        if (matchingMainImport) {
                            skippedParentImports.imports.set(alias, matchingMainImport)
                        }
                    }
                    //return the def from the skipped parent but with the imports overridden by those from the main class
                    return skippedParentImports;
                }
            });
        }
    }

    var className: string = c.getName() ?? "";

    //patch in any dynamic properties 
    for (var r of propertyRegistrationsForClass(className)) {
        props.set(r.name, r.typeDef)
        props.set(
            eventNameCasing === "camelcase" ?
                'on' + pascalCase(r.name) + "Change" :
                'on' + r.name.toLowerCase() + "change"
            ,
            AlterResolvedTypeDef(getTypeResolver(propertyChangeDataType.getType()), d => `(args: ${d}) => void`)
        )
    }


    //there are some setters that act like properties at runtime using a (if typeof value === "string") pattern
    //which are a pain to find in the ast for now so we just patch them in here
    if (c.getName() == "ViewBase") {
        let p = props.get("style");
        if (p) {
            if (omitStyleFromViewBase) {
                props.delete("style");
            } else {
                props.set("style", allowStringStyles ? AlterResolvedTypeDef(p, d => `string | ${d}`) : p)
            }
        }
    }

    if (c.getName() == "Label") {
        let p = props.get("textWrap");
        if (p) {
            props.set("textWrap", AlterResolvedTypeDef(p, d => `string | ${d}`))
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

    return orderBy(allProps, p => p.name)
}

type Import = {
    path: string,
    name: string
}

type ImportMap = Map<string, Import>;

type TypeDefinition = {
    def: string,
    imports: ImportMap
}

type TypeResolver = {
    resolve: (existingImports: ImportMap) => TypeDefinition
}

function AlterResolvedTypeDef(t: TypeResolver, augFn: (def: string) => string): TypeResolver {
    return {
        resolve: imp => { let resolved = t.resolve(imp); resolved.def = augFn(resolved.def); return resolved }
    }
}

function combinedMap<K, V>(a: Map<K, V>, b: Map<K, V>): Map<K, V> {
    return new Map([...a.entries()].concat([...b.entries()]))
}


function resolveTypesUsing<T>(existingImports: ImportMap, action: (resolveFn: (def: TypeResolver) => string) => T): { imports: ImportMap, result: T } {
    let imports: ImportMap = new Map();

    let resolveFn = (typeDef: TypeResolver) => {
        let resolved = typeDef.resolve(combinedMap(existingImports, imports));
        imports = combinedMap(imports, resolved.imports);
        return resolved.def
    }
    let result = action(resolveFn)
    return { imports, result };
}


function createTypeResolver(resolveFn: (existingImports: ImportMap) => TypeDefinition) {
    return {
        resolve: resolveFn
    }
}


function getTypeResolver(t: Type, node?: Node, isProperty: boolean = false, dereferenceUnionTypes = true): TypeResolver {

    //expand union types in-place instead of using imports, to keep the definition file easier to read
    if (dereferenceUnionTypes && t.isUnion()) {
        let utDefs = t.getUnionTypes()
            .map(ut => getTypeResolver(ut, undefined, false, false))
            .map(ut => AlterResolvedTypeDef(ut, d => d.includes('=>') ? `(${d})` : d));

        let unionTypeResolver = createTypeResolver((existingImports) => {
            let { imports, result: def } = resolveTypesUsing(existingImports, resolve => utDefs.map(resolve).join(" | "));
            return { def, imports }
        });

        if (isProperty && t.getUnionTypes().some(x => !x.isStringLiteral()) && !t.getUnionTypes().some(x => x.isString())) {
            unionTypeResolver = AlterResolvedTypeDef(unionTypeResolver, d => `string | ${d}`);
        }

        return unionTypeResolver;
    }

    // Create a resolver
    let defWithUnresolvedImports: string;
    if (t.isClassOrInterface() || t.isArray() || t.isObject() || !node) {
        defWithUnresolvedImports = t.getText();
    } else {
        defWithUnresolvedImports = t.getText(node, ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation);
    }

    //"properties" have a value converter from string, so we need to add the "string" as valid type (if not present)
    if (isProperty && !t.isString() && !t.isStringLiteral()) {
        defWithUnresolvedImports = `string | ${defWithUnresolvedImports}`;
    }



    function createAliasForClash(existingImports: ImportMap, importPath: string, importName: string): string {
        //TODO Check existing imports for clash and add a digit or something
        return pascalCase(path.basename(importPath)) + importName;
    }



    let resolveImports = (text: string, existingImports: ImportMap): TypeDefinition => {
        let imports: ImportMap = new Map();

        //Recursively replace imports inside generic type specifiers
        let def = text.replace(/<(.*?)>/g, (match: string, genericType: string) => {
            let replaced = resolveImports(genericType, combinedMap(existingImports, imports))
            imports = combinedMap(imports, replaced.imports)
            return `<${replaced.def}>`;
        });

        //replace the remaining 
        def = def.replace(/import\("(.*?)"\)\.([a-zA-Z_0-9\<\>\[\]]+)/g, (match: string, importPathMatch: string, importExpression: string) => {
            let importName = importExpression.replace("[]", "");
            let importPath = ('@nativescript/core/' + path.relative(nativescriptSourcePath, importPathMatch)).replace(/\\/g, '/');

            let combinedImports = combinedMap(existingImports, imports);
            let existingImportAlias = [...combinedImports.entries()].find(([_,imp]) => (imp.name == importName && imp.path == importPath))
            
            if (existingImportAlias)
                return importExpression.replace(importName, existingImportAlias?.[0])

            //no existing import alias, create one
            let importAlias = importName;

            //is our alias unique?
            if (combinedImports.get(importName)) {
                //create a new alias
                importAlias = createAliasForClash(imports, importPath, importName);
                imports.set(importAlias, { name: importName, path: importPath });
                return importExpression.replace(importName, importAlias);
            }

            //use name as alias
            imports.set(importAlias, { path: importPath, name: importName });
            return importExpression;
        });

        return {
            imports: imports,
            def: def
        }
    }

    return {
        resolve: (existingImports: ImportMap) => {
            return resolveImports(defWithUnresolvedImports, existingImports);
        }
    }
}

function formatClassPropDef(name: string, def: string, casing: PropDefsCasing): string {
    return `${casing === "lowercase" ? name.toLowerCase() : name}?: ${def};`
}

function getAttributesClassName(c: ClassDeclaration) {
    return `${c.getName()}Attributes`
}

function getClassTypeDef(c: ClassDeclaration, options: TypingsOptions): TypeResolver {
    return {
        resolve: (existingImports) => {
            const { propDefsCasing, exportAttributes } = options;
            let newImports: ImportMap = new Map();

            var propDefs: string[] = []
            for (var prop of orderBy(getClassProperties(c, options), p => p.name)) {
                let resolvedTypeDef = prop.typeDef.resolve(combinedMap(existingImports, newImports));
                newImports = combinedMap(newImports, resolvedTypeDef.imports);
                propDefs.push(formatClassPropDef(prop.name, resolvedTypeDef.def, propDefsCasing))
            }

            var baseclass = c.getBaseClass();
            var classDef = ` ${baseclass ? `${getAttributesClassName(baseclass)} & ` : ''}{\n${propDefs.map(d => "    " + d).join("\n")}\n};`;
            return {
                def: classDef,
                imports: newImports
            }
        }
    }
}


function getClassDefs(options: TypingsOptions) {
    const { reExportImports, exportAttributes } = options;

    let existingImports: ImportMap = new Map();
    let classDefs: string[] = [];

    for (let cl of orderBy(includeAncestors(uiClasses), c => getAttributesClassName(c))) {
        let alias = `// ${path.relative(nativescriptSourcePath, cl.getSourceFile().getFilePath()).replace(/\\/g, "/")}\n${exportAttributes ? "export " : ""}type ${getAttributesClassName(cl)}`;
        let classDef = getClassTypeDef(cl, options).resolve(existingImports);
        existingImports = combinedMap(existingImports, classDef.imports);
        classDefs.push(`${alias} = ${classDef.def}`)
    }

    let classImportStatements = orderBy([...existingImports.keys()], i => i).map(c => `${reExportImports ? "export " : ""}type ${c} = import("${existingImports.get(c)?.path}").${existingImports.get(c)?.name};`).join("\n");
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
${orderBy(uiClasses, c => getAttributesClassName(c)).map(c => getIntrinsicElementDef(c)).map(d => `        ${d}`).join("\n")}
        [name: string]: { [name: string]: any };
    }
}
`
}

type PropDefsCasing = "lowercase" | "preserve";

interface ClassTypeDefsOptions {
    propDefsCasing: PropDefsCasing,
    exportAttributes: boolean,
    reExportImports: boolean,
}

type EventNameCasing = "lowercase" | "camelcase";

interface ClassPropertiesOptions {
    /**
     * Limitation: if propsDefCasing is "lowercase", in practice it will override the chosen eventName casing to "lowercase".
     */
    eventNameCasing: EventNameCasing,
    allowStringStyles: boolean,
    omitStyleFromViewBase: boolean,
}

interface TypingsOptions extends ClassTypeDefsOptions, ClassPropertiesOptions {
}

function getFullJSXDef(flavour: "svelte" | "react"): string {
    if (flavour === "svelte") {
        const options: TypingsOptions = {
            propDefsCasing: "lowercase",
            eventNameCasing: "camelcase",
            exportAttributes: false,
            reExportImports: false,
            allowStringStyles: true,
            omitStyleFromViewBase: false,
        };

        return `${getClassDefs(options)}\n\n${getJSXNamespaceDef()}`
    } else if (flavour === "react") {
        const options: TypingsOptions = {
            propDefsCasing: "preserve",
            eventNameCasing: "camelcase",
            exportAttributes: true,
            reExportImports: false,
            allowStringStyles: false,
            omitStyleFromViewBase: true,
        };

        return `${getClassDefs(options)}`
    }

    throw Error(`Unknown flavour of NativeScript, ${flavour}`);
}


fs.writeFileSync("./sveltenative-jsx.d.ts", getFullJSXDef("svelte"));
fs.writeFileSync("./react-nativescript-jsx.ts", getFullJSXDef("react"));



//console.log(getUISourceFiles().map(s => s.getFilePath()).join("\n"));


