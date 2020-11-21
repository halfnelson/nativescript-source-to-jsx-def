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
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// index.d.ts
type ListViewGridLayoutAttributes = Override<ListViewLinearLayoutAttributes, {
    linespacing?: string | number;
    onlineSpacingChange?: (args: PropertyChangeData) => void;
    onspanCountChange?: (args: PropertyChangeData) => void;
    spancount?: string | number;
}>;

// index.d.ts
type ListViewLayoutBaseAttributes = Override<ViewBaseAttributes, {
    itemdeleteanimation?: ListViewItemAnimation;
    itemheight?: string | number;
    iteminsertanimation?: ListViewItemAnimation;
    itemwidth?: string | number;
    onitemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onitemHeightChange?: (args: PropertyChangeData) => void;
    onitemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onitemWidthChange?: (args: PropertyChangeData) => void;
    onscrollDirectionChange?: (args: PropertyChangeData) => void;
    scrolldirection?: ListViewScrollDirection;
}>;

// index.d.ts
type ListViewLinearLayoutAttributes = Override<ListViewLayoutBaseAttributes, {
    android?: any;
    dynamicitemsize?: string | boolean;
    ios?: any;
    itemdeleteanimation?: NativescriptUiListviewListViewItemAnimation;
    itemheight?: string | number;
    iteminsertanimation?: NativescriptUiListviewListViewItemAnimation;
    itemwidth?: string | number;
    ondynamicItemSizeChange?: (args: PropertyChangeData) => void;
    onitemDeleteAnimationChange?: (args: PropertyChangeData) => void;
    onitemHeightChange?: (args: PropertyChangeData) => void;
    onitemInsertAnimationChange?: (args: PropertyChangeData) => void;
    onitemWidthChange?: (args: PropertyChangeData) => void;
    onscrollDirectionChange?: (args: PropertyChangeData) => void;
    scrolldirection?: NativescriptUiListviewListViewScrollDirection;
}>;

// index.d.ts
type ListViewStaggeredLayoutAttributes = Override<ListViewGridLayoutAttributes, {

}>;

// ui-listview.common.d.ts
type PullToRefreshStyleAttributes = Override<ViewBaseAttributes, {
    indicatorbackgroundcolor?: string | Color;
    indicatorcolor?: string | Color;
    onindicatorBackgroundColorChange?: (args: PropertyChangeData) => void;
    onindicatorColorChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type RadListViewAttributes = Override<ViewAttributes, {
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
    loadondemanditemtemplate?: string;
    loadondemandmode?: ListViewLoadOnDemandMode;
    multipleselection?: string | boolean;
    nativescriptviewadded?: (parent: View, child: View) => void;
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
    pulltorefresh?: string | boolean;
    pulltorefreshstyle?: string | PullToRefreshStyle;
    reordermode?: ListViewReorderMode;
    scrollposition?: ListViewScrollPosition;
    selectionbehavior?: ListViewSelectionBehavior;
    sortingfunction?: string | ((item: any, otherItem: any) => number);
    swipeactions?: string | boolean;
}>;

// index.d.ts
type ReorderHandleAttributes = Override<StackLayoutAttributes, {

}>;


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
