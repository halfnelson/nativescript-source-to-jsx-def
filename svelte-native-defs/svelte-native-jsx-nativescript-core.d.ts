export {} //Ensure this is a module
type ActionBar = import("@nativescript/core/ui/action-bar/index").ActionBar;
type ActionItems = import("@nativescript/core/ui/action-bar/index").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar/index").AndroidActionBarSettings;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar/index").AndroidActionItemSettings;
type AndroidFrame = import("@nativescript/core/ui/frame/index").AndroidFrame;
type BackstackEntry = import("@nativescript/core/ui/frame/frame-interfaces").BackstackEntry;
type Color = import("@nativescript/core/color/index").Color;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type EventData = import("@nativescript/core/data/observable/index").EventData;
type FormattedString = import("@nativescript/core/ui/text-base/formatted-string").FormattedString;
type Frame = import("@nativescript/core/ui/frame/index").Frame;
type FrameBackstackEntry = import("@nativescript/core/ui/frame/index").BackstackEntry;
type FrameNavigationEntry = import("@nativescript/core/ui/frame/index").NavigationEntry;
type FrameNavigationTransition = import("@nativescript/core/ui/frame/index").NavigationTransition;
type GestureEventData = import("@nativescript/core/ui/gestures/index").GestureEventData;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar/index").IOSActionItemSettings;
type Image = import("@nativescript/core/ui/image/index").Image;
type ImageSource = import("@nativescript/core/image-source/index").ImageSource;
type ItemEventData = import("@nativescript/core/ui/list-view/index").ItemEventData;
type ItemsSource = import("@nativescript/core/ui/list-picker/list-picker-common").ItemsSource;
type KeyedTemplate = import("@nativescript/core/ui/core/view/index").KeyedTemplate;
type Label = import("@nativescript/core/ui/label/index").Label;
type LayoutBase = import("@nativescript/core/ui/layouts/layout-base").LayoutBase;
type LengthDipUnit = import("@nativescript/core/ui/styling/style-properties").LengthDipUnit;
type LengthPercentUnit = import("@nativescript/core/ui/styling/style-properties").LengthPercentUnit;
type LengthPxUnit = import("@nativescript/core/ui/styling/style-properties").LengthPxUnit;
type LinearGradient = import("@nativescript/core/ui/styling/gradient").LinearGradient;
type ListViewItemsSource = import("@nativescript/core/ui/list-view/index").ItemsSource;
type LoadEventData = import("@nativescript/core/ui/web-view/index").LoadEventData;
type NavigatedData = import("@nativescript/core/ui/page/index").NavigatedData;
type NavigationButton = import("@nativescript/core/ui/action-bar/index").NavigationButton;
type NavigationEntry = import("@nativescript/core/ui/frame/frame-interfaces").NavigationEntry;
type NavigationTransition = import("@nativescript/core/ui/frame/frame-interfaces").NavigationTransition;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array/index").ObservableArray<T1>;
type Page = import("@nativescript/core/ui/page/index").Page;
type PanGestureEventData = import("@nativescript/core/ui/gestures/index").PanGestureEventData;
type PinchGestureEventData = import("@nativescript/core/ui/gestures/index").PinchGestureEventData;
type PropertyChangeData = import("@nativescript/core/data/observable/index").PropertyChangeData;
type RepeaterItemsSource = import("@nativescript/core/ui/repeater/index").ItemsSource;
type RotationGestureEventData = import("@nativescript/core/ui/gestures/index").RotationGestureEventData;
type ScrollEventData = import("@nativescript/core/ui/scroll-view/index").ScrollEventData;
type SegmentedBarItem = import("@nativescript/core/ui/segmented-bar/index").SegmentedBarItem;
type SegmentedBarSelectedIndexChangedEventData = import("@nativescript/core/ui/segmented-bar/index").SelectedIndexChangedEventData;
type SelectedIndexChangedEventData = import("@nativescript/core/ui/bottom-navigation/index").SelectedIndexChangedEventData;
type ShownModallyData = import("@nativescript/core/ui/core/view/index").ShownModallyData;
type Span = import("@nativescript/core/ui/text-base/span").Span;
type Style = import("@nativescript/core/ui/styling/style/index").Style;
type SwipeGestureEventData = import("@nativescript/core/ui/gestures/index").SwipeGestureEventData;
type TabContentItem = import("@nativescript/core/ui/tab-navigation-base/tab-content-item/index").TabContentItem;
type TabNavigationBaseSelectedIndexChangedEventData = import("@nativescript/core/ui/tab-navigation-base/tab-navigation-base/index").SelectedIndexChangedEventData;
type TabStrip = import("@nativescript/core/ui/tab-navigation-base/tab-strip/index").TabStrip;
type TabStripItem = import("@nativescript/core/ui/tab-navigation-base/tab-strip-item/index").TabStripItem;
type TabViewItem = import("@nativescript/core/ui/tab-view/index").TabViewItem;
type TabViewSelectedIndexChangedEventData = import("@nativescript/core/ui/tab-view/index").SelectedIndexChangedEventData;
type TapGestureEventData = import("@nativescript/core/ui/gestures/index").TapGestureEventData;
type Template = import("@nativescript/core/ui/core/view/index").Template;
type TouchGestureEventData = import("@nativescript/core/ui/gestures/index").TouchGestureEventData;
type View = import("@nativescript/core/ui/core/view/index").View;
type ViewBase = import("@nativescript/core/ui/core/view-base/index").ViewBase;
type iOSFrame = import("@nativescript/core/ui/frame/index").iOSFrame;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// ui/layouts/absolute-layout/index.d.ts
type AbsoluteLayoutAttributes = Override<LayoutBaseAttributes, {

}>;

