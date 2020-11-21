type Color = import("@nativescript/core/color").Color;
type DrawerTransitionBase = import("nativescript-ui-sidedrawer").DrawerTransitionBase;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type SideDrawerLocation = import("nativescript-ui-sidedrawer").SideDrawerLocation;
type View = import("@nativescript/core/ui/core/view").View;
type Override<What, With> = Omit<What, keyof With> & With


// index.d.ts
export type RadSideDrawerAttributes = Override<ViewAttributes, {
    allowEdgeSwipe?: string | boolean;
    android?: any;
    drawerContent?: string | View;
    drawerContentSize?: string | number;
    drawerLocation?: SideDrawerLocation;
    drawerTransition?: string | DrawerTransitionBase;
    gesturesEnabled?: string | boolean;
    ios?: any;
    mainContent?: string | View;
    onAllowEdgeSwipeChange?: (args: PropertyChangeData) => void;
    onDrawerContentChange?: (args: PropertyChangeData) => void;
    onDrawerContentSizeChange?: (args: PropertyChangeData) => void;
    onDrawerLocationChange?: (args: PropertyChangeData) => void;
    onDrawerTransitionChange?: (args: PropertyChangeData) => void;
    onGesturesEnabledChange?: (args: PropertyChangeData) => void;
    onMainContentChange?: (args: PropertyChangeData) => void;
    onShadowColorChange?: (args: PropertyChangeData) => void;
    shadowColor?: string | Color;
}>;



