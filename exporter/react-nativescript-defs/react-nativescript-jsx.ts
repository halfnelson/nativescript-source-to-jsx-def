import type { CoreTypes } from "@nativescript/core"
type AccessibilityLiveRegion = import("@nativescript/core").AccessibilityLiveRegion;
type AccessibilityRole = import("@nativescript/core").AccessibilityRole;
type AccessibilityState = import("@nativescript/core").AccessibilityState;
type ActionBar = import("@nativescript/core").ActionBar;
type ActionItems = import("@nativescript/core").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar").AndroidActionBarSettings;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar").AndroidActionItemSettings;
type AndroidFrame = import("@nativescript/core/ui/frame").AndroidFrame;
type BackstackEntry = import("@nativescript/core").BackstackEntry;
type CSSShadow = import("@nativescript/core/ui/styling/css-shadow").CSSShadow;
type Color = import("@nativescript/core").Color;
type CreateViewEventData = import("@nativescript/core").CreateViewEventData;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type EventData = import("@nativescript/core").EventData;
type FormattedString = import("@nativescript/core").FormattedString;
type Frame = import("@nativescript/core").Frame;
type FrameBackstackEntry = import("@nativescript/core").BackstackEntry;
type FrameNavigationEntry = import("@nativescript/core").NavigationEntry;
type FrameNavigationTransition = import("@nativescript/core").NavigationTransition;
type GestureEventData = import("@nativescript/core").GestureEventData;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar").IOSActionItemSettings;
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
type NavigationData = import("@nativescript/core/ui/frame").NavigationData;
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
type SelectedIndexChangedEventData = import("@nativescript/core/ui/segmented-bar").SelectedIndexChangedEventData;
type ShownModallyData = import("@nativescript/core").ShownModallyData;
type Span = import("@nativescript/core").Span;
type SwipeGestureEventData = import("@nativescript/core").SwipeGestureEventData;
type TabViewItem = import("@nativescript/core").TabViewItem;
type TabViewSelectedIndexChangedEventData = import("@nativescript/core/ui/tab-view").SelectedIndexChangedEventData;
type TapGestureEventData = import("@nativescript/core").TapGestureEventData;
type Template = import("@nativescript/core").Template;
type TouchGestureEventData = import("@nativescript/core").TouchGestureEventData;
type View = import("@nativescript/core").View;
type ViewBase = import("@nativescript/core").ViewBase;
type WebViewInterfacesLoadEventData = import("@nativescript/core").LoadEventData;
type iOSFrame = import("@nativescript/core/ui/frame").iOSFrame;
type Override<What, With> = Omit<What, keyof With> & With


// ui/layouts/absolute-layout/index.d.ts
export type TAbsoluteLayoutAttributes = Override<LayoutBaseAttributes, {

}>
interface AbsoluteLayoutAttributes extends TAbsoluteLayoutAttributes {}

// ui/action-bar/index.d.ts
export type TActionBarAttributes = Override<ViewAttributes, {
    actionItems?: ActionItems;
    android?: AndroidActionBarSettings;
    androidContentInset?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    androidContentInsetLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    androidContentInsetRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    effectiveContentInsetLeft?: number;
    effectiveContentInsetRight?: number;
    flat?: string | boolean;
    ios?: any;
    iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationButton?: NavigationButton;
    onFlatChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onTitleChange?: (args: PropertyChangeData) => void;
    title?: string;
    titleView?: View;
}>
interface ActionBarAttributes extends TActionBarAttributes {}

// ui/action-bar/index.d.ts
export type TActionItemAttributes = Override<ViewBaseAttributes, {
    actionBar?: ActionBar;
    actionView?: View;
    android?: AndroidActionItemSettings;
    icon?: string;
    ios?: IOSActionItemSettings;
    onIconChange?: (args: PropertyChangeData) => void;
    onTap?: (args: EventData) => void;
    onTextChange?: (args: PropertyChangeData) => void;
    onVisibilityChange?: (args: PropertyChangeData) => void;
    text?: string;
    visibility?: string;
}>
interface ActionItemAttributes extends TActionItemAttributes {}