// ui/action-bar/index.d.ts
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

// ui/action-bar/index.d.ts
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

// ui/activity-indicator/index.d.ts
type ActivityIndicatorAttributes = Override<ViewAttributes, {
    android?: any;
    busy?: string | boolean;
    ios?: any;
    onBusyChange?: (args: PropertyChangeData) => void;
}>;

// ui/bottom-navigation/index.d.ts
type BottomNavigationAttributes = Override<TabNavigationBaseAttributes, {
    android?: any;
    ios?: any;
    items?: TabContentItem[];
    onSelectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    selectedindex?: number;
    tabstrip?: TabStrip;
}>;

// ui/button/index.d.ts
type ButtonAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    onTap?: (args: EventData) => void;
    textwrap?: boolean;
}>;

// ui/core/view/index.d.ts
type ContainerViewAttributes = Override<ViewAttributes, {
    iosoverflowsafearea?: boolean;
}>;

// ui/content-view/index.ts
type ContentViewAttributes = Override<CustomLayoutViewAttributes, {
    content?: View;
    layoutview?: View;
}>;

// ui/core/view/index.d.ts
type CustomLayoutViewAttributes = Override<ContainerViewAttributes, {

}>;

// ui/date-picker/index.d.ts
type DatePickerAttributes = Override<ViewAttributes, {
    android?: any;
    date?: string | Date;
    day?: string | number;
    ios?: any;
    iospreferreddatepickerstyle?: string | number;
    maxdate?: string | Date;
    mindate?: string | Date;
    month?: string | number;
    onDateChange?: (args: PropertyChangeData) => void;
    onDayChange?: (args: PropertyChangeData) => void;
    onIosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onMaxDateChange?: (args: PropertyChangeData) => void;
    onMinDateChange?: (args: PropertyChangeData) => void;
    onMonthChange?: (args: PropertyChangeData) => void;
    onYearChange?: (args: PropertyChangeData) => void;
    year?: string | number;
}>;

// ui/layouts/dock-layout/index.d.ts
type DockLayoutAttributes = Override<LayoutBaseAttributes, {
    onStretchLastChildChange?: (args: PropertyChangeData) => void;
    stretchlastchild?: string | boolean;
}>;

// ui/editable-text-base/index.d.ts
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

