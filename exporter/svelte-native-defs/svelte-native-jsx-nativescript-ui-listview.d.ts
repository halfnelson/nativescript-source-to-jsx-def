export {} //Ensure this is a module
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

declare global {
namespace svelteNative.JSX {

// index.d.ts
interface ListViewGridLayoutAttributes  extends ListViewLinearLayoutAttributes{
    lineSpacing?: string | number;
    onlineSpacingChange?: (args: PropertyChangeData) => void;
    onspanCountChange?: (args: PropertyChangeData) => void;
    spanCount?: string | number;
};

// index.d.ts
interface ListViewLayoutBaseAttributes  extends ViewBaseAttributes{
    itemDeleteAnimation?: ListViewItemAnimation;
    itemHeight?: string | number;
    itemInsertAnimation?: ListViewItemAnimation;
    itemWidth?: string | number;
    onitemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onitemHeightChange?: (args: PropertyChangeData) => void;
    onitemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onitemWidthChange?: (args: PropertyChangeData) => void;
    onscrollDirectionChange?: (args: PropertyChangeData) => void;
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
    ondynamicItemSizeChange?: (args: PropertyChangeData) => void;
    onitemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onitemHeightChange?: (args: PropertyChangeData) => void;
    onitemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onitemWidthChange?: (args: PropertyChangeData) => void;
    onscrollDirectionChange?: (args: PropertyChangeData) => void;
    scrollDirection?: NativescriptUiListviewListViewScrollDirection;
};

// index.d.ts
interface ListViewStaggeredLayoutAttributes  extends ListViewGridLayoutAttributes{

};

// ui-listview.common.d.ts
interface PullToRefreshStyleAttributes  extends ViewBaseAttributes{
    indicatorBackgroundColor?: string | Color;
    indicatorColor?: string | Color;
    onindicatorBackgroundColorChange?: (args: PropertyChangeData) => void;
    onindicatorColorChange?: (args: PropertyChangeData) => void;
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
    onenableCollapsibleGroupsChange?: (args: PropertyChangeData) => void;
    onfilteringFunctionChange?: (args: PropertyChangeData) => void;
    onfooterItemTemplateChange?: (args: PropertyChangeData) => void;
    ongroupTemplateChange?: (args: PropertyChangeData) => void;
    ongroupingFunctionChange?: (args: PropertyChangeData) => void;
    onheaderItemTemplateChange?: (args: PropertyChangeData) => void;
    onitemReorderChange?: (args: PropertyChangeData) => void;
    onitemSelectedBackgroundColorChange?: (args: PropertyChangeData) => void;
    onitemSwipeChange?: (args: PropertyChangeData) => void;
    onitemSwipeTemplateChange?: (args: PropertyChangeData) => void;
    onitemTemplateChange?: (args: PropertyChangeData) => void;
    onitemTemplateSelectorChange?: (args: PropertyChangeData) => void;
    onitemTemplatesChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onlistViewLayoutChange?: (args: PropertyChangeData) => void;
    onloadOnDemandBufferSizeChange?: (args: PropertyChangeData) => void;
    onloadOnDemandItemTemplateChange?: (args: PropertyChangeData) => void;
    onloadOnDemandModeChange?: (args: PropertyChangeData) => void;
    onmultipleSelectionChange?: (args: PropertyChangeData) => void;
    onpullToRefreshChange?: (args: PropertyChangeData) => void;
    onpullToRefreshStyleChange?: (args: PropertyChangeData) => void;
    onreorderModeChange?: (args: PropertyChangeData) => void;
    onscrollPositionChange?: (args: PropertyChangeData) => void;
    onselectionBehaviorChange?: (args: PropertyChangeData) => void;
    onsortingFunctionChange?: (args: PropertyChangeData) => void;
    onswipeActionsChange?: (args: PropertyChangeData) => void;
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


interface IntrinsicElements {
        listViewGridLayout: ListViewGridLayoutAttributes;
        listViewLinearLayout: ListViewLinearLayoutAttributes;
        listViewStaggeredLayout: ListViewStaggeredLayoutAttributes;
        pullToRefreshStyle: PullToRefreshStyleAttributes;
        radListView: RadListViewAttributes;
        reorderHandle: ReorderHandleAttributes; 
}


}
}