// ui/activity-indicator/index.d.ts
export type TActivityIndicatorAttributes = Override<ViewAttributes, {
    android?: any;
    busy?: string | boolean;
    ios?: any;
    onBusyChange?: (args: PropertyChangeData) => void;
}>
interface ActivityIndicatorAttributes extends TActivityIndicatorAttributes {}

// ui/button/index.d.ts
export type TButtonAttributes = Override<TextBaseAttributes, {
    accessibilityRole?: AccessibilityRole;
    accessible?: boolean;
    android?: any;
    ios?: any;
    onTap?: (args: EventData) => void;
    textWrap?: boolean;
}>
interface ButtonAttributes extends TButtonAttributes {}

// ui/core/view/index.d.ts
export type TContainerViewAttributes = Override<ViewAttributes, {
    iosOverflowSafeArea?: boolean;
}>
interface ContainerViewAttributes extends TContainerViewAttributes {}

// ui/content-view/index.ts
export type TContentViewAttributes = Override<CustomLayoutViewAttributes, {
    content?: View;
    layoutView?: View;
}>
interface ContentViewAttributes extends TContentViewAttributes {}

// ui/core/view/index.d.ts
export type TCustomLayoutViewAttributes = Override<ContainerViewAttributes, {

}>
interface CustomLayoutViewAttributes extends TCustomLayoutViewAttributes {}

// ui/date-picker/index.d.ts
export type TDatePickerAttributes = Override<ViewAttributes, {
    android?: any;
    date?: string | Date;
    day?: string | number;
    ios?: any;
    iosPreferredDatePickerStyle?: string | number;
    maxDate?: string | Date;
    minDate?: string | Date;
    month?: string | number;
    onDateChange?: (args: PropertyChangeData) => void;
    onDayChange?: (args: PropertyChangeData) => void;
    onIosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onMaxDateChange?: (args: PropertyChangeData) => void;
    onMinDateChange?: (args: PropertyChangeData) => void;
    onMonthChange?: (args: PropertyChangeData) => void;
    onYearChange?: (args: PropertyChangeData) => void;
    year?: string | number;
}>
interface DatePickerAttributes extends TDatePickerAttributes {}

// ui/layouts/dock-layout/index.d.ts
export type TDockLayoutAttributes = Override<LayoutBaseAttributes, {
    onStretchLastChildChange?: (args: PropertyChangeData) => void;
    stretchLastChild?: string | boolean;
}>
interface DockLayoutAttributes extends TDockLayoutAttributes {}

// ui/editable-text-base/index.d.ts
export type TEditableTextBaseAttributes = Override<TextBaseAttributes, {
    autocapitalizationType?: "none" | "words" | "sentences" | "allcharacters";
    autocorrect?: string | boolean;
    autofillType?: string;
    editable?: string | boolean;
    hint?: string;
    keyboardType?: "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxLength?: string | number;
    maxLines?: string | number;
    onAutocapitalizationTypeChange?: (args: PropertyChangeData) => void;
    onAutocorrectChange?: (args: PropertyChangeData) => void;
    onAutofillTypeChange?: (args: PropertyChangeData) => void;
    onEditableChange?: (args: PropertyChangeData) => void;
    onHintChange?: (args: PropertyChangeData) => void;
    onKeyboardTypeChange?: (args: PropertyChangeData) => void;
    onMaxLengthChange?: (args: PropertyChangeData) => void;
    onMaxLinesChange?: (args: PropertyChangeData) => void;
    onReturnKeyTypeChange?: (args: PropertyChangeData) => void;
    onUpdateTextTriggerChange?: (args: PropertyChangeData) => void;
    returnKeyType?: "done" | "next" | "go" | "search" | "send";
    updateTextTrigger?: "focusLost" | "textChanged";
}>
interface EditableTextBaseAttributes extends TEditableTextBaseAttributes {}

// ui/layouts/flexbox-layout/index.d.ts
export type TFlexboxLayoutAttributes = Override<LayoutBaseAttributes, {
    alignContent?: "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
}>
interface FlexboxLayoutAttributes extends TFlexboxLayoutAttributes {}

