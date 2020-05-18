export {} //Ensure this is a module
type ActionBar = import("@nativescript/core/ui/action-bar/action-bar").ActionBar;
type ActionItems = import("@nativescript/core/ui/action-bar/action-bar").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar/action-bar").AndroidActionBarSettings;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar/action-bar").AndroidActionItemSettings;
type AndroidFrame = import("@nativescript/core/ui/frame/frame").AndroidFrame;
type BackstackEntry = import("@nativescript/core/ui/frame/frame").BackstackEntry;
type BottomNavigationSelectedIndexChangedEventData = import("@nativescript/core/ui/bottom-navigation/bottom-navigation").SelectedIndexChangedEventData;
type Color = import("@nativescript/core/color/color").Color;
type CreateViewEventData = import("@nativescript/core/ui/placeholder/placeholder").CreateViewEventData;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type DoubleTapGestureEventData = import("@nativescript/core/ui/gestures/gestures").DoubleTapGestureEventData;
type EventData = import("@nativescript/core/data/observable/observable").EventData;
type FormattedString = import("@nativescript/core/ui/text-base/formatted-string").FormattedString;
type Frame = import("@nativescript/core/ui/frame/frame").Frame;
type GestureEventData = import("@nativescript/core/ui/gestures/gestures").GestureEventData;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar/action-bar").IOSActionItemSettings;
type Image = import("@nativescript/core/ui/image/image").Image;
type ImageSource = import("@nativescript/core/image-source/image-source").ImageSource;
type ItemEventData = import("@nativescript/core/ui/list-view/list-view").ItemEventData;
type ItemsSource = import("@nativescript/core/ui/list-picker/list-picker").ItemsSource;
type KeyedTemplate = import("@nativescript/core/ui/core/view/view").KeyedTemplate;
type Label = import("@nativescript/core/ui/label/label").Label;
type LayoutBase = import("@nativescript/core/ui/layouts/layout-base").LayoutBase;
type LengthDipUnit = import("@nativescript/core/ui/styling/style-properties").LengthDipUnit;
type LengthPercentUnit = import("@nativescript/core/ui/styling/style-properties").LengthPercentUnit;
type LengthPxUnit = import("@nativescript/core/ui/styling/style-properties").LengthPxUnit;
type LinearGradient = import("@nativescript/core/ui/styling/gradient").LinearGradient;
type ListViewItemsSource = import("@nativescript/core/ui/list-view/list-view").ItemsSource;
type LoadEventData = import("@nativescript/core/ui/web-view/web-view").LoadEventData;
type NavigatedData = import("@nativescript/core/ui/page/page").NavigatedData;
type NavigationButton = import("@nativescript/core/ui/action-bar/action-bar").NavigationButton;
type NavigationEntry = import("@nativescript/core/ui/frame/frame").NavigationEntry;
type NavigationTransition = import("@nativescript/core/ui/frame/frame").NavigationTransition;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array/observable-array").ObservableArray<T1>;
type Page = import("@nativescript/core/ui/page/page").Page;
type PanGestureEventData = import("@nativescript/core/ui/gestures/gestures").PanGestureEventData;
type PinchGestureEventData = import("@nativescript/core/ui/gestures/gestures").PinchGestureEventData;
type PropertyChangeData = import("@nativescript/core/data/observable/observable").PropertyChangeData;
type RepeaterItemsSource = import("@nativescript/core/ui/repeater/repeater").ItemsSource;
type RotationGestureEventData = import("@nativescript/core/ui/gestures/gestures").RotationGestureEventData;
type ScrollEventData = import("@nativescript/core/ui/scroll-view/scroll-view").ScrollEventData;
type SegmentedBarItem = import("@nativescript/core/ui/segmented-bar/segmented-bar").SegmentedBarItem;
type SegmentedBarSelectedIndexChangedEventData = import("@nativescript/core/ui/segmented-bar/segmented-bar").SelectedIndexChangedEventData;
type SelectedIndexChangedEventData = import("@nativescript/core/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base").SelectedIndexChangedEventData;
type ShownModallyData = import("@nativescript/core/ui/core/view/view").ShownModallyData;
type Span = import("@nativescript/core/ui/text-base/span").Span;
type Style = import("@nativescript/core/ui/styling/style/style").Style;
type SwipeGestureEventData = import("@nativescript/core/ui/gestures/gestures").SwipeGestureEventData;
type TabContentItem = import("@nativescript/core/ui/tab-navigation-base/tab-content-item/tab-content-item").TabContentItem;
type TabStrip = import("@nativescript/core/ui/tab-navigation-base/tab-strip/tab-strip").TabStrip;
type TabStripItem = import("@nativescript/core/ui/tab-navigation-base/tab-strip-item/tab-strip-item").TabStripItem;
type TabStripItemEventData = import("@nativescript/core/ui/tab-navigation-base/tab-strip/tab-strip").TabStripItemEventData;
type TabViewItem = import("@nativescript/core/ui/tab-view/tab-view").TabViewItem;
type TabViewSelectedIndexChangedEventData = import("@nativescript/core/ui/tab-view/tab-view").SelectedIndexChangedEventData;
type Template = import("@nativescript/core/ui/core/view/view").Template;
type TouchGestureEventData = import("@nativescript/core/ui/gestures/gestures").TouchGestureEventData;
type View = import("@nativescript/core/ui/core/view/view").View;
type ViewBase = import("@nativescript/core/ui/core/view-base/view-base").ViewBase;
type iOSFrame = import("@nativescript/core/ui/frame/frame").iOSFrame;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// ui/layouts/absolute-layout/absolute-layout.d.ts
type AbsoluteLayoutAttributes = Override<LayoutBaseAttributes, {

}>;

