export {} //Ensure this is a module
type Color = import("@nativescript/core/color").Color;
type DrawerTransitionBase = import("nativescript-ui-sidedrawer").DrawerTransitionBase;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type SideDrawerLocation = import("nativescript-ui-sidedrawer").SideDrawerLocation;
type View = import("@nativescript/core/ui/core/view").View;

declare global {
namespace svelteNative.JSX {

// index.d.ts
interface RadSideDrawerAttributes  extends ViewAttributes{
    allowEdgeSwipe?: string | boolean;
    android?: any;
    drawerContent?: string | View;
    drawerContentSize?: string | number;
    drawerLocation?: SideDrawerLocation;
    drawerTransition?: string | DrawerTransitionBase;
    gesturesEnabled?: string | boolean;
    ios?: any;
    mainContent?: string | View;
    onallowEdgeSwipeChange?: (args: PropertyChangeData) => void;
    ondrawerContentChange?: (args: PropertyChangeData) => void;
    ondrawerContentSizeChange?: (args: PropertyChangeData) => void;
    ondrawerLocationChange?: (args: PropertyChangeData) => void;
    ondrawerTransitionChange?: (args: PropertyChangeData) => void;
    ongesturesEnabledChange?: (args: PropertyChangeData) => void;
    onmainContentChange?: (args: PropertyChangeData) => void;
    onshadowColorChange?: (args: PropertyChangeData) => void;
    shadowColor?: string | Color;
};


interface IntrinsicElements {
        radSideDrawer: RadSideDrawerAttributes; 
}


}
}