// ui/text-base/formatted-string.ts
export type TFormattedStringAttributes = Override<ViewBaseAttributes, {
    backgroundColor?: string | Color;
    color?: string | Color;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    spans?: ObservableArray<Span>;
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>
interface FormattedStringAttributes extends TFormattedStringAttributes {}

// ui/frame/index.d.ts
export type TFrameAttributes = Override<FrameBaseAttributes, {
    actionBarVisibility?: "always" | "never" | "auto";
    android?: AndroidFrame;
    animated?: boolean;
    backStack?: FrameBackstackEntry[];
    currentEntry?: FrameNavigationEntry;
    currentPage?: Page;
    ios?: iOSFrame;
    navigationBarHeight?: number;
    onNavigatedTo?: (args: NavigationData) => void;
    onNavigatingTo?: (args: NavigationData) => void;
    transition?: FrameNavigationTransition;
}>
interface FrameAttributes extends TFrameAttributes {}

// ui/frame/frame-common.ts
export type TFrameBaseAttributes = Override<CustomLayoutViewAttributes, {
    actionBarVisibility?: "always" | "never" | "auto";
    animated?: boolean;
    backStack?: BackstackEntry[];
    currentEntry?: NavigationEntry;
    currentPage?: Page;
    defaultPage?: string;
    navigationBarHeight?: number;
    onActionBarVisibilityChange?: (args: PropertyChangeData) => void;
    onDefaultPageChange?: (args: PropertyChangeData) => void;
    transition?: NavigationTransition;
}>
interface FrameBaseAttributes extends TFrameBaseAttributes {}

// ui/layouts/grid-layout/index.d.ts
export type TGridLayoutAttributes = Override<LayoutBaseAttributes, {
    columns?: string;
    rows?: string;
}>
interface GridLayoutAttributes extends TGridLayoutAttributes {}

// ui/html-view/index.d.ts
export type THtmlViewAttributes = Override<ViewAttributes, {
    android?: any;
    html?: string;
    ios?: any;
    onHtmlChange?: (args: PropertyChangeData) => void;
}>
interface HtmlViewAttributes extends THtmlViewAttributes {}

// ui/image/index.d.ts
export type TImageAttributes = Override<ViewAttributes, {
    android?: any;
    decodeHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    decodeWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    imageSource?: string | ImageSource;
    ios?: any;
    isLoading?: string | boolean;
    loadMode?: "sync" | "async";
    onDecodeHeightChange?: (args: PropertyChangeData) => void;
    onDecodeWidthChange?: (args: PropertyChangeData) => void;
    onImageSourceChange?: (args: PropertyChangeData) => void;
    onIsLoadingChange?: (args: PropertyChangeData) => void;
    onLoadModeChange?: (args: PropertyChangeData) => void;
    onSrcChange?: (args: PropertyChangeData) => void;
    onStretchChange?: (args: PropertyChangeData) => void;
    src?: string | any;
    stretch?: "none" | "aspectFill" | "aspectFit" | "fill";
    tintColor?: string | Color;
}>
interface ImageAttributes extends TImageAttributes {}

// ui/label/index.d.ts
export type TLabelAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    textWrap?: string | boolean;
}>
interface LabelAttributes extends TLabelAttributes {}

// ui/layouts/layout-base.d.ts
export type TLayoutBaseAttributes = Override<CustomLayoutViewAttributes, {
    clipToBounds?: string | boolean;
    isPassThroughParentEnabled?: string | boolean;
    onClipToBoundsChange?: (args: PropertyChangeData) => void;
    onIsPassThroughParentEnabledChange?: (args: PropertyChangeData) => void;
    padding?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingBottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingTop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
}>
interface LayoutBaseAttributes extends TLayoutBaseAttributes {}

// ui/list-picker/index.d.ts
export type TListPickerAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    isItemsSource?: boolean;
    items?: string | any[] | ItemsSource;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedValueChange?: (args: PropertyChangeData) => void;
    onTextFieldChange?: (args: PropertyChangeData) => void;
    onValueFieldChange?: (args: PropertyChangeData) => void;
    selectedIndex?: string | number;
    selectedValue?: string;
    textField?: string;
    valueField?: string;
}>
interface ListPickerAttributes extends TListPickerAttributes {}