// ui/action-bar/action-bar.d.ts
type ActionBarAttributes = Override<ViewAttributes, {
    actionitems?: ActionItems;
    android?: AndroidActionBarSettings;
    androidcontentinset?: string | number | LengthDipUnit | LengthPxUnit;
    androidcontentinsetleft?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    androidcontentinsetright?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    effectivecontentinsetleft?: number;
    effectivecontentinsetright?: number;
    flat?: string | boolean;
    ios?: any;
    iosiconrenderingmode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationbutton?: NavigationButton;
    onFlatChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onTitleChange?: (args: PropertyChangeData) => void;
    title?: string;
    titleview?: View;
}>;

// ui/action-bar/action-bar.d.ts
type ActionItemAttributes = Override<ViewBaseAttributes, {
    actionbar?: ActionBar;
    actionview?: View;
    android?: AndroidActionItemSettings;
    icon?: string;
    ios?: IOSActionItemSettings;
    onIconChange?: (args: PropertyChangeData) => void;
    onTap?: (args: EventData) => void;
    onTextChange?: (args: PropertyChangeData) => void;
    onVisibilityChange?: (args: PropertyChangeData) => void;
    text?: string;
    visibility?: string;
}>;

// ui/activity-indicator/activity-indicator.d.ts
type ActivityIndicatorAttributes = Override<ViewAttributes, {
    android?: any;
    busy?: string | boolean;
    ios?: any;
    onBusyChange?: (args: PropertyChangeData) => void;
}>;

// ui/border/border.d.ts
type BorderAttributes = Override<ContentViewAttributes, {
    cornerradius?: number;
}>;

// ui/bottom-navigation/bottom-navigation.d.ts
type BottomNavigationAttributes = Override<TabNavigationBaseAttributes, {
    android?: any;
    ios?: any;
    items?: TabContentItem[];
    onSelectedIndexChanged?: (args: BottomNavigationSelectedIndexChangedEventData) => void;
    selectedindex?: number;
    tabstrip?: TabStrip;
}>;

// ui/button/button.d.ts
type ButtonAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    onTap?: (args: EventData) => void;
    textwrap?: boolean;
}>;

// ui/core/view/view.d.ts
type ContainerViewAttributes = Override<ViewAttributes, {
    iosoverflowsafearea?: boolean;
}>;

// ui/content-view/content-view.d.ts
type ContentViewAttributes = Override<ViewAttributes, {
    content?: View;
    layoutview?: View;
}>;

// ui/core/view/view.d.ts
type CustomLayoutViewAttributes = Override<ContainerViewAttributes, {

}>;

