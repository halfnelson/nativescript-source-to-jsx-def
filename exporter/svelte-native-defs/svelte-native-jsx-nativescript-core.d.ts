export {} //Ensure this is a module
type AccessibilityLiveRegion = import("@nativescript/core").AccessibilityLiveRegion;
type AccessibilityRole = import("@nativescript/core").AccessibilityRole;
type AccessibilityState = import("@nativescript/core").AccessibilityState;
type ActionBar = import("@nativescript/core").ActionBar;
type ActionItems = import("@nativescript/core").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar/index").AndroidActionBarSettings;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar/index").AndroidActionItemSettings;
type AndroidFrame = import("@nativescript/core/ui/frame/index").AndroidFrame;
type BackstackEntry = import("@nativescript/core").BackstackEntry;
type CSSShadow = import("@nativescript/core").CSSShadow;
type Color = import("@nativescript/core").Color;
type CoreTypes = import("@nativescript/core").CoreTypes;
type CreateViewEventData = import("@nativescript/core").CreateViewEventData;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type EventData = import("@nativescript/core").EventData;
type FormattedString = import("@nativescript/core").FormattedString;
type Frame = import("@nativescript/core").Frame;
type FrameBackstackEntry = import("@nativescript/core").BackstackEntry;
type FrameNavigationEntry = import("@nativescript/core").NavigationEntry;
type FrameNavigationTransition = import("@nativescript/core").NavigationTransition;
type GestureEventData = import("@nativescript/core").GestureEventData;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar/index").IOSActionItemSettings;
type ImageSource = import("@nativescript/core").ImageSource;
type ItemEventData = import("@nativescript/core").ItemEventData;
type ItemsSource = import("@nativescript/core").ItemsSource;
type KeyedTemplate = import("@nativescript/core").KeyedTemplate;
type LayoutBase = import("@nativescript/core").LayoutBase;
type LinearGradient = import("@nativescript/core/ui/styling/gradient").LinearGradient;
type ListViewItemsSource = import("@nativescript/core").ItemsSource;
type LoadEventData = import("@nativescript/core").LoadEventData;
type NavigatedData = import("@nativescript/core").NavigatedData;
type NavigationButton = import("@nativescript/core").NavigationButton;
type NavigationData = import("@nativescript/core").NavigationData;
type NavigationEntry = import("@nativescript/core").NavigationEntry;
type NavigationTransition = import("@nativescript/core").NavigationTransition;
type ObservableArray<T1> = import("@nativescript/core").ObservableArray<T1>;
type Page = import("@nativescript/core").Page;
type PanGestureEventData = import("@nativescript/core").PanGestureEventData;
type PinchGestureEventData = import("@nativescript/core").PinchGestureEventData;
type PropertyChangeData = import("@nativescript/core").PropertyChangeData;
type RepeaterItemsSource = import("@nativescript/core").ItemsSource;
type RotationGestureEventData = import("@nativescript/core").RotationGestureEventData;
type ScrollEventData = import("@nativescript/core").ScrollEventData;
type SegmentedBarItem = import("@nativescript/core").SegmentedBarItem;
type SelectedIndexChangedEventData = import("@nativescript/core").SelectedIndexChangedEventData;
type ShownModallyData = import("@nativescript/core").ShownModallyData;
type Span = import("@nativescript/core").Span;
type Style = import("@nativescript/core").Style;
type SwipeGestureEventData = import("@nativescript/core").SwipeGestureEventData;
type TabViewItem = import("@nativescript/core").TabViewItem;
type TabViewSelectedIndexChangedEventData = import("@nativescript/core").SelectedIndexChangedEventData;
type TapGestureEventData = import("@nativescript/core").TapGestureEventData;
type Template = import("@nativescript/core").Template;
type TouchGestureEventData = import("@nativescript/core").TouchGestureEventData;
type View = import("@nativescript/core").View;
type ViewBase = import("@nativescript/core").ViewBase;
type WebViewInterfacesLoadEventData = import("@nativescript/core").LoadEventData;
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
    androidcontentinset?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    androidcontentinsetleft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    androidcontentinsetright?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    effectivecontentinsetleft?: number;
    effectivecontentinsetright?: number;
    flat?: string | boolean;
    ios?: any;
    iosiconrenderingmode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationbutton?: NavigationButton;
    onflatChange?: (args: PropertyChangeData) => void;
    oniosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    ontitleChange?: (args: PropertyChangeData) => void;
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
    oniconChange?: (args: PropertyChangeData) => void;
    ontap?: (args: EventData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    onvisibilityChange?: (args: PropertyChangeData) => void;
    text?: string;
    visibility?: string;
}>;