// ui/list-view/index.d.ts
export type TListViewAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    iosEstimatedRowHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    itemIdGenerator?: (item: any, index: number, items: any) => number;
    itemTemplate?: string | Template;
    itemTemplateSelector?: string | ((item: any, index: number, items: any) => string);
    itemTemplates?: string | KeyedTemplate[];
    items?: string | any[] | ListViewItemsSource;
    onIosEstimatedRowHeightChange?: (args: PropertyChangeData) => void;
    onItemLoading?: (args: ItemEventData) => void;
    onItemTap?: (args: ItemEventData) => void;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemTemplatesChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onLoadMoreItems?: (args: EventData) => void;
    onRowHeightChange?: (args: PropertyChangeData) => void;
    rowHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    separatorColor?: string | Color;
}>
interface ListViewAttributes extends TListViewAttributes {}

// ui/action-bar/index.d.ts
export type TNavigationButtonAttributes = Override<ActionItemAttributes, {

}>
interface NavigationButtonAttributes extends TNavigationButtonAttributes {}

// data/observable/index.ts
export type TObservableAttributes = {

}
interface ObservableAttributes extends TObservableAttributes {}

// ui/page/index.d.ts
export type TPageAttributes = Override<PageBaseAttributes, {
    accessibilityAnnouncePageEnabled?: boolean;
    actionBar?: ActionBar;
    actionBarHidden?: boolean;
    androidStatusBarBackground?: Color;
    backgroundSpanUnderStatusBar?: boolean;
    enableSwipeBackNavigation?: boolean;
    frame?: Frame;
    hasActionBar?: boolean;
    navigationContext?: any;
    onAccessibilityPerformEscape?: () => boolean;
    onNavigatedFrom?: (args: NavigatedData) => void;
    onNavigatedTo?: (args: NavigatedData) => void;
    onNavigatingFrom?: (args: NavigatedData) => void;
    onNavigatingTo?: (args: NavigatedData) => void;
    statusBarStyle?: "light" | "dark";
}>
interface PageAttributes extends TPageAttributes {}

// ui/page/page-common.ts
export type TPageBaseAttributes = Override<ContentViewAttributes, {
    accessibilityAnnouncePageEnabled?: boolean;
    actionBar?: ActionBar;
    actionBarHidden?: string | boolean;
    androidStatusBarBackground?: string | Color;
    backgroundSpanUnderStatusBar?: string | boolean;
    enableSwipeBackNavigation?: string | boolean;
    frame?: Frame;
    hasActionBar?: boolean;
    navigationContext?: any;
    onActionBarHiddenChange?: (args: PropertyChangeData) => void;
    onBackgroundSpanUnderStatusBarChange?: (args: PropertyChangeData) => void;
    onEnableSwipeBackNavigationChange?: (args: PropertyChangeData) => void;
    onNavigatedFrom?: (args: NavigatedData) => void;
    onNavigatedTo?: (args: NavigatedData) => void;
    onNavigatingFrom?: (args: NavigatedData) => void;
    onNavigatingTo?: (args: NavigatedData) => void;
    onShowingModally?: (args: ShownModallyData) => void;
    onShownModally?: (args: ShownModallyData) => void;
    page?: Page;
    statusBarStyle?: "light" | "dark";
}>
interface PageBaseAttributes extends TPageBaseAttributes {}

// ui/placeholder/index.ts
export type TPlaceholderAttributes = Override<ViewAttributes, {
    onCreatingView?: (args: CreateViewEventData) => void;
}>
interface PlaceholderAttributes extends TPlaceholderAttributes {}

// ui/progress/index.d.ts
export type TProgressAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxValue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>
interface ProgressAttributes extends TProgressAttributes {}

// ui/proxy-view-container/index.ts
export type TProxyViewContainerAttributes = Override<LayoutBaseAttributes, {
    android?: any;
    ios?: any;
    isLayoutRequested?: boolean;
    onProxyChange?: (args: PropertyChangeData) => void;
    proxy?: string;
}>
interface ProxyViewContainerAttributes extends TProxyViewContainerAttributes {}