// ui/date-picker/date-picker.d.ts
type DatePickerAttributes = Override<ViewAttributes, {
    android?: any;
    date?: string | Date;
    day?: string | number;
    ios?: any;
    maxdate?: string | Date;
    mindate?: string | Date;
    month?: string | number;
    onDateChange?: (args: PropertyChangeData) => void;
    onDayChange?: (args: PropertyChangeData) => void;
    onMaxDateChange?: (args: PropertyChangeData) => void;
    onMinDateChange?: (args: PropertyChangeData) => void;
    onMonthChange?: (args: PropertyChangeData) => void;
    onYearChange?: (args: PropertyChangeData) => void;
    year?: string | number;
}>;

// ui/layouts/dock-layout/dock-layout.d.ts
type DockLayoutAttributes = Override<LayoutBaseAttributes, {
    onStretchLastChildChange?: (args: PropertyChangeData) => void;
    stretchlastchild?: string | boolean;
}>;

// ui/editable-text-base/editable-text-base.d.ts
type EditableTextBaseAttributes = Override<TextBaseAttributes, {
    autocapitalizationtype?: "none" | "words" | "sentences" | "allcharacters";
    autocorrect?: string | boolean;
    editable?: string | boolean;
    hint?: string;
    keyboardtype?: "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxlength?: string | number;
    maxlines?: string | number;
    onAutocapitalizationTypeChange?: (args: PropertyChangeData) => void;
    onAutocorrectChange?: (args: PropertyChangeData) => void;
    onEditableChange?: (args: PropertyChangeData) => void;
    onHintChange?: (args: PropertyChangeData) => void;
    onKeyboardTypeChange?: (args: PropertyChangeData) => void;
    onMaxLengthChange?: (args: PropertyChangeData) => void;
    onMaxLinesChange?: (args: PropertyChangeData) => void;
    onReturnKeyTypeChange?: (args: PropertyChangeData) => void;
    onUpdateTextTriggerChange?: (args: PropertyChangeData) => void;
    returnkeytype?: "done" | "next" | "go" | "search" | "send";
    updatetexttrigger?: "focusLost" | "textChanged";
}>;

// ui/layouts/flexbox-layout/flexbox-layout.d.ts
type FlexboxLayoutAttributes = Override<LayoutBaseAttributes, {
    aligncontent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
    alignitems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexdirection?: "row" | "column" | "row-reverse" | "column-reverse";
    flexwrap?: "nowrap" | "wrap" | "wrap-reverse";
    justifycontent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
}>;

// ui/text-base/formatted-string.ts
type FormattedStringAttributes = Override<ViewBaseAttributes, {
    backgroundcolor?: string | Color;
    color?: string | Color;
    fontfamily?: string;
    fontsize?: string | number;
    fontstyle?: "normal" | "italic";
    fontweight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    spans?: ObservableArray<Span>;
    textdecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/frame/frame.d.ts
type FrameAttributes = Override<ViewAttributes, {
    actionbarvisibility?: "always" | "never" | "auto";
    android?: AndroidFrame;
    animated?: boolean;
    backstack?: BackstackEntry[];
    currententry?: NavigationEntry;
    currentpage?: Page;
    defaultpage?: string;
    ios?: iOSFrame;
    navigationbarheight?: number;
    onActionBarVisibilityChange?: (args: PropertyChangeData) => void;
    onDefaultPageChange?: (args: PropertyChangeData) => void;
    transition?: NavigationTransition;
}>;

// ui/layouts/grid-layout/grid-layout.d.ts
type GridLayoutAttributes = Override<LayoutBaseAttributes, {
    columns?: string;
    rows?: string;
}>;

// ui/html-view/html-view.d.ts
type HtmlViewAttributes = Override<ViewAttributes, {
    android?: any;
    html?: string;
    ios?: any;
    onHtmlChange?: (args: PropertyChangeData) => void;
}>;

// ui/image/image.d.ts
type ImageAttributes = Override<ViewAttributes, {
    android?: any;
    decodeheight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    decodewidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    imagesource?: string | ImageSource;
    ios?: any;
    isloading?: string | boolean;
    loadmode?: "sync" | "async";
    onDecodeHeightChange?: (args: PropertyChangeData) => void;
    onDecodeWidthChange?: (args: PropertyChangeData) => void;
    onImageSourceChange?: (args: PropertyChangeData) => void;
    onIsLoadingChange?: (args: PropertyChangeData) => void;
    onLoadModeChange?: (args: PropertyChangeData) => void;
    onSrcChange?: (args: PropertyChangeData) => void;
    onStretchChange?: (args: PropertyChangeData) => void;
    src?: string | any;
    stretch?: "none" | "aspectFill" | "aspectFit" | "fill";
    tintcolor?: string | Color;
}>;

// ui/label/label.d.ts
type LabelAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    textwrap?: string | boolean;
}>;

