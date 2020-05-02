type Color = import("@nativescript/core/color/color").Color;
type KeyedTemplate = import("@nativescript/core/ui/core/view/view").KeyedTemplate;
type ListViewItemAnimation = import("nativescript-ui-listview/index").ListViewItemAnimation;
type ListViewLayoutBase = import("nativescript-ui-listview/index").ListViewLayoutBase;
type ListViewLoadOnDemandMode = import("nativescript-ui-listview/index").ListViewLoadOnDemandMode;
type ListViewReorderMode = import("nativescript-ui-listview/index").ListViewReorderMode;
type ListViewScrollDirection = import("nativescript-ui-listview/index").ListViewScrollDirection;
type ListViewScrollPosition = import("nativescript-ui-listview/index").ListViewScrollPosition;
type ListViewSelectionBehavior = import("nativescript-ui-listview/index").ListViewSelectionBehavior;
type PropertyChangeData = import("@nativescript/core/data/observable/observable").PropertyChangeData;
type PullToRefreshStyle = import("nativescript-ui-listview/index").PullToRefreshStyle;
type View = import("@nativescript/core/ui/core/view/view").View;

// index.d.ts
type ListViewGridLayoutAttributes = ListViewLinearLayoutAttributes & {
    onSpanCountChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange ui-listview.android.d.ts
    spancount?: string | number; // DynamicPropertyRegistration ui-listview.android.d.ts
};

// index.d.ts
type ListViewLayoutBaseAttributes = ViewBaseAttributes & {

};

// index.d.ts
type ListViewLinearLayoutAttributes = ListViewLayoutBaseAttributes & {
    android?: any; // InstanceProperty index.d.ts
    ios?: any; // InstanceProperty index.d.ts
    itemdeleteanimation?: ListViewItemAnimation; // DynamicPropertyRegistration index.d.ts
    itemheight?: string | number; // DynamicPropertyRegistration index.d.ts
    iteminsertanimation?: ListViewItemAnimation; // DynamicPropertyRegistration index.d.ts
    itemwidth?: string | number; // DynamicPropertyRegistration index.d.ts
    onItemDeleteAnimationChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemHeightChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemInsertAnimationChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onScrollDirectionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    scrolldirection?: ListViewScrollDirection; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type ListViewStaggeredLayoutAttributes = ListViewGridLayoutAttributes & {

};

// ui-listview.common.d.ts
type PullToRefreshStyleAttributes = ViewBaseAttributes & {
    indicatorbackgroundcolor?: Color; // InstanceProperty ui-listview.common.d.ts
    indicatorcolor?: Color; // InstanceProperty ui-listview.common.d.ts
};

// index.d.ts
type RadListViewAttributes = ViewAttributes & {
    android?: any; // InstanceProperty index.d.ts
    androidlistview?: any; // InstanceProperty index.d.ts
    enablecollapsiblegroups?: string | boolean; // DynamicPropertyRegistration index.d.ts
    filteringfunction?: string | ((item: any) => boolean); // DynamicPropertyRegistration index.d.ts
    footeritemtemplate?: string; // DynamicPropertyRegistration index.d.ts
    grouptemplate?: string; // DynamicPropertyRegistration index.d.ts
    groupingfunction?: string | ((item: any) => any); // DynamicPropertyRegistration index.d.ts
    headeritemtemplate?: string; // DynamicPropertyRegistration index.d.ts
    itemreorder?: string | boolean; // DynamicPropertyRegistration index.d.ts
    itemselectedbackgroundcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    itemswipe?: string; // DynamicPropertyRegistration index.d.ts
    itemswipetemplate?: string; // DynamicPropertyRegistration index.d.ts
    itemtemplate?: string; // DynamicPropertyRegistration index.d.ts
    itemtemplateselector?: string | ((item: any, index: number, items: any) => string); // InstanceProperty index.d.ts
    itemtemplates?: string | KeyedTemplate[]; // InstanceProperty index.d.ts
    itemviewdisposer?: () => void; // InstanceProperty index.d.ts
    itemviewloader?: (viewType: any) => View; // InstanceProperty index.d.ts
    items?: string | any; // DynamicPropertyRegistration index.d.ts
    listviewlayout?: string | ListViewLayoutBase; // DynamicPropertyRegistration index.d.ts
    loadondemandbuffersize?: string | number; // DynamicPropertyRegistration index.d.ts
    loadondemandmode?: ListViewLoadOnDemandMode; // DynamicPropertyRegistration index.d.ts
    multipleselection?: string | boolean; // DynamicPropertyRegistration index.d.ts
    nativescriptviewadded?: (parent: View, child: View) => void; // InstanceProperty index.d.ts
    onEnableCollapsibleGroupsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onFilteringFunctionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onFooterItemTemplateChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onGroupTemplateChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onGroupingFunctionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHeaderItemTemplateChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemReorderChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemSelectedBackgroundColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemSwipeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemSwipeTemplateChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemTemplateChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onItemsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onListViewLayoutChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLoadOnDemandBufferSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLoadOnDemandModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMultipleSelectionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPullToRefreshChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPullToRefreshStyleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onReorderModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onScrollPositionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSelectionBehaviorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSortingFunctionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSwipeActionsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    pulltorefresh?: string | boolean; // DynamicPropertyRegistration index.d.ts
    pulltorefreshstyle?: string | PullToRefreshStyle; // DynamicPropertyRegistration index.d.ts
    reordermode?: ListViewReorderMode; // DynamicPropertyRegistration index.d.ts
    scrollposition?: ListViewScrollPosition; // DynamicPropertyRegistration index.d.ts
    selectionbehavior?: ListViewSelectionBehavior; // DynamicPropertyRegistration index.d.ts
    sortingfunction?: string | ((item: any, otherItem: any) => number); // DynamicPropertyRegistration index.d.ts
    swipeactions?: string | boolean; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type ReorderHandleAttributes = StackLayoutAttributes & {

};

declare namespace svelteNative.JSX {
    interface IntrinsicElements {
        listviewgridlayout: ListViewGridLayoutAttributes;
        listviewlinearlayout: ListViewLinearLayoutAttributes;
        listviewstaggeredlayout: ListViewStaggeredLayoutAttributes;
        pulltorefreshstyle: PullToRefreshStyleAttributes;
        radlistview: RadListViewAttributes;
        reorderhandle: ReorderHandleAttributes; 
        [name: string]: { [name: string]: any };
    }
}