// ui/repeater/index.ts
export type TRepeaterAttributes = Override<CustomLayoutViewAttributes, {
    android?: any;
    ios?: any;
    itemTemplate?: string | Template;
    itemTemplateSelector?: string | ((item: any, index: number, items: any) => string);
    itemTemplates?: string | KeyedTemplate[];
    items?: string | any[] | RepeaterItemsSource;
    itemsLayout?: string | LayoutBase;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemTemplatesChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onItemsLayoutChange?: (args: PropertyChangeData) => void;
}>
interface RepeaterAttributes extends TRepeaterAttributes {}

// ui/layouts/root-layout/index.d.ts
export type TRootLayoutAttributes = Override<GridLayoutAttributes, {

}>
interface RootLayoutAttributes extends TRootLayoutAttributes {}

// ui/scroll-view/index.d.ts
export type TScrollViewAttributes = Override<ContentViewAttributes, {
    horizontalOffset?: number;
    isScrollEnabled?: string | boolean;
    onIsScrollEnabledChange?: (args: PropertyChangeData) => void;
    onOrientationChange?: (args: PropertyChangeData) => void;
    onScroll?: (args: ScrollEventData) => void;
    onScrollBarIndicatorVisibleChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
    scrollBarIndicatorVisible?: string | boolean;
    scrollableHeight?: number;
    scrollableWidth?: number;
    verticalOffset?: number;
}>
interface ScrollViewAttributes extends TScrollViewAttributes {}

// ui/search-bar/index.d.ts
export type TSearchBarAttributes = Override<ViewAttributes, {
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
    textFieldBackgroundColor?: string | Color;
    textFieldHintColor?: string | Color;
}>
interface SearchBarAttributes extends TSearchBarAttributes {}

// ui/segmented-bar/index.d.ts
export type TSegmentedBarAttributes = Override<ViewAttributes, {
    items?: string | SegmentedBarItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    selectedBackgroundColor?: string | Color;
    selectedIndex?: string | number;
}>
interface SegmentedBarAttributes extends TSegmentedBarAttributes {}

// ui/segmented-bar/index.d.ts
export type TSegmentedBarItemAttributes = Override<ViewBaseAttributes, {
    title?: string;
}>
interface SegmentedBarItemAttributes extends TSegmentedBarItemAttributes {}

// ui/slider/index.d.ts
export type TSliderAttributes = Override<ViewAttributes, {
    accessibilityRole?: AccessibilityRole;
    accessibilityStep?: string | number;
    accessible?: boolean;
    android?: any;
    ios?: any;
    maxValue?: string | number;
    minValue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onMinValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>
interface SliderAttributes extends TSliderAttributes {}

// ui/text-base/span.ts
export type TSpanAttributes = Override<ViewBaseAttributes, {
    backgroundColor?: string | Color;
    color?: string | Color;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    tappable?: boolean;
    text?: string;
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>
interface SpanAttributes extends TSpanAttributes {}

// ui/layouts/stack-layout/index.d.ts
export type TStackLayoutAttributes = Override<LayoutBaseAttributes, {
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>
interface StackLayoutAttributes extends TStackLayoutAttributes {}

// ui/switch/index.d.ts
export type TSwitchAttributes = Override<ViewAttributes, {
    android?: any;
    checked?: string | boolean;
    ios?: any;
    offBackgroundColor?: string | Color;
    onCheckedChange?: (args: PropertyChangeData) => void;
    onOffBackgroundColorChange?: (args: PropertyChangeData) => void;
}>
interface SwitchAttributes extends TSwitchAttributes {}

// ui/tab-view/index.d.ts
export type TTabViewAttributes = Override<ViewAttributes, {
    android?: any;
    androidOffscreenTabLimit?: string | number;
    androidSelectedTabHighlightColor?: string | Color;
    androidSwipeEnabled?: string | boolean;
    androidTabsPosition?: "top" | "bottom";
    ios?: any;
    iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    items?: string | TabViewItem[];
    onAndroidOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onAndroidSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onAndroidTabsPositionChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: TabViewSelectedIndexChangedEventData) => void;
    selectedIndex?: string | number;
    selectedTabTextColor?: string | Color;
    tabBackgroundColor?: string | Color;
    tabTextColor?: string | Color;
    tabTextFontSize?: string | number;
}>
interface TabViewAttributes extends TTabViewAttributes {}

// ui/tab-view/index.d.ts
export type TTabViewItemAttributes = Override<ViewBaseAttributes, {
    canBeLoaded?: boolean;
    iconSource?: string;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title?: string;
    view?: View;
}>
interface TabViewItemAttributes extends TTabViewItemAttributes {}

// ui/text-base/index.d.ts
export type TTextBaseAttributes = Override<ViewAttributes, {
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    formattedText?: string | FormattedString;
    letterSpacing?: string | number;
    lineHeight?: string | number;
    onFormattedTextChange?: (args: PropertyChangeData) => void;
    onTextChange?: (args: PropertyChangeData) => void;
    padding?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingBottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingTop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    text?: string;
    textAlignment?: "left" | "right" | "center" | "initial";
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
    textShadow?: string | CSSShadow;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whiteSpace?: "initial" | "normal" | "nowrap";
}>
interface TextBaseAttributes extends TTextBaseAttributes {}

// ui/text-field/index.d.ts
export type TTextFieldAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    closeOnReturn?: string | boolean;
    ios?: any;
    onCloseOnReturnChange?: (args: PropertyChangeData) => void;
    onSecureChange?: (args: PropertyChangeData) => void;
    secure?: string | boolean;
    secureWithoutAutofill?: boolean;
}>
interface TextFieldAttributes extends TTextFieldAttributes {}

// ui/text-view/index.d.ts
export type TTextViewAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    maxLines?: number;
}>
interface TextViewAttributes extends TTextViewAttributes {}

