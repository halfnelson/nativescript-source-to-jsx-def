type Color = import("@nativescript/core/color/color").Color;
type DrawerTransitionBase = import("nativescript-ui-sidedrawer/index").DrawerTransitionBase;
type SideDrawerLocation = import("nativescript-ui-sidedrawer/index").SideDrawerLocation;
type View = import("@nativescript/core/ui/core/view/view").View;

// index.d.ts
type RadSideDrawerAttributes = ViewAttributes & {
    allowedgeswipe?: false | true; // InstanceProperty index.d.ts
    android?: any; // InstanceProperty index.d.ts
    drawercontent?: View; // InstanceProperty index.d.ts
    drawercontentsize?: number; // InstanceProperty index.d.ts
    drawerlocation?: SideDrawerLocation.Left | SideDrawerLocation.Right | SideDrawerLocation.Top | SideDrawerLocation.Bottom; // InstanceProperty index.d.ts
    drawertransition?: DrawerTransitionBase; // InstanceProperty index.d.ts
    gesturesenabled?: false | true; // InstanceProperty index.d.ts
    ios?: any; // InstanceProperty index.d.ts
    maincontent?: View; // InstanceProperty index.d.ts
    shadowcolor?: Color; // InstanceProperty index.d.ts
};

declare namespace svelteNative.JSX {
    interface IntrinsicElements {
        radsidedrawer: RadSideDrawerAttributes; 
        [name: string]: { [name: string]: any };
    }
}