// ui/layouts/layout-base.d.ts
type LayoutBaseAttributes = Override<CustomLayoutViewAttributes, {
    cliptobounds?: string | boolean;
    ispassthroughparentenabled?: string | boolean;
    onClipToBoundsChange?: (args: PropertyChangeData) => void;
    onIsPassThroughParentEnabledChange?: (args: PropertyChangeData) => void;
    padding?: string | number | LengthDipUnit | LengthPxUnit;
    paddingbottom?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingleft?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingright?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingtop?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
}>;

// ui/list-picker/list-picker.d.ts
type ListPickerAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    isitemssource?: boolean;
    items?: string | any[] | ItemsSource;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedValueChange?: (args: PropertyChangeData) => void;
    onTextFieldChange?: (args: PropertyChangeData) => void;
    onValueFieldChange?: (args: PropertyChangeData) => void;
    selectedindex?: string | number;
    selectedvalue?: string;
    textfield?: string;
    valuefield?: string;
}>;

// ui/list-view/list-view.d.ts
type ListViewAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    iosestimatedrowheight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemidgenerator?: (item: any, index: number, items: any) => number;
    itemtemplate?: string | Template;
    itemtemplateselector?: string | ((item: any, index: number, items: any) => string);
    itemtemplates?: string | KeyedTemplate[];
    items?: string | any[] | ListViewItemsSource;
    onIosEstimatedRowHeightChange?: (args: PropertyChangeData) => void;
    onItemLoading?: (args: ItemEventData) => void;
    onItemTap?: (args: ItemEventData) => void;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemTemplatesChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onLoadMoreItems?: (args: EventData) => void;
    onRowHeightChange?: (args: PropertyChangeData) => void;
    rowheight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    separatorcolor?: string | Color;
}>;

// ui/action-bar/action-bar.d.ts
type NavigationButtonAttributes = Override<ActionItemAttributes, {

}>;

// data/observable/observable.d.ts
type ObservableAttributes = {
    onPropertyChange?: (data: EventData) => void;
};

// ui/page/page.d.ts
type PageAttributes = Override<ContentViewAttributes, {
    actionbar?: ActionBar;
    actionbarhidden?: string | boolean;
    androidstatusbarbackground?: string | Color;
    backgroundspanunderstatusbar?: string | boolean;
    enableswipebacknavigation?: string | boolean;
    frame?: Frame;
    hasactionbar?: boolean;
    navigationcontext?: any;
    onActionBarHiddenChange?: (args: PropertyChangeData) => void;
    onBackgroundSpanUnderStatusBarChange?: (args: PropertyChangeData) => void;
    onEnableSwipeBackNavigationChange?: (args: PropertyChangeData) => void;
    onNavigatedFrom?: (args: NavigatedData) => void;
    onNavigatedTo?: (args: NavigatedData) => void;
    onNavigatingFrom?: (args: NavigatedData) => void;
    onNavigatingTo?: (args: NavigatedData) => void;
    page?: Page;
    statusbarstyle?: "light" | "dark";
}>;

// ui/placeholder/placeholder.d.ts
type PlaceholderAttributes = Override<ViewAttributes, {
    onCreatingView?: (args: CreateViewEventData) => void;
}>;

// ui/progress/progress.d.ts
type ProgressAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxvalue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/proxy-view-container/proxy-view-container.d.ts
type ProxyViewContainerAttributes = Override<LayoutBaseAttributes, {
    onProxyChange?: (args: PropertyChangeData) => void;
    proxy?: string;
}>;

