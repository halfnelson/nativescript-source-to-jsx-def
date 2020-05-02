type Color = import("@nativescript/core/color/color").Color;
type DrawerTransitionBase = import("nativescript-ui-sidedrawer/index").DrawerTransitionBase;
type PropertyChangeData = import("@nativescript/core/data/observable/observable").PropertyChangeData;
type SideDrawerLocation = import("nativescript-ui-sidedrawer/index").SideDrawerLocation;
type View = import("@nativescript/core/ui/core/view/view").View;

// index.d.ts
type RadSideDrawerAttributes = ViewAttributes & {
    allowedgeswipe?: string | boolean;
    android?: any;
    drawercontent?: string | View;
    drawercontentsize?: string | number;
    drawerlocation?: SideDrawerLocation;
    drawertransition?: string | DrawerTransitionBase;
    gesturesenabled?: string | boolean;
    ios?: any;
    maincontent?: string | View;
    onAllowEdgeSwipeChange?: (args: PropertyChangeData) => void;
    onDrawerContentChange?: (args: PropertyChangeData) => void;
    onDrawerContentSizeChange?: (args: PropertyChangeData) => void;
    onDrawerLocationChange?: (args: PropertyChangeData) => void;
    onDrawerTransitionChange?: (args: PropertyChangeData) => void;
    onGesturesEnabledChange?: (args: PropertyChangeData) => void;
    onMainContentChange?: (args: PropertyChangeData) => void;
    onShadowColorChange?: (args: PropertyChangeData) => void;
    shadowcolor?: string | Color;
};

declare namespace svelteNative.JSX {
    interface IntrinsicElements {
        radsidedrawer: RadSideDrawerAttributes; 
        [name: string]: { [name: string]: any };
    }
}