// ui/layouts/flexbox-layout/index.d.ts
type FlexboxLayoutAttributes = Override<LayoutBaseAttributes, {
    aligncontent?: "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
    alignitems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
    flexdirection?: "column" | "row" | "row-reverse" | "column-reverse";
    flexwrap?: "nowrap" | "wrap" | "wrap-reverse";
    justifycontent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
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

// ui/frame/index.d.ts
type FrameAttributes = Override<FrameBaseAttributes, {
    actionbarvisibility?: "always" | "never" | "auto";
    android?: AndroidFrame;
    animated?: boolean;
    backstack?: FrameBackstackEntry[];
    currententry?: FrameNavigationEntry;
    currentpage?: Page;
    ios?: iOSFrame;
    navigationbarheight?: number;
    transition?: FrameNavigationTransition;
}>;

// ui/frame/frame-common.ts
type FrameBaseAttributes = Override<CustomLayoutViewAttributes, {
    actionbarvisibility?: "always" | "never" | "auto";
    animated?: boolean;
    backstack?: BackstackEntry[];
    currententry?: NavigationEntry;
    currentpage?: Page;
    defaultpage?: string;
    navigationbarheight?: number;
    onActionBarVisibilityChange?: (args: PropertyChangeData) => void;
    onDefaultPageChange?: (args: PropertyChangeData) => void;
    transition?: NavigationTransition;
}>;

// ui/layouts/grid-layout/index.d.ts
type GridLayoutAttributes = Override<LayoutBaseAttributes, {
    columns?: string;
    rows?: string;
}>;

// ui/html-view/index.d.ts
type HtmlViewAttributes = Override<ViewAttributes, {
    android?: any;
    html?: string;
    ios?: any;
    onHtmlChange?: (args: PropertyChangeData) => void;
}>;

// ui/image/index.d.ts
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

// ui/label/index.d.ts
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

// ui/list-picker/index.d.ts
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

// ui/list-view/index.d.ts
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

// ui/action-bar/index.d.ts
type NavigationButtonAttributes = Override<ActionItemAttributes, {

}>;

// data/observable/index.ts
type ObservableAttributes = {

};

// ui/page/index.d.ts
type PageAttributes = Override<PageBaseAttributes, {
    actionbar?: ActionBar;
    actionbarhidden?: boolean;
    androidstatusbarbackground?: Color;
    backgroundspanunderstatusbar?: boolean;
    enableswipebacknavigation?: boolean;
    frame?: Frame;
    hasactionbar?: boolean;
    navigationcontext?: any;
    onNavigatedFrom?: (args: NavigatedData) => void;
    onNavigatedTo?: (args: NavigatedData) => void;
    onNavigatingFrom?: (args: NavigatedData) => void;
    onNavigatingTo?: (args: NavigatedData) => void;
    statusbarstyle?: "light" | "dark";
}>;

// ui/page/page-common.ts
type PageBaseAttributes = Override<ContentViewAttributes, {
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
    page?: Page;
    statusbarstyle?: "light" | "dark";
}>;

// ui/placeholder/index.ts
type PlaceholderAttributes = Override<ViewAttributes, {

}>;

// ui/progress/index.d.ts
type ProgressAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxvalue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/proxy-view-container/index.ts
type ProxyViewContainerAttributes = Override<LayoutBaseAttributes, {
    android?: any;
    ios?: any;
    islayoutrequested?: boolean;
    onProxyChange?: (args: PropertyChangeData) => void;
    proxy?: string;
}>;

// ui/repeater/index.ts
type RepeaterAttributes = Override<CustomLayoutViewAttributes, {
    android?: any;
    ios?: any;
    itemtemplate?: string | Template;
    itemtemplateselector?: string | ((item: any, index: number, items: any) => string);
    itemtemplates?: string | KeyedTemplate[];
    items?: string | any[] | RepeaterItemsSource;
    itemslayout?: string | LayoutBase;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemTemplatesChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onItemsLayoutChange?: (args: PropertyChangeData) => void;
}>;

// ui/scroll-view/index.d.ts
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

// ui/search-bar/index.d.ts
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

// ui/segmented-bar/index.d.ts
type SegmentedBarAttributes = Override<ViewAttributes, {
    items?: string | SegmentedBarItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SegmentedBarSelectedIndexChangedEventData) => void;
    selectedbackgroundcolor?: string | Color;
    selectedindex?: string | number;
}>;

// ui/segmented-bar/index.d.ts
type SegmentedBarItemAttributes = Override<ViewBaseAttributes, {
    title?: string;
}>;

// ui/slider/index.d.ts
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
    tappable?: boolean;
    text?: string;
    textdecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/layouts/stack-layout/index.d.ts