// ui/repeater/repeater.d.ts
type RepeaterAttributes = Override<CustomLayoutViewAttributes, {
    itemtemplate?: string | Template;
    items?: string | any[] | RepeaterItemsSource;
    itemslayout?: string | LayoutBase;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onItemsLayoutChange?: (args: PropertyChangeData) => void;
}>;

// ui/scroll-view/scroll-view.d.ts
type ScrollViewAttributes = Override<ContentViewAttributes, {
    horizontaloffset?: number;
    isscrollenabled?: string | boolean;
    onIsScrollEnabledChange?: (args: PropertyChangeData) => void;
    onOrientationChange?: (args: PropertyChangeData) => void;
    onScroll?: (args: ScrollEventData) => void;
    onScrollBarIndicatorVisibleChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
    scrollbarindicatorvisible?: string | boolean;
    scrollableheight?: number;
    scrollablewidth?: number;
    verticaloffset?: number;
}>;

// ui/search-bar/search-bar.d.ts
type SearchBarAttributes = Override<ViewAttributes, {
    android?: any;
    hint?: string;
    ios?: any;
    onClose?: (args: EventData) => void;
    onHintChange?: (args: PropertyChangeData) => void;
    onSubmit?: (args: EventData) => void;
    onTextChange?: (args: PropertyChangeData) => void;
    onTextFieldBackgroundColorChange?: (args: PropertyChangeData) => void;
    onTextFieldHintColorChange?: (args: PropertyChangeData) => void;
    text?: string;
    textfieldbackgroundcolor?: string | Color;
    textfieldhintcolor?: string | Color;
}>;

// ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarAttributes = Override<ViewAttributes, {
    items?: string | SegmentedBarItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SegmentedBarSelectedIndexChangedEventData) => void;
    selectedbackgroundcolor?: string | Color;
    selectedindex?: string | number;
}>;

// ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarItemAttributes = Override<ViewBaseAttributes, {
    title?: string;
}>;

// ui/slider/slider.d.ts
type SliderAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxvalue?: string | number;
    minvalue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onMinValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/text-base/span.ts
