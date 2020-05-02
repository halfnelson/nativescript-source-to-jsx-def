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
export type ListViewGridLayoutAttributes = ListViewLinearLayoutAttributes & {
    onSpanCountChange?: (args: PropertyChangeData) => void;
    spanCount?: string | number;
};

// index.d.ts
export type ListViewLayoutBaseAttributes = ViewBaseAttributes & {

};

// index.d.ts
export type ListViewLinearLayoutAttributes = ListViewLayoutBaseAttributes & {
    android?: any;
    ios?: any;
    itemDeleteAnimation?: ListViewItemAnimation;
    itemHeight?: string | number;
    itemInsertAnimation?: ListViewItemAnimation;
    itemWidth?: string | number;
    onItemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onItemHeightChange?: (args: PropertyChangeData) => void;
    onItemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onItemWidthChange?: (args: PropertyChangeData) => void;
    onScrollDirectionChange?: (args: PropertyChangeData) => void;
    scrollDirection?: ListViewScrollDirection;
};

// index.d.ts
export type ListViewStaggeredLayoutAttributes = ListViewGridLayoutAttributes & {

};

// ui-listview.common.d.ts
export type PullToRefreshStyleAttributes = ViewBaseAttributes & {
    indicatorBackgroundColor?: Color;
    indicatorColor?: Color;
};

// index.d.ts
export type RadListViewAttributes = ViewAttributes & {
    android?: any;
    androidListView?: any;
    enableCollapsibleGroups?: string | boolean;
    filteringFunction?: string | ((item: any) => boolean);
    footerItemTemplate?: string;
    groupTemplate?: string;
    groupingFunction?: string | ((item: any) => any);
    headerItemTemplate?: string;
    itemReorder?: string | boolean;
    itemSelectedBackgroundColor?: string | Color;
    itemSwipe?: string;
    itemSwipeTemplate?: string;
    itemTemplate?: string;
    itemTemplateSelector?: string | ((item: any, index: number, items: any) => string);
    itemTemplates?: string | KeyedTemplate[];
    itemViewDisposer?: () => void;
    itemViewLoader?: (viewType: any) => View;
    items?: string | any;
    listViewLayout?: string | ListViewLayoutBase;
    loadOnDemandBufferSize?: string | number;
    loadOnDemandMode?: ListViewLoadOnDemandMode;
    multipleSelection?: string | boolean;
    nativeScriptViewAdded?: (parent: View, child: View) => void;
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
    pullToRefresh?: string | boolean;
    pullToRefreshStyle?: string | PullToRefreshStyle;
    reorderMode?: ListViewReorderMode;
    scrollPosition?: ListViewScrollPosition;
    selectionBehavior?: ListViewSelectionBehavior;
    sortingFunction?: string | ((item: any, otherItem: any) => number);
    swipeActions?: string | boolean;
};

// index.d.ts
export type ReorderHandleAttributes = StackLayoutAttributes & {

};