// ui/activity-indicator/index.d.ts
type ActivityIndicatorAttributes = Override<ViewAttributes, {
    android?: any;
    busy?: string | boolean;
    ios?: any;
    onbusyChange?: (args: PropertyChangeData) => void;
}>;

// ui/button/index.d.ts
type ButtonAttributes = Override<TextBaseAttributes, {
    accessibilityrole?: AccessibilityRole;
    accessible?: boolean;
    android?: any;
    ios?: any;
    ontap?: (args: EventData) => void;
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
    ondateChange?: (args: PropertyChangeData) => void;
    ondayChange?: (args: PropertyChangeData) => void;
    oniosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onmaxDateChange?: (args: PropertyChangeData) => void;
    onminDateChange?: (args: PropertyChangeData) => void;
    onmonthChange?: (args: PropertyChangeData) => void;
    onyearChange?: (args: PropertyChangeData) => void;
    year?: string | number;
}>;

// ui/layouts/dock-layout/index.d.ts
type DockLayoutAttributes = Override<LayoutBaseAttributes, {
    onstretchLastChildChange?: (args: PropertyChangeData) => void;
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
    onautocapitalizationTypeChange?: (args: PropertyChangeData) => void;
    onautocorrectChange?: (args: PropertyChangeData) => void;
    oneditableChange?: (args: PropertyChangeData) => void;
    onhintChange?: (args: PropertyChangeData) => void;
    onkeyboardTypeChange?: (args: PropertyChangeData) => void;
    onmaxLengthChange?: (args: PropertyChangeData) => void;
    onmaxLinesChange?: (args: PropertyChangeData) => void;
    onreturnKeyTypeChange?: (args: PropertyChangeData) => void;
    onupdateTextTriggerChange?: (args: PropertyChangeData) => void;
    returnkeytype?: "done" | "next" | "go" | "search" | "send";
    updatetexttrigger?: "focusLost" | "textChanged";
}>;

// ui/layouts/flexbox-layout/index.d.ts
type FlexboxLayoutAttributes = Override<LayoutBaseAttributes, {
    aligncontent?: "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    alignitems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    flexdirection?: "column" | "row" | "row-reverse" | "column-reverse";
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
    onnavigatedTo?: (args: NavigationData) => void;
    onnavigatingTo?: (args: NavigationData) => void;
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
    onactionBarVisibilityChange?: (args: PropertyChangeData) => void;
    ondefaultPageChange?: (args: PropertyChangeData) => void;
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
    onhtmlChange?: (args: PropertyChangeData) => void;
}>;

// ui/image/index.d.ts
type ImageAttributes = Override<ViewAttributes, {
    android?: any;
    decodeheight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    decodewidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    imagesource?: string | ImageSource;
    ios?: any;
    isloading?: string | boolean;
    loadmode?: "sync" | "async";
    ondecodeHeightChange?: (args: PropertyChangeData) => void;
    ondecodeWidthChange?: (args: PropertyChangeData) => void;
    onimageSourceChange?: (args: PropertyChangeData) => void;
    onisLoadingChange?: (args: PropertyChangeData) => void;
    onloadModeChange?: (args: PropertyChangeData) => void;
    onsrcChange?: (args: PropertyChangeData) => void;
    onstretchChange?: (args: PropertyChangeData) => void;
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
    onclipToBoundsChange?: (args: PropertyChangeData) => void;
    onisPassThroughParentEnabledChange?: (args: PropertyChangeData) => void;
    padding?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingbottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingleft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingright?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingtop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
}>;

// ui/list-picker/index.d.ts
type ListPickerAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    isitemssource?: boolean;
    items?: string | any[] | ItemsSource;
    onitemsChange?: (args: PropertyChangeData) => void;
    onselectedIndexChange?: (args: PropertyChangeData) => void;
    onselectedValueChange?: (args: PropertyChangeData) => void;
    ontextFieldChange?: (args: PropertyChangeData) => void;
    onvalueFieldChange?: (args: PropertyChangeData) => void;
    selectedindex?: string | number;
    selectedvalue?: string;
    textfield?: string;
    valuefield?: string;
}>;