type SpanAttributes = Override<ViewBaseAttributes, {
    backgroundcolor?: string | Color;
    color?: string | Color;
    fontfamily?: string;
    fontsize?: string | number;
    fontstyle?: "normal" | "italic";
    fontweight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    text?: string;
    textdecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/layouts/stack-layout/stack-layout.d.ts
type StackLayoutAttributes = Override<LayoutBaseAttributes, {
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;

// ui/switch/switch.d.ts
type SwitchAttributes = Override<ViewAttributes, {
    android?: any;
    checked?: string | boolean;
    ios?: any;
    offbackgroundcolor?: string | Color;
    onCheckedChange?: (args: PropertyChangeData) => void;
    onOffBackgroundColorChange?: (args: PropertyChangeData) => void;
}>;

// ui/tab-navigation-base/tab-content-item/tab-content-item.d.ts
type TabContentItemAttributes = Override<ContentViewAttributes, {
    canbeloaded?: boolean;
}>;

// ui/tab-navigation-base/tab-navigation-base/tab-navigation-base.d.ts
type TabNavigationBaseAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    items?: string | TabContentItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    onTabStripChange?: (args: PropertyChangeData) => void;
    selectedindex?: string | number;
    tabstrip?: string | TabStrip;
}>;

// ui/tab-navigation-base/tab-strip/tab-strip.d.ts
type TabStripAttributes = Override<ViewAttributes, {
    highlightcolor?: string | Color;
    iosiconrenderingmode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    isiconsizefixed?: string | boolean;
    items?: string | TabStripItem[];
    onHighlightColorChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onIsIconSizeFixedChange?: (args: PropertyChangeData) => void;
    onItemTap?: (args: TabStripItemEventData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedItemColorChange?: (args: PropertyChangeData) => void;
    onUnSelectedItemColorChange?: (args: PropertyChangeData) => void;
    selecteditemcolor?: string | Color;
    unselecteditemcolor?: string | Color;
}>;

// ui/tab-navigation-base/tab-strip-item/tab-strip-item.d.ts
type TabStripItemAttributes = Override<ViewAttributes, {
    iconclass?: string;
    iconsource?: string;
    image?: Image;
    label?: Label;
    onTap?: (args: EventData) => void;
    title?: string;
}>;

// ui/tab-view/tab-view.d.ts
type TabViewAttributes = Override<ViewAttributes, {
    android?: any;
    androidoffscreentablimit?: string | number;
    androidselectedtabhighlightcolor?: string | Color;
    androidswipeenabled?: string | boolean;
    androidtabsposition?: "top" | "bottom";
    ios?: any;
    iosiconrenderingmode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    items?: string | TabViewItem[];
    onAndroidOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onAndroidSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onAndroidTabsPositionChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: TabViewSelectedIndexChangedEventData) => void;
    selectedindex?: string | number;
    selectedtabtextcolor?: string | Color;
    tabbackgroundcolor?: string | Color;
    tabtextcolor?: string | Color;
    tabtextfontsize?: string | number;
}>;

// ui/tab-view/tab-view.d.ts
type TabViewItemAttributes = Override<ViewBaseAttributes, {
    canbeloaded?: boolean;
    iconsource?: string;
    texttransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title?: string;
    view?: View;
}>;

// ui/tabs/tabs.d.ts
type TabsAttributes = Override<TabNavigationBaseAttributes, {
    android?: any;
    iostabbaritemsalignment?: "center" | "leading" | "justified" | "centerSelected";
    ios?: any;
    items?: TabContentItem[];
    offscreentablimit?: string | number;
    onIOsTabBarItemsAlignmentChange?: (args: PropertyChangeData) => void;
    onOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    onSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onTabsPositionChange?: (args: PropertyChangeData) => void;
    selectedindex?: number;
    swipeenabled?: string | boolean;
    tabstrip?: TabStrip;
    tabsposition?: "top" | "bottom";
}>;

// ui/text-base/text-base.d.ts
type TextBaseAttributes = Override<ViewAttributes, {
    fontfamily?: string;
    fontsize?: string | number;
    fontstyle?: "normal" | "italic";
    fontweight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    formattedtext?: string | FormattedString;
    letterspacing?: string | number;
    lineheight?: string | number;
    onFormattedTextChange?: (args: PropertyChangeData) => void;
    onTextChange?: (args: PropertyChangeData) => void;
    padding?: string | number | LengthDipUnit | LengthPxUnit;
    paddingbottom?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingleft?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingright?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingtop?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    text?: string;
    textalignment?: "left" | "right" | "center" | "initial";
    textdecoration?: "none" | "underline" | "line-through" | "underline line-through";
    texttransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whitespace?: "initial" | "normal" | "nowrap";
}>;

// ui/text-field/text-field.d.ts
type TextFieldAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    onSecureChange?: (args: PropertyChangeData) => void;
    secure?: string | boolean;
}>;

// ui/text-view/text-view.d.ts
type TextViewAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    maxlines?: number;
}>;

// ui/time-picker/time-picker.d.ts
type TimePickerAttributes = Override<ViewAttributes, {
    android?: any;
    hour?: string | number;
    ios?: any;
    maxhour?: string | number;
    maxminute?: string | number;
    minhour?: string | number;
    minminute?: string | number;
    minute?: string | number;
    minuteinterval?: string | number;
    onHourChange?: (args: PropertyChangeData) => void;
    onMaxHourChange?: (args: PropertyChangeData) => void;
    onMaxMinuteChange?: (args: PropertyChangeData) => void;
    onMinHourChange?: (args: PropertyChangeData) => void;
    onMinMinuteChange?: (args: PropertyChangeData) => void;
    onMinuteChange?: (args: PropertyChangeData) => void;
    onMinuteIntervalChange?: (args: PropertyChangeData) => void;
    onTimeChange?: (args: PropertyChangeData) => void;
    time?: string | Date;
}>;

