export {} //Ensure this is a module
type Color = import("@nativescript/core/color").Color;
type DrawerTransitionBase = import("nativescript-ui-sidedrawer").DrawerTransitionBase;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type SideDrawerLocation = import("nativescript-ui-sidedrawer").SideDrawerLocation;
type View = import("@nativescript/core/ui/core/view").View;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// index.d.ts
type RadSideDrawerAttributes = Override<ViewAttributes, {
    allowedgeswipe?: string | boolean;
    android?: any;
    drawercontent?: string | View;
    drawercontentsize?: string | number;
    drawerlocation?: SideDrawerLocation;
    drawertransition?: string | DrawerTransitionBase;
    gesturesenabled?: string | boolean;
    ios?: any;
    maincontent?: string | View;
    onallowEdgeSwipeChange?: (args: PropertyChangeData) => void;
    ondrawerContentChange?: (args: PropertyChangeData) => void;
    ondrawerContentSizeChange?: (args: PropertyChangeData) => void;
    ondrawerLocationChange?: (args: PropertyChangeData) => void;
    ondrawerTransitionChange?: (args: PropertyChangeData) => void;
    ongesturesEnabledChange?: (args: PropertyChangeData) => void;
    onmainContentChange?: (args: PropertyChangeData) => void;
    onshadowColorChange?: (args: PropertyChangeData) => void;
    shadowcolor?: string | Color;
}>;


interface IntrinsicElements {
        radSideDrawer: RadSideDrawerAttributes; 
}


}
}