// ui/time-picker/index.d.ts
export type TTimePickerAttributes = Override<ViewAttributes, {
    android?: any;
    hour?: string | number;
    ios?: any;
    iosPreferredDatePickerStyle?: string | number;
    maxHour?: string | number;
    maxMinute?: string | number;
    minHour?: string | number;
    minMinute?: string | number;
    minute?: string | number;
    minuteInterval?: string | number;
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
}>
interface TimePickerAttributes extends TTimePickerAttributes {}

// ui/core/view/index.d.ts
export type TViewAttributes = Override<ViewBaseAttributes, {
    accessibilityHidden?: string | boolean;
    accessibilityHint?: string;
    accessibilityIdentifier?: string;
    accessibilityIgnoresInvertColors?: string | boolean;
    accessibilityLabel?: string;
    accessibilityLanguage?: string;
    accessibilityLiveRegion?: AccessibilityLiveRegion;
    accessibilityMediaSession?: string | boolean;
    accessibilityRole?: AccessibilityRole;
    accessibilityState?: AccessibilityState;
    accessibilityValue?: string;
    accessible?: string | boolean;
    android?: any;
    androidDynamicElevationOffset?: string | number;
    androidElevation?: string | number;
    automationText?: string;
    background?: string;
    backgroundColor?: string | Color;
    backgroundImage?: string | LinearGradient;
    backgroundPosition?: string;
    backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
    backgroundSize?: string;
    bindingContext?: any;
    borderBottomColor?: string | Color;
    borderBottomLeftRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderBottomRightRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderBottomWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderColor?: string | Color;
    borderLeftColor?: string | Color;
    borderLeftWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderRadius?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderRightColor?: string | Color;
    borderRightWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderTopColor?: string | Color;
    borderTopLeftRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderTopRightRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderTopWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderWidth?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    boxShadow?: string | CSSShadow;
    color?: string | Color;
    column?: string | number;
    columnSpan?: string | number;
    css?: string;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    cssType?: string;
    dock?: "left" | "top" | "right" | "bottom";
    height?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    horizontalAlignment?: "left" | "right" | "stretch" | "center";
    ios?: any;
    iosIgnoreSafeArea?: string | boolean;
    iosOverflowSafeArea?: string | boolean;
    iosOverflowSafeAreaEnabled?: string | boolean;
    isEnabled?: string | boolean;
    isLayoutRequired?: boolean;
    isLayoutValid?: boolean;
    isUserInteractionEnabled?: string | boolean;
    left?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    margin?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginBottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginTop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    minHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    minWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    modal?: View;
    onAccessibilityHintChange?: (args: PropertyChangeData) => void;
    onAccessibilityIdentifierChange?: (args: PropertyChangeData) => void;
    onAccessibilityIgnoresInvertColorsChange?: (args: PropertyChangeData) => void;
    onAccessibilityLabelChange?: (args: PropertyChangeData) => void;
    onAccessibilityValueChange?: (args: PropertyChangeData) => void;
    onAndroidBackPressed?: (args: EventData) => void;
    onColumnChange?: (args: PropertyChangeData) => void;
    onColumnSpanChange?: (args: PropertyChangeData) => void;
    onDockChange?: (args: PropertyChangeData) => void;
    onDoubleTap?: (arg: TapGestureEventData) => any;
    onIosIgnoreSafeAreaChange?: (args: PropertyChangeData) => void;
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
    originX?: string | number;
    originY?: string | number;
    perspective?: string | number;
    rotate?: string | number;
    rotateX?: string | number;
    rotateY?: string | number;
    row?: string | number;
    rowSpan?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    top?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    translateX?: string | number;
    translateY?: string | number;
    verticalAlignment?: "top" | "bottom" | "stretch" | "middle";
    visibility?: "hidden" | "visible" | "collapse" | "collapsed";
    width?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
}>
interface ViewAttributes extends TViewAttributes {}