type StackLayoutAttributes = Override<LayoutBaseAttributes, {
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;

// ui/switch/index.d.ts
type SwitchAttributes = Override<ViewAttributes, {
    android?: any;
    checked?: string | boolean;
    ios?: any;
    offbackgroundcolor?: string | Color;
    onCheckedChange?: (args: PropertyChangeData) => void;
    onOffBackgroundColorChange?: (args: PropertyChangeData) => void;
}>;

// ui/tab-navigation-base/tab-content-item/index.d.ts
type TabContentItemAttributes = Override<ContentViewAttributes, {
    canbeloaded?: boolean;
}>;

// ui/tab-navigation-base/tab-navigation-base/index.ts
type TabNavigationBaseAttributes = Override<ViewAttributes, {
    items?: string | TabContentItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onTabStripChange?: (args: PropertyChangeData) => void;
    selectedindex?: string | number;
    tabstrip?: string | TabStrip;
}>;

// ui/tab-navigation-base/tab-strip/index.ts
type TabStripAttributes = Override<ViewAttributes, {
    highlightcolor?: string | Color;
    iosiconrenderingmode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    isiconsizefixed?: string | boolean;
    items?: string | TabStripItem[];
    onHighlightColorChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onIsIconSizeFixedChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedItemColorChange?: (args: PropertyChangeData) => void;
    onUnSelectedItemColorChange?: (args: PropertyChangeData) => void;
    selecteditemcolor?: string | Color;
    unselecteditemcolor?: string | Color;
}>;

// ui/tab-navigation-base/tab-strip-item/index.ts
type TabStripItemAttributes = Override<ViewAttributes, {
    iconclass?: string;
    iconsource?: string;
    image?: Image;
    label?: Label;
    title?: string;
}>;

// ui/tab-view/index.d.ts
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

// ui/tab-view/index.d.ts
type TabViewItemAttributes = Override<ViewBaseAttributes, {
    canbeloaded?: boolean;
    iconsource?: string;
    texttransform?: "initial" | "none" | "capitalize" | "uppercase" | "lowercase";
    title?: string;
    view?: View;
}>;

// ui/tabs/index.d.ts
type TabsAttributes = Override<TabNavigationBaseAttributes, {
    android?: any;
    animationenabled?: string | boolean;
    iostabbaritemsalignment?: "leading" | "justified" | "center" | "centerSelected";
    ios?: any;
    items?: TabContentItem[];
    offscreentablimit?: string | number;
    onAnimationEnabledChange?: (args: PropertyChangeData) => void;
    onIOsTabBarItemsAlignmentChange?: (args: PropertyChangeData) => void;
    onOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: TabNavigationBaseSelectedIndexChangedEventData) => void;
    onSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onTabsPositionChange?: (args: PropertyChangeData) => void;
    selectedindex?: number;
    swipeenabled?: string | boolean;
    tabstrip?: TabStrip;
    tabsposition?: "top" | "bottom";
}>;

// ui/text-base/index.d.ts
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
    textalignment?: "left" | "right" | "initial" | "center";
    textdecoration?: "none" | "underline" | "line-through" | "underline line-through";
    texttransform?: "initial" | "none" | "capitalize" | "uppercase" | "lowercase";
    whitespace?: "initial" | "normal" | "nowrap";
}>;

// ui/text-field/index.d.ts
type TextFieldAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    closeonreturn?: string | boolean;
    ios?: any;
    onCloseOnReturnChange?: (args: PropertyChangeData) => void;
    onSecureChange?: (args: PropertyChangeData) => void;
    secure?: string | boolean;
    securewithoutautofill?: boolean;
}>;

// ui/text-view/index.d.ts
type TextViewAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    maxlines?: number;
}>;

// ui/time-picker/index.d.ts
type TimePickerAttributes = Override<ViewAttributes, {
    android?: any;
    hour?: string | number;
    ios?: any;
    iospreferreddatepickerstyle?: string | number;
    maxhour?: string | number;
    maxminute?: string | number;
    minhour?: string | number;
    minminute?: string | number;
    minute?: string | number;
    minuteinterval?: string | number;
    onHourChange?: (args: PropertyChangeData) => void;
    onIosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onMaxHourChange?: (args: PropertyChangeData) => void;
    onMaxMinuteChange?: (args: PropertyChangeData) => void;
    onMinHourChange?: (args: PropertyChangeData) => void;
    onMinMinuteChange?: (args: PropertyChangeData) => void;
    onMinuteChange?: (args: PropertyChangeData) => void;
    onMinuteIntervalChange?: (args: PropertyChangeData) => void;
    onTimeChange?: (args: PropertyChangeData) => void;
    time?: string | Date;
}>;

// ui/core/view/index.d.ts
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
    horizontalalignment?: "left" | "right" | "stretch" | "center";
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
    onDoubleTap?: (arg: TapGestureEventData) => any;
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
    onTap?: (arg: TapGestureEventData) => any;
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
    texttransform?: "initial" | "none" | "capitalize" | "uppercase" | "lowercase";
    top?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    translatex?: string | number;
    translatey?: string | number;
    verticalalignment?: "top" | "bottom" | "stretch" | "baseline" | "middle" | "text-top" | "text-bottom" | "super" | "sub";
    visibility?: "visible" | "hidden" | "collapse";
    width?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
}>;

// ui/core/view-base/index.ts
type ViewBaseAttributes = Override<ObservableAttributes, {
    alignself?: "auto" | "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
    android?: any;
    bindingcontext?: string | any;
    class?: string;
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
    iscollapsed?: any;
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

// ui/web-view/index.d.ts
type WebViewAttributes = Override<ViewAttributes, {
    android?: any;
    cangoback?: boolean;
    cangoforward?: boolean;
    ios?: any;
    onLoadFinished?: (args: LoadEventData) => void;
    onLoadStarted?: (args: LoadEventData) => void;
    src?: string;
}>;

// ui/layouts/wrap-layout/index.d.ts
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
