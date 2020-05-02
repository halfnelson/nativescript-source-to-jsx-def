export {}
declare global {
    namespace svelteNative.JSX {
        /* svelte2tsx JSX */
        interface ElementClass {
            $$prop_def: any;
        }

        interface ElementAttributesProperty {
            $$prop_def: any; // specify the property name to use
        }

        interface IntrinsicAttributes {}

        interface IntrinsicElements {
            [name: string]: { [name: string]: any };
        }
    }
}