// ui/core/view-base/index.ts
export type TViewBaseAttributes = Override<ObservableAttributes, {
    ['class']?: string;
    alignSelf?: "auto" | "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    android?: any;
    bindingContext?: string | any;
    className?: string;
    col?: number;
    colSpan?: number;
    column?: number;
    columnSpan?: number;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    dock?: "left" | "top" | "right" | "bottom";
    domNode?: DOMNode;
    effectiveBorderBottomWidth?: number;
    effectiveBorderLeftWidth?: number;
    effectiveBorderRightWidth?: number;
    effectiveBorderTopWidth?: number;
    effectiveHeight?: number;
    effectiveLeft?: number;
    effectiveMarginBottom?: number;
    effectiveMarginLeft?: number;
    effectiveMarginRight?: number;
    effectiveMarginTop?: number;
    effectiveMinHeight?: number;
    effectiveMinWidth?: number;
    effectivePaddingBottom?: number;
    effectivePaddingLeft?: number;
    effectivePaddingRight?: number;
    effectivePaddingTop?: number;
    effectiveTop?: number;
    effectiveWidth?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexWrapBefore?: boolean;
    hidden?: string | boolean;
    id?: string;
    ios?: any;
    isCollapsed?: any;
    isLoaded?: boolean;
    left?: number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    nativeView?: any;
    onBindingContextChange?: (args: PropertyChangeData) => void;
    onClassNameChange?: (args: PropertyChangeData) => void;
    onHiddenChange?: (args: PropertyChangeData) => void;
    onIdChange?: (args: PropertyChangeData) => void;
    order?: number;
    page?: Page;
    parent?: ViewBase;
    parentNode?: ViewBase;
    recycleNativeView?: "always" | "never" | "auto";
    reusable?: boolean;
    row?: number;
    rowSpan?: number;
    top?: number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    typeName?: string;
    viewController?: any;
}>
interface ViewBaseAttributes extends TViewBaseAttributes {}

// ui/web-view/index.d.ts
export type TWebViewAttributes = Override<ViewAttributes, {
    android?: any;
    canGoBack?: boolean;
    canGoForward?: boolean;
    disableZoom?: string | boolean;
    ios?: any;
    onDisableZoomChange?: (args: PropertyChangeData) => void;
    onLoadFinished?: (args: LoadEventData) => void;
    onLoadStarted?: (args: WebViewInterfacesLoadEventData) => void;
    src?: string;
}>
interface WebViewAttributes extends TWebViewAttributes {}

// ui/layouts/wrap-layout/index.d.ts
export type TWrapLayoutAttributes = Override<LayoutBaseAttributes, {
    effectiveItemHeight?: number;
    effectiveItemWidth?: number;
    itemHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    itemWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    onItemHeightChange?: (args: PropertyChangeData) => void;
    onItemWidthChange?: (args: PropertyChangeData) => void;
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>
interface WrapLayoutAttributes extends TWrapLayoutAttributes {}