// ui/core/view/view.d.ts
type ViewAttributes = Override<ViewBaseAttributes, {
    android?: any;
    androiddynamicelevationoffset?: string | number;
    androidelevation?: string | number;
    automationtext?: string;
    background?: string;
    backgroundcolor?: string | Color;
    backgroundimage?: string | LinearGradient;
    backgroundposition?: string;
    backgroundrepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
    backgroundsize?: string;
    bindingcontext?: any;
    borderbottomcolor?: string | Color;
    borderbottomleftradius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderbottomrightradius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderbottomwidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordercolor?: string | Color;
    borderleftcolor?: string | Color;
    borderleftwidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderradius?: string | number | LengthDipUnit | LengthPxUnit;
    borderrightcolor?: string | Color;
    borderrightwidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordertopcolor?: string | Color;
    bordertopleftradius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordertoprightradius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordertopwidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderwidth?: string | number | LengthDipUnit | LengthPxUnit;
    color?: string | Color;
    column?: string | number;
    columnspan?: string | number;
    css?: string;
    cssclasses?: Set<string>;
    csspseudoclasses?: Set<string>;
    csstype?: string;
    dock?: "left" | "top" | "right" | "bottom";
    height?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    horizontalalignment?: "left" | "right" | "center" | "stretch";
    ios?: any;
    iosoverflowsafearea?: string | boolean;
    iosoverflowsafeareaenabled?: string | boolean;
    isenabled?: string | boolean;
    islayoutrequired?: boolean;
    islayoutvalid?: boolean;
    isuserinteractionenabled?: string | boolean;
    left?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    margin?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginbottom?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginleft?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginright?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    margintop?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    minheight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    minwidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    modal?: View;
    onAndroidBackPressed?: (args: EventData) => void;
    onAutomationTextChange?: (args: PropertyChangeData) => void;
    onColumnChange?: (args: PropertyChangeData) => void;
    onColumnSpanChange?: (args: PropertyChangeData) => void;
    onDockChange?: (args: PropertyChangeData) => void;
    onDoubleTap?: (arg: DoubleTapGestureEventData) => any;
    onIosOverflowSafeAreaChange?: (args: PropertyChangeData) => void;
    onIosOverflowSafeAreaEnabledChange?: (args: PropertyChangeData) => void;
    onIsEnabledChange?: (args: PropertyChangeData) => void;
    onIsUserInteractionEnabledChange?: (args: PropertyChangeData) => void;
    onLeftChange?: (args: PropertyChangeData) => void;
    onLoaded?: (args: EventData) => void;
    onLongPress?: (arg: GestureEventData) => any;
    onOriginXChange?: (args: PropertyChangeData) => void;
    onOriginYChange?: (args: PropertyChangeData) => void;
    onPan?: (arg: PanGestureEventData) => any;
    onPinch?: (arg: PinchGestureEventData) => any;
    onRotation?: (arg: RotationGestureEventData) => any;
    onRowChange?: (args: PropertyChangeData) => void;
    onRowSpanChange?: (args: PropertyChangeData) => void;
    onShowingModally?: (args: ShownModallyData) => void;
    onShownModally?: (args: ShownModallyData) => void;
    onSwipe?: (arg: SwipeGestureEventData) => any;
    onTap?: (arg: DoubleTapGestureEventData) => any;
    onTopChange?: (args: PropertyChangeData) => void;
    onTouch?: (arg: TouchGestureEventData) => any;
    onUnloaded?: (args: EventData) => void;
    opacity?: string | number;
    originx?: string | number;
    originy?: string | number;
    perspective?: string | number;
    rotate?: string | number;
    rotatex?: string | number;
    rotatey?: string | number;
    row?: string | number;
    rowspan?: string | number;
    scalex?: string | number;
    scaley?: string | number;
    texttransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    top?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    translatex?: string | number;
    translatey?: string | number;
    verticalalignment?: "top" | "bottom" | "stretch" | "middle";
    visibility?: "visible" | "hidden" | "collapse";
    width?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
}>;

