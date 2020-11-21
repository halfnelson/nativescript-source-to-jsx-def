import { AttributeClassDefinition, AttributeClassPropDefinition, ImportAlias, IntrinsicElementDefinition } from './JSXExporter';
import JSXDocumentRenderer from "./JSXDocumentRenderer";

export class ReactJSXDocumentRenderer extends JSXDocumentRenderer {

    constructor(private isCore: boolean = false, debug?: boolean) {
        super(debug);
    }

    renderImports(imports: ImportAlias[]): string {
        let filteredImports = this.isCore ? imports.filter(i => i.alias != "Style") : imports;
        return super.renderImports(filteredImports);
    }

    renderClass(classDefinition: AttributeClassDefinition): string {
        if (this.isCore && (classDefinition.className == "ViewBaseAttributes")) {
            classDefinition = { ...classDefinition, props: classDefinition.props.filter(p => p.name != "style") };
        }
        let rendered = super.renderClass(classDefinition);
        return rendered.replace(/^type /m, "export type ");
    }

    renderClassPropertyName(prop: AttributeClassPropDefinition): string {
        if (prop.meta.derivedFrom.includes("SyntheticEvent") && prop.name.startsWith('on')) {
            return prop.name.slice(0, 2) + prop.name[2].toUpperCase() + prop.name.slice(3);
        } else {
            return prop.name;
        }
    }

    renderJSXNamespace(intrinsicElements: IntrinsicElementDefinition[]) {
        return '';
    }
}