// ui/list-view/index.d.ts
type ListViewAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    iosestimatedrowheight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    itemidgenerator?: (item: any, index: number, items: any) => number;
    itemtemplate?: string | Template;
    itemtemplateselector?: string | ((item: any, index: number, items: any) => string);
    itemtemplates?: string | KeyedTemplate[];
    items?: string | any[] | ListViewItemsSource;
    oniosEstimatedRowHeightChange?: (args: PropertyChangeData) => void;
    onitemLoading?: (args: ItemEventData) => void;
    onitemTap?: (args: ItemEventData) => void;
    onitemTemplateChange?: (args: PropertyChangeData) => void;
    onitemTemplatesChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onloadMoreItems?: (args: EventData) => void;
    onrowHeightChange?: (args: PropertyChangeData) => void;
    rowheight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
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
    accessibilityannouncepageenabled?: boolean;
    actionbar?: ActionBar;
    actionbarhidden?: boolean;
    androidstatusbarbackground?: Color;
    backgroundspanunderstatusbar?: boolean;
    enableswipebacknavigation?: boolean;
    frame?: Frame;
    hasactionbar?: boolean;
    navigationcontext?: any;
    onaccessibilityperformescape?: () => boolean;
    onnavigatedFrom?: (args: NavigatedData) => void;
    onnavigatedTo?: (args: NavigatedData) => void;
    onnavigatingFrom?: (args: NavigatedData) => void;
    onnavigatingTo?: (args: NavigatedData) => void;
    statusbarstyle?: "light" | "dark";
}>;

// ui/page/page-common.ts
type PageBaseAttributes = Override<ContentViewAttributes, {
    accessibilityannouncepageenabled?: boolean;
    actionbar?: ActionBar;
    actionbarhidden?: string | boolean;
    androidstatusbarbackground?: string | Color;
    backgroundspanunderstatusbar?: string | boolean;
    enableswipebacknavigation?: string | boolean;
    frame?: Frame;
    hasactionbar?: boolean;
    navigationcontext?: any;
    onactionBarHiddenChange?: (args: PropertyChangeData) => void;
    onbackgroundSpanUnderStatusBarChange?: (args: PropertyChangeData) => void;
    onenableSwipeBackNavigationChange?: (args: PropertyChangeData) => void;
    onnavigatedFrom?: (args: NavigatedData) => void;
    onnavigatedTo?: (args: NavigatedData) => void;
    onnavigatingFrom?: (args: NavigatedData) => void;
    onnavigatingTo?: (args: NavigatedData) => void;
    onshowingModally?: (args: ShownModallyData) => void;
    onshownModally?: (args: ShownModallyData) => void;
    page?: Page;
    statusbarstyle?: "light" | "dark";
}>;

// ui/placeholder/index.ts
type PlaceholderAttributes = Override<ViewAttributes, {
    oncreatingView?: (args: CreateViewEventData) => void;
}>;

// ui/progress/index.d.ts
type ProgressAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxvalue?: string | number;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/proxy-view-container/index.ts
type ProxyViewContainerAttributes = Override<LayoutBaseAttributes, {
    android?: any;
    ios?: any;
    islayoutrequested?: boolean;
    onproxyChange?: (args: PropertyChangeData) => void;
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
    onitemTemplateChange?: (args: PropertyChangeData) => void;
    onitemTemplatesChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onitemsLayoutChange?: (args: PropertyChangeData) => void;
}>;

// ui/layouts/root-layout/index.d.ts
type RootLayoutAttributes = Override<GridLayoutAttributes, {

}>;