// ui/core/view-base/view-base.d.ts
type ViewBaseAttributes = Override<ObservableAttributes, {
    alignself?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    android?: any;
    bindingcontext?: string | any;
    classname?: string;
    col?: number;
    colspan?: number;
    column?: number;
    columnspan?: number;
    cssclasses?: Set<string>;
    csspseudoclasses?: Set<string>;
    dock?: "left" | "top" | "right" | "bottom";
    domnode?: DOMNode;
    effectiveborderbottomwidth?: number;
    effectiveborderleftwidth?: number;
    effectiveborderrightwidth?: number;
    effectivebordertopwidth?: number;
    effectiveheight?: number;
    effectiveleft?: number;
    effectivemarginbottom?: number;
    effectivemarginleft?: number;
    effectivemarginright?: number;
    effectivemargintop?: number;
    effectiveminheight?: number;
    effectiveminwidth?: number;
    effectivepaddingbottom?: number;
    effectivepaddingleft?: number;
    effectivepaddingright?: number;
    effectivepaddingtop?: number;
    effectivetop?: number;
    effectivewidth?: number;
    flexgrow?: number;
    flexshrink?: number;
    flexwrapbefore?: boolean;
    id?: string;
    ios?: any;
    iscollapsed?: boolean;
    isloaded?: boolean;
    left?: number | "auto" | LengthDipUnit | LengthPxUnit;
    nativeview?: any;
    onBindingContextChange?: (args: PropertyChangeData) => void;
    onClassNameChange?: (args: PropertyChangeData) => void;
    onIdChange?: (args: PropertyChangeData) => void;
    order?: number;
    page?: Page;
    parent?: ViewBase;
    parentnode?: ViewBase;
    recyclenativeview?: "always" | "never" | "auto";
    row?: number;
    rowspan?: number;
    style?: string | Style;
    top?: number | "auto" | LengthDipUnit | LengthPxUnit;
    typename?: string;
    viewcontroller?: any;
}>;

// ui/web-view/web-view.d.ts
type WebViewAttributes = Override<ViewAttributes, {
    android?: any;
    cangoback?: boolean;
    cangoforward?: boolean;
    ios?: any;
    onLoadFinished?: (args: LoadEventData) => void;
    onLoadStarted?: (args: LoadEventData) => void;
    src?: string;
}>;

// ui/layouts/wrap-layout/wrap-layout.d.ts
type WrapLayoutAttributes = Override<LayoutBaseAttributes, {
    effectiveitemheight?: number;
    effectiveitemwidth?: number;
    itemheight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemwidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    onItemHeightChange?: (args: PropertyChangeData) => void;
    onItemWidthChange?: (args: PropertyChangeData) => void;
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;


interface IntrinsicElements {
        absoluteLayout: AbsoluteLayoutAttributes;
        actionBar: ActionBarAttributes;
        actionItem: ActionItemAttributes;
        activityIndicator: ActivityIndicatorAttributes;
        border: BorderAttributes;
        bottomNavigation: BottomNavigationAttributes;
        button: ButtonAttributes;
        containerView: ContainerViewAttributes;
        contentView: ContentViewAttributes;
        customLayoutView: CustomLayoutViewAttributes;
        datePicker: DatePickerAttributes;
        dockLayout: DockLayoutAttributes;
        flexboxLayout: FlexboxLayoutAttributes;
        formattedString: FormattedStringAttributes;
        frame: FrameAttributes;
        gridLayout: GridLayoutAttributes;
        htmlView: HtmlViewAttributes;
        image: ImageAttributes;
        label: LabelAttributes;
        listPicker: ListPickerAttributes;
        listView: ListViewAttributes;
        navigationButton: NavigationButtonAttributes;
        page: PageAttributes;
        placeholder: PlaceholderAttributes;
        progress: ProgressAttributes;
        proxyViewContainer: ProxyViewContainerAttributes;
        repeater: RepeaterAttributes;
        scrollView: ScrollViewAttributes;
        searchBar: SearchBarAttributes;
        segmentedBar: SegmentedBarAttributes;
        segmentedBarItem: SegmentedBarItemAttributes;
        slider: SliderAttributes;
        span: SpanAttributes;
        stackLayout: StackLayoutAttributes;
        switch: SwitchAttributes;
        tabContentItem: TabContentItemAttributes;
        tabStrip: TabStripAttributes;
        tabStripItem: TabStripItemAttributes;
        tabView: TabViewAttributes;
        tabViewItem: TabViewItemAttributes;
        tabs: TabsAttributes;
        textField: TextFieldAttributes;
        textView: TextViewAttributes;
        timePicker: TimePickerAttributes;
        view: ViewAttributes;
        webView: WebViewAttributes;
        wrapLayout: WrapLayoutAttributes; 
}


}
}
