type Color = import("@nativescript/core/color").Color;
type KeyedTemplate = import("@nativescript/core/ui/core/view").KeyedTemplate;
type ListViewItemAnimation = import("nativescript-ui-listview/ui-listview.common").ListViewItemAnimation;
type ListViewLayoutBase = import("nativescript-ui-listview").ListViewLayoutBase;
type ListViewLoadOnDemandMode = import("nativescript-ui-listview").ListViewLoadOnDemandMode;
type ListViewReorderMode = import("nativescript-ui-listview").ListViewReorderMode;
type ListViewScrollDirection = import("nativescript-ui-listview/ui-listview.common").ListViewScrollDirection;
type ListViewScrollPosition = import("nativescript-ui-listview").ListViewScrollPosition;
type ListViewSelectionBehavior = import("nativescript-ui-listview").ListViewSelectionBehavior;
type NativescriptUiListviewListViewItemAnimation = import("nativescript-ui-listview").ListViewItemAnimation;
type NativescriptUiListviewListViewScrollDirection = import("nativescript-ui-listview").ListViewScrollDirection;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type PullToRefreshStyle = import("nativescript-ui-listview").PullToRefreshStyle;
type View = import("@nativescript/core/ui/core/view").View;

// index.d.ts
interface ListViewGridLayoutAttributes  extends ListViewLinearLayoutAttributes{
    lineSpacing?: string | number;
    onLineSpacingChange?: (args: PropertyChangeData) => void;
    onSpanCountChange?: (args: PropertyChangeData) => void;
    spanCount?: string | number;
};

// index.d.ts
interface ListViewLayoutBaseAttributes  extends ViewBaseAttributes{
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
interface ListViewLinearLayoutAttributes  extends ListViewLayoutBaseAttributes{
    android?: any;
    dynamicItemSize?: string | boolean;
    ios?: any;
    itemDeleteAnimation?: NativescriptUiListviewListViewItemAnimation;
    itemHeight?: string | number;
    itemInsertAnimation?: NativescriptUiListviewListViewItemAnimation;
    itemWidth?: string | number;
    onDynamicItemSizeChange?: (args: PropertyChangeData) => void;
    onItemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onItemHeightChange?: (args: PropertyChangeData) => void;
    onItemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onItemWidthChange?: (args: PropertyChangeData) => void;
    onScrollDirectionChange?: (args: PropertyChangeData) => void;
    scrollDirection?: NativescriptUiListviewListViewScrollDirection;
};

// index.d.ts
interface ListViewStaggeredLayoutAttributes  extends ListViewGridLayoutAttributes{

};

// ui-listview.common.d.ts
interface PullToRefreshStyleAttributes  extends ViewBaseAttributes{
    indicatorBackgroundColor?: string | Color;
    indicatorColor?: string | Color;
    onIndicatorBackgroundColorChange?: (args: PropertyChangeData) => void;
    onIndicatorColorChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface RadListViewAttributes  extends ViewAttributes{
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
    loadOnDemandItemTemplate?: string;
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
    onItemTemplateSelectorChange?: (args: PropertyChangeData) => void;
    onItemTemplatesChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onListViewLayoutChange?: (args: PropertyChangeData) => void;
    onLoadOnDemandBufferSizeChange?: (args: PropertyChangeData) => void;
    onLoadOnDemandItemTemplateChange?: (args: PropertyChangeData) => void;
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
interface ReorderHandleAttributes  extends StackLayoutAttributes{

};