// ui/scroll-view/index.d.ts
type ScrollViewAttributes = Override<ContentViewAttributes, {
    horizontaloffset?: number;
    isscrollenabled?: string | boolean;
    onisScrollEnabledChange?: (args: PropertyChangeData) => void;
    onorientationChange?: (args: PropertyChangeData) => void;
    onscroll?: (args: ScrollEventData) => void;
    onscrollBarIndicatorVisibleChange?: (args: PropertyChangeData) => void;
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
    onclose?: (args: EventData) => void;
    onhintChange?: (args: PropertyChangeData) => void;
    onsubmit?: (args: EventData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    ontextFieldBackgroundColorChange?: (args: PropertyChangeData) => void;
    ontextFieldHintColorChange?: (args: PropertyChangeData) => void;
    text?: string;
    textfieldbackgroundcolor?: string | Color;
    textfieldhintcolor?: string | Color;
}>;

// ui/segmented-bar/index.d.ts
type SegmentedBarAttributes = Override<ViewAttributes, {
    items?: string | SegmentedBarItem[];
    onitemsChange?: (args: PropertyChangeData) => void;
    onselectedIndexChange?: (args: PropertyChangeData) => void;
    onselectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    selectedbackgroundcolor?: string | Color;
    selectedindex?: string | number;
}>;

// ui/segmented-bar/index.d.ts
type SegmentedBarItemAttributes = Override<ViewBaseAttributes, {
    title?: string;
}>;

// ui/slider/index.d.ts
type SliderAttributes = Override<ViewAttributes, {
    accessibilityrole?: AccessibilityRole;
    accessibilitystep?: string | number;
    accessible?: boolean;
    android?: any;
    ios?: any;
    maxvalue?: string | number;
    minvalue?: string | number;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onminValueChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
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
    onorientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;

// ui/switch/index.d.ts
type SwitchAttributes = Override<ViewAttributes, {
    android?: any;
    checked?: string | boolean;
    ios?: any;
    offbackgroundcolor?: string | Color;
    oncheckedChange?: (args: PropertyChangeData) => void;
    onoffBackgroundColorChange?: (args: PropertyChangeData) => void;
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
    onandroidOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onandroidSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onandroidTabsPositionChange?: (args: PropertyChangeData) => void;
    oniosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onselectedIndexChange?: (args: PropertyChangeData) => void;
    onselectedIndexChanged?: (args: TabViewSelectedIndexChangedEventData) => void;
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
    texttransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title?: string;
    view?: View;
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
    onformattedTextChange?: (args: PropertyChangeData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    padding?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingbottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingleft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingright?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingtop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    text?: string;
    textalignment?: "left" | "right" | "center" | "initial";
    textdecoration?: "none" | "underline" | "line-through" | "underline line-through";
    textshadow?: string | CSSShadow;
    texttransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whitespace?: "initial" | "normal" | "nowrap";
}>;

// ui/text-field/index.d.ts
type TextFieldAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    closeonreturn?: string | boolean;
    ios?: any;
    oncloseOnReturnChange?: (args: PropertyChangeData) => void;
    onsecureChange?: (args: PropertyChangeData) => void;
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
    onhourChange?: (args: PropertyChangeData) => void;
    oniosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onmaxHourChange?: (args: PropertyChangeData) => void;
    onmaxMinuteChange?: (args: PropertyChangeData) => void;
    onminHourChange?: (args: PropertyChangeData) => void;
    onminMinuteChange?: (args: PropertyChangeData) => void;
    onminuteChange?: (args: PropertyChangeData) => void;
    onminuteIntervalChange?: (args: PropertyChangeData) => void;
    ontimeChange?: (args: PropertyChangeData) => void;
    time?: string | Date;
}>;

// ui/core/view/index.d.ts
type ViewAttributes = Override<ViewBaseAttributes, {
    accessibilityhidden?: string | boolean;
    accessibilityhint?: string;
    accessibilityidentifier?: string;
    accessibilityignoresinvertcolors?: string | boolean;
    accessibilitylabel?: string;
    accessibilitylanguage?: string;
    accessibilityliveregion?: AccessibilityLiveRegion;
    accessibilitymediasession?: string | boolean;
    accessibilityrole?: AccessibilityRole;
    accessibilitystate?: AccessibilityState;
    accessibilityvalue?: string;
    accessible?: string | boolean;
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
    borderbottomleftradius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderbottomrightradius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderbottomwidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    bordercolor?: string | Color;
    borderleftcolor?: string | Color;
    borderleftwidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderradius?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderrightcolor?: string | Color;
    borderrightwidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    bordertopcolor?: string | Color;
    bordertopleftradius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    bordertoprightradius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    bordertopwidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderwidth?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    boxshadow?: string | CSSShadow;
    color?: string | Color;
    column?: string | number;
    columnspan?: string | number;
    css?: string;
    cssclasses?: Set<string>;
    csspseudoclasses?: Set<string>;
    csstype?: string;
    dock?: "left" | "top" | "right" | "bottom";
    height?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    horizontalalignment?: "left" | "right" | "stretch" | "center";
    ios?: any;
    iosignoresafearea?: string | boolean;
    iosoverflowsafearea?: string | boolean;
    iosoverflowsafeareaenabled?: string | boolean;
    isenabled?: string | boolean;
    islayoutrequired?: boolean;
    islayoutvalid?: boolean;
    isuserinteractionenabled?: string | boolean;
    left?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    margin?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginbottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginleft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginright?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    margintop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    minheight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    minwidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    modal?: View;
    onaccessibilityHintChange?: (args: PropertyChangeData) => void;
    onaccessibilityIdentifierChange?: (args: PropertyChangeData) => void;
    onaccessibilityIgnoresInvertColorsChange?: (args: PropertyChangeData) => void;
    onaccessibilityLabelChange?: (args: PropertyChangeData) => void;
    onaccessibilityValueChange?: (args: PropertyChangeData) => void;
    onandroidBackPressed?: (args: EventData) => void;
    oncolumnChange?: (args: PropertyChangeData) => void;
    oncolumnSpanChange?: (args: PropertyChangeData) => void;
    ondockChange?: (args: PropertyChangeData) => void;
    ondoubleTap?: (arg: TapGestureEventData) => any;
    oniosIgnoreSafeAreaChange?: (args: PropertyChangeData) => void;
    oniosOverflowSafeAreaChange?: (args: PropertyChangeData) => void;
    oniosOverflowSafeAreaEnabledChange?: (args: PropertyChangeData) => void;
    onisEnabledChange?: (args: PropertyChangeData) => void;
    onisUserInteractionEnabledChange?: (args: PropertyChangeData) => void;
    onleftChange?: (args: PropertyChangeData) => void;
    onloaded?: (args: EventData) => void;
    onlongPress?: (arg: GestureEventData) => any;
    onoriginXChange?: (args: PropertyChangeData) => void;
    onoriginYChange?: (args: PropertyChangeData) => void;
    onpan?: (arg: PanGestureEventData) => any;
    onpinch?: (arg: PinchGestureEventData) => any;
    onrotation?: (arg: RotationGestureEventData) => any;
    onrowChange?: (args: PropertyChangeData) => void;
    onrowSpanChange?: (args: PropertyChangeData) => void;
    onshowingModally?: (args: ShownModallyData) => void;
    onshownModally?: (args: ShownModallyData) => void;
    onswipe?: (arg: SwipeGestureEventData) => any;
    ontap?: (arg: TapGestureEventData) => any;
    ontopChange?: (args: PropertyChangeData) => void;
    ontouch?: (arg: TouchGestureEventData) => any;
    onunloaded?: (args: EventData) => void;
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
    top?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    translatex?: string | number;
    translatey?: string | number;
    verticalalignment?: "top" | "bottom" | "stretch" | "middle";
    visibility?: "hidden" | "visible" | "collapse" | "collapsed";
    width?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
}>;

// ui/core/view-base/index.ts
type ViewBaseAttributes = Override<ObservableAttributes, {
    alignself?: "auto" | "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
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
    hidden?: string | boolean;
    id?: string;
    ios?: any;
    iscollapsed?: any;
    isloaded?: boolean;
    left?: number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    nativeview?: any;
    onbindingContextChange?: (args: PropertyChangeData) => void;
    onclassNameChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onidChange?: (args: PropertyChangeData) => void;
    order?: number;
    page?: Page;
    parent?: ViewBase;
    parentnode?: ViewBase;
    recyclenativeview?: "always" | "never" | "auto";
    reusable?: boolean;
    row?: number;
    rowspan?: number;
    style?: string | Style;
    top?: number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    typename?: string;
    viewcontroller?: any;
}>;

// ui/web-view/index.d.ts
type WebViewAttributes = Override<ViewAttributes, {
    android?: any;
    cangoback?: boolean;
    cangoforward?: boolean;
    ios?: any;
    onloadFinished?: (args: LoadEventData) => void;
    onloadStarted?: (args: WebViewInterfacesLoadEventData) => void;
    src?: string;
}>;

// ui/layouts/wrap-layout/index.d.ts
type WrapLayoutAttributes = Override<LayoutBaseAttributes, {
    effectiveitemheight?: number;
    effectiveitemwidth?: number;
    itemheight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    itemwidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    onitemHeightChange?: (args: PropertyChangeData) => void;
    onitemWidthChange?: (args: PropertyChangeData) => void;
    onorientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;


interface IntrinsicElements {
        absoluteLayout: AbsoluteLayoutAttributes;
        actionBar: ActionBarAttributes;
        actionItem: ActionItemAttributes;
        activityIndicator: ActivityIndicatorAttributes;
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
        rootLayout: RootLayoutAttributes;
        scrollView: ScrollViewAttributes;
        searchBar: SearchBarAttributes;
        segmentedBar: SegmentedBarAttributes;
        segmentedBarItem: SegmentedBarItemAttributes;
        slider: SliderAttributes;
        span: SpanAttributes;
        stackLayout: StackLayoutAttributes;
        switch: SwitchAttributes;
        tabView: TabViewAttributes;
        tabViewItem: TabViewItemAttributes;
        textField: TextFieldAttributes;
        textView: TextViewAttributes;
        timePicker: TimePickerAttributes;
        view: ViewAttributes;
        webView: WebViewAttributes;
        wrapLayout: WrapLayoutAttributes; 
}


}
}
