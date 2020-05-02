export {}
type Color = import("@nativescript/core/color/color").Color;
type DrawerTransitionBase = import("nativescript-ui-sidedrawer/index").DrawerTransitionBase;
type PropertyChangeData = import("@nativescript/core/data/observable/observable").PropertyChangeData;
type SideDrawerLocation = import("nativescript-ui-sidedrawer/index").SideDrawerLocation;
type View = import("@nativescript/core/ui/core/view/view").View;

declare global {
    namespace svelteNative.JSX {
        // index.d.ts
        type RadSideDrawerAttributes = ViewAttributes & {
            allowedgeswipe?: string | boolean; // DynamicPropertyRegistration ui-sidedrawer.common.d.ts
            android?: any; // InstanceProperty index.d.ts
            drawercontent?: string | View; // DynamicPropertyRegistration index.d.ts
            drawercontentsize?: string | number; // DynamicPropertyRegistration index.d.ts
            drawerlocation?: SideDrawerLocation; // DynamicPropertyRegistration index.d.ts
            drawertransition?: string | DrawerTransitionBase; // DynamicPropertyRegistration index.d.ts
            gesturesenabled?: string | boolean; // DynamicPropertyRegistration index.d.ts
            ios?: any; // InstanceProperty index.d.ts
            maincontent?: string | View; // DynamicPropertyRegistration index.d.ts
            onAllowEdgeSwipeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange ui-sidedrawer.common.d.ts
            onDrawerContentChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            onDrawerContentSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            onDrawerLocationChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            onDrawerTransitionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            onGesturesEnabledChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            onMainContentChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            onShadowColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
            shadowcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
        };


        interface IntrinsicElements {
            radsidedrawer: RadSideDrawerAttributes;
        }
    }
}

