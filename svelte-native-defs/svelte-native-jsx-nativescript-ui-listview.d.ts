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
    onSpanCountChange?: (args: PropertyChangeData) => void;
    spancount?: string | number;
};

// index.d.ts
type ListViewLayoutBaseAttributes = ViewBaseAttributes & {

};

// index.d.ts
type ListViewLinearLayoutAttributes = ListViewLayoutBaseAttributes & {
    android?: any;
    ios?: any;
    itemdeleteanimation?: ListViewItemAnimation;
    itemheight?: string | number;
    iteminsertanimation?: ListViewItemAnimation;
    itemwidth?: string | number;
    onItemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onItemHeightChange?: (args: PropertyChangeData) => void;
    onItemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onItemWidthChange?: (args: PropertyChangeData) => void;
    onScrollDirectionChange?: (args: PropertyChangeData) => void;
    scrolldirection?: ListViewScrollDirection;
};

// index.d.ts
type ListViewStaggeredLayoutAttributes = ListViewGridLayoutAttributes & {

};

// ui-listview.common.d.ts
type PullToRefreshStyleAttributes = ViewBaseAttributes & {
    indicatorbackgroundcolor?: Color;
    indicatorcolor?: Color;
};

// index.d.ts
type RadListViewAttributes = ViewAttributes & {
    android?: any;
    androidlistview?: any;
    enablecollapsiblegroups?: string | boolean;
    filteringfunction?: string | ((item: any) => boolean);
    footeritemtemplate?: string;
    grouptemplate?: string;
    groupingfunction?: string | ((item: any) => any);
    headeritemtemplate?: string;
    itemreorder?: string | boolean;
    itemselectedbackgroundcolor?: string | Color;
    itemswipe?: string;
    itemswipetemplate?: string;
    itemtemplate?: string;
    itemtemplateselector?: string | ((item: any, index: number, items: any) => string);
    itemtemplates?: string | KeyedTemplate[];
    itemviewdisposer?: () => void;
    itemviewloader?: (viewType: any) => View;
    items?: string | any;
    listviewlayout?: string | ListViewLayoutBase;
    loadondemandbuffersize?: string | number;
    loadondemandmode?: ListViewLoadOnDemandMode;
    multipleselection?: string | boolean;
    nativescriptviewadded?: (parent: View, child: View) => void;
    onEnableCollapsibleGroupsChange?: (args: PropertyChangeData) => void;
    onFilteringFunctionChange?: (args: PropertyChangeData) => void;
    onFooterItemTemplateChange?: (args: PropertyChangeData) => void;
    onGroupTemplateChange?: (args: PropertyChangeData) => void;
    onGroupingFunctionChange?: (args: PropertyChangeData) => void;
    onHeaderItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemReorderChange?: (args: PropertyChangeData) => void;
    onItemSelectedBackgroundColorChange?: (args: PropertyChangeData) => void;
    onItemSwipeChange?: (args: PropertyChangeData) => void;
    onItemSwipeTemplateChange?: (args: PropertyChangeData) => void;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onListViewLayoutChange?: (args: PropertyChangeData) => void;
    onLoadOnDemandBufferSizeChange?: (args: PropertyChangeData) => void;
    onLoadOnDemandModeChange?: (args: PropertyChangeData) => void;
    onMultipleSelectionChange?: (args: PropertyChangeData) => void;
    onPullToRefreshChange?: (args: PropertyChangeData) => void;
    onPullToRefreshStyleChange?: (args: PropertyChangeData) => void;
    onReorderModeChange?: (args: PropertyChangeData) => void;
    onScrollPositionChange?: (args: PropertyChangeData) => void;
    onSelectionBehaviorChange?: (args: PropertyChangeData) => void;
    onSortingFunctionChange?: (args: PropertyChangeData) => void;
    onSwipeActionsChange?: (args: PropertyChangeData) => void;
    pulltorefresh?: string | boolean;
    pulltorefreshstyle?: string | PullToRefreshStyle;
    reordermode?: ListViewReorderMode;
    scrollposition?: ListViewScrollPosition;
    selectionbehavior?: ListViewSelectionBehavior;
    sortingfunction?: string | ((item: any, otherItem: any) => number);
    swipeactions?: string | boolean;
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

