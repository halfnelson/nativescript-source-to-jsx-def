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


// ui/layouts/absolute-layout/absolute-layout.d.ts
export type AbsoluteLayoutAttributes = Override<LayoutBaseAttributes, {

}>;

// ui/action-bar/action-bar.d.ts
export type ActionBarAttributes = Override<ViewAttributes, {
    actionItems?: ActionItems;
    android?: AndroidActionBarSettings;
    androidContentInset?: string | number | LengthDipUnit | LengthPxUnit;
    androidContentInsetLeft?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    androidContentInsetRight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
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
}>;

// ui/action-bar/action-bar.d.ts
export type ActionItemAttributes = Override<ViewBaseAttributes, {
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
}>;

// ui/activity-indicator/activity-indicator.d.ts
export type ActivityIndicatorAttributes = Override<ViewAttributes, {
    android?: any;
    busy?: string | boolean;
    ios?: any;
    onBusyChange?: (args: PropertyChangeData) => void;
}>;

// ui/border/border.d.ts
export type BorderAttributes = Override<ContentViewAttributes, {
    cornerRadius?: number;
}>;

// ui/bottom-navigation/bottom-navigation.d.ts
export type BottomNavigationAttributes = Override<TabNavigationBaseAttributes, {
    android?: any;
    ios?: any;
    items?: TabContentItem[];
    onSelectedIndexChanged?: (args: BottomNavigationSelectedIndexChangedEventData) => void;
    selectedIndex?: number;
    tabStrip?: TabStrip;
}>;

// ui/button/button.d.ts
export type ButtonAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    onTap?: (args: EventData) => void;
    textWrap?: boolean;
}>;

// ui/core/view/view.d.ts
export type ContainerViewAttributes = Override<ViewAttributes, {
    iosOverflowSafeArea?: boolean;
}>;

// ui/content-view/content-view.d.ts
export type ContentViewAttributes = Override<ViewAttributes, {
    content?: View;
    layoutView?: View;
}>;

// ui/core/view/view.d.ts
export type CustomLayoutViewAttributes = Override<ContainerViewAttributes, {

}>;

// ui/date-picker/date-picker.d.ts
export type DatePickerAttributes = Override<ViewAttributes, {
    android?: any;
    date?: string | Date;
    day?: string | number;
    ios?: any;
    maxDate?: string | Date;
    minDate?: string | Date;
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
export type DockLayoutAttributes = Override<LayoutBaseAttributes, {
    onStretchLastChildChange?: (args: PropertyChangeData) => void;
    stretchLastChild?: string | boolean;
}>;

// ui/editable-text-base/editable-text-base.d.ts
export type EditableTextBaseAttributes = Override<TextBaseAttributes, {
    autocapitalizationType?: "none" | "words" | "sentences" | "allcharacters";
    autocorrect?: string | boolean;
    editable?: string | boolean;
    hint?: string;
    keyboardType?: "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxLength?: string | number;
    maxLines?: string | number;
    onAutocapitalizationTypeChange?: (args: PropertyChangeData) => void;
    onAutocorrectChange?: (args: PropertyChangeData) => void;
    onEditableChange?: (args: PropertyChangeData) => void;
    onHintChange?: (args: PropertyChangeData) => void;
    onKeyboardTypeChange?: (args: PropertyChangeData) => void;
    onMaxLengthChange?: (args: PropertyChangeData) => void;
    onMaxLinesChange?: (args: PropertyChangeData) => void;
    onReturnKeyTypeChange?: (args: PropertyChangeData) => void;
    onUpdateTextTriggerChange?: (args: PropertyChangeData) => void;
    returnKeyType?: "done" | "next" | "go" | "search" | "send";
    updateTextTrigger?: "focusLost" | "textChanged";
}>;

// ui/layouts/flexbox-layout/flexbox-layout.d.ts
export type FlexboxLayoutAttributes = Override<LayoutBaseAttributes, {
    alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
}>;

// ui/text-base/formatted-string.ts
export type FormattedStringAttributes = Override<ViewBaseAttributes, {
    backgroundColor?: string | Color;
    color?: string | Color;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    spans?: ObservableArray<Span>;
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/frame/frame.d.ts
export type FrameAttributes = Override<ViewAttributes, {
    actionBarVisibility?: "always" | "never" | "auto";
    android?: AndroidFrame;
    animated?: boolean;
    backStack?: BackstackEntry[];
    currentEntry?: NavigationEntry;
    currentPage?: Page;
    defaultPage?: string;
    ios?: iOSFrame;
    navigationBarHeight?: number;
    onActionBarVisibilityChange?: (args: PropertyChangeData) => void;
    onDefaultPageChange?: (args: PropertyChangeData) => void;
    transition?: NavigationTransition;
}>;

// ui/layouts/grid-layout/grid-layout.d.ts
export type GridLayoutAttributes = Override<LayoutBaseAttributes, {
    columns?: string;
    rows?: string;
}>;

// ui/html-view/html-view.d.ts
export type HtmlViewAttributes = Override<ViewAttributes, {
    android?: any;
    html?: string;
    ios?: any;
    onHtmlChange?: (args: PropertyChangeData) => void;
}>;

// ui/image/image.d.ts
export type ImageAttributes = Override<ViewAttributes, {
    android?: any;
    decodeHeight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    decodeWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
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
}>;

// ui/label/label.d.ts
export type LabelAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    textWrap?: string | boolean;
}>;

// ui/layouts/layout-base.d.ts
export type LayoutBaseAttributes = Override<CustomLayoutViewAttributes, {
    clipToBounds?: string | boolean;
    isPassThroughParentEnabled?: string | boolean;
    onClipToBoundsChange?: (args: PropertyChangeData) => void;
    onIsPassThroughParentEnabledChange?: (args: PropertyChangeData) => void;
    padding?: string | number | LengthDipUnit | LengthPxUnit;
    paddingBottom?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingLeft?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingRight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingTop?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
}>;

// ui/list-picker/list-picker.d.ts
export type ListPickerAttributes = Override<ViewAttributes, {
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
}>;

// ui/list-view/list-view.d.ts
export type ListViewAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    iosEstimatedRowHeight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
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
    rowHeight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    separatorColor?: string | Color;
}>;

// ui/action-bar/action-bar.d.ts
export type NavigationButtonAttributes = Override<ActionItemAttributes, {

}>;

// data/observable/observable.d.ts
export type ObservableAttributes = {
    onPropertyChange?: (data: EventData) => void;
};

// ui/page/page.d.ts
export type PageAttributes = Override<ContentViewAttributes, {
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
    page?: Page;
    statusBarStyle?: "light" | "dark";
}>;

// ui/placeholder/placeholder.d.ts
export type PlaceholderAttributes = Override<ViewAttributes, {
    onCreatingView?: (args: CreateViewEventData) => void;
}>;

// ui/progress/progress.d.ts
export type ProgressAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxValue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/proxy-view-container/proxy-view-container.d.ts
export type ProxyViewContainerAttributes = Override<LayoutBaseAttributes, {
    onProxyChange?: (args: PropertyChangeData) => void;
    proxy?: string;
}>;

// ui/repeater/repeater.d.ts
export type RepeaterAttributes = Override<CustomLayoutViewAttributes, {
    itemTemplate?: string | Template;
    items?: string | any[] | RepeaterItemsSource;
    itemsLayout?: string | LayoutBase;
    onItemTemplateChange?: (args: PropertyChangeData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onItemsLayoutChange?: (args: PropertyChangeData) => void;
}>;

// ui/scroll-view/scroll-view.d.ts
export type ScrollViewAttributes = Override<ContentViewAttributes, {
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
}>;

// ui/search-bar/search-bar.d.ts
export type SearchBarAttributes = Override<ViewAttributes, {
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
}>;

// ui/segmented-bar/segmented-bar.d.ts
export type SegmentedBarAttributes = Override<ViewAttributes, {
    items?: string | SegmentedBarItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SegmentedBarSelectedIndexChangedEventData) => void;
    selectedBackgroundColor?: string | Color;
    selectedIndex?: string | number;
}>;

// ui/segmented-bar/segmented-bar.d.ts
export type SegmentedBarItemAttributes = Override<ViewBaseAttributes, {
    title?: string;
}>;

// ui/slider/slider.d.ts
export type SliderAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxValue?: string | number;
    minValue?: string | number;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onMinValueChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/text-base/span.ts
export type SpanAttributes = Override<ViewBaseAttributes, {
    backgroundColor?: string | Color;
    color?: string | Color;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    text?: string;
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/layouts/stack-layout/stack-layout.d.ts
export type StackLayoutAttributes = Override<LayoutBaseAttributes, {
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;

// ui/switch/switch.d.ts
export type SwitchAttributes = Override<ViewAttributes, {
    android?: any;
    checked?: string | boolean;
    ios?: any;
    offBackgroundColor?: string | Color;
    onCheckedChange?: (args: PropertyChangeData) => void;
    onOffBackgroundColorChange?: (args: PropertyChangeData) => void;
}>;

// ui/tab-navigation-base/tab-content-item/tab-content-item.d.ts
export type TabContentItemAttributes = Override<ContentViewAttributes, {
    canBeLoaded?: boolean;
}>;

// ui/tab-navigation-base/tab-navigation-base/tab-navigation-base.d.ts
export type TabNavigationBaseAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    items?: string | TabContentItem[];
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    onTabStripChange?: (args: PropertyChangeData) => void;
    selectedIndex?: string | number;
    tabStrip?: string | TabStrip;
}>;

// ui/tab-navigation-base/tab-strip/tab-strip.d.ts
export type TabStripAttributes = Override<ViewAttributes, {
    highlightColor?: string | Color;
    iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    isIconSizeFixed?: string | boolean;
    items?: string | TabStripItem[];
    onHighlightColorChange?: (args: PropertyChangeData) => void;
    onIosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onIsIconSizeFixedChange?: (args: PropertyChangeData) => void;
    onItemTap?: (args: TabStripItemEventData) => void;
    onItemsChange?: (args: PropertyChangeData) => void;
    onSelectedItemColorChange?: (args: PropertyChangeData) => void;
    onUnSelectedItemColorChange?: (args: PropertyChangeData) => void;
    selectedItemColor?: string | Color;
    unSelectedItemColor?: string | Color;
}>;

// ui/tab-navigation-base/tab-strip-item/tab-strip-item.d.ts
export type TabStripItemAttributes = Override<ViewAttributes, {
    iconClass?: string;
    iconSource?: string;
    image?: Image;
    label?: Label;
    onTap?: (args: EventData) => void;
    title?: string;
}>;

// ui/tab-view/tab-view.d.ts
export type TabViewAttributes = Override<ViewAttributes, {
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
}>;

// ui/tab-view/tab-view.d.ts
export type TabViewItemAttributes = Override<ViewBaseAttributes, {
    canBeLoaded?: boolean;
    iconSource?: string;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title?: string;
    view?: View;
}>;

// ui/tabs/tabs.d.ts
export type TabsAttributes = Override<TabNavigationBaseAttributes, {
    android?: any;
    iOSTabBarItemsAlignment?: "center" | "leading" | "justified" | "centerSelected";
    ios?: any;
    items?: TabContentItem[];
    offscreenTabLimit?: string | number;
    onIOsTabBarItemsAlignmentChange?: (args: PropertyChangeData) => void;
    onOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onSelectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    onSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onTabsPositionChange?: (args: PropertyChangeData) => void;
    selectedIndex?: number;
    swipeEnabled?: string | boolean;
    tabStrip?: TabStrip;
    tabsPosition?: "top" | "bottom";
}>;

// ui/text-base/text-base.d.ts
export type TextBaseAttributes = Override<ViewAttributes, {
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    formattedText?: string | FormattedString;
    letterSpacing?: string | number;
    lineHeight?: string | number;
    onFormattedTextChange?: (args: PropertyChangeData) => void;
    onTextChange?: (args: PropertyChangeData) => void;
    padding?: string | number | LengthDipUnit | LengthPxUnit;
    paddingBottom?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingLeft?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingRight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingTop?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    text?: string;
    textAlignment?: "left" | "right" | "center" | "initial";
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whiteSpace?: "initial" | "normal" | "nowrap";
}>;

// ui/text-field/text-field.d.ts
export type TextFieldAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    onSecureChange?: (args: PropertyChangeData) => void;
    secure?: string | boolean;
}>;

// ui/text-view/text-view.d.ts
export type TextViewAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    maxLines?: number;
}>;

// ui/time-picker/time-picker.d.ts
export type TimePickerAttributes = Override<ViewAttributes, {
    android?: any;
    hour?: string | number;
    ios?: any;
    maxHour?: string | number;
    maxMinute?: string | number;
    minHour?: string | number;
    minMinute?: string | number;
    minute?: string | number;
    minuteInterval?: string | number;
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
export type ViewAttributes = Override<ViewBaseAttributes, {
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
    borderBottomLeftRadius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderBottomRightRadius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderBottomWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderColor?: string | Color;
    borderLeftColor?: string | Color;
    borderLeftWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderRadius?: string | number | LengthDipUnit | LengthPxUnit;
    borderRightColor?: string | Color;
    borderRightWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderTopColor?: string | Color;
    borderTopLeftRadius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderTopRightRadius?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderTopWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderWidth?: string | number | LengthDipUnit | LengthPxUnit;
    color?: string | Color;
    column?: string | number;
    columnSpan?: string | number;
    css?: string;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    cssType?: string;
    dock?: "left" | "top" | "right" | "bottom";
    height?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    horizontalAlignment?: "left" | "right" | "center" | "stretch";
    ios?: any;
    iosOverflowSafeArea?: string | boolean;
    iosOverflowSafeAreaEnabled?: string | boolean;
    isEnabled?: string | boolean;
    isLayoutRequired?: boolean;
    isLayoutValid?: boolean;
    isUserInteractionEnabled?: string | boolean;
    left?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    margin?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginBottom?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginLeft?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginRight?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginTop?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    minHeight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    minWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
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
    top?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    translateX?: string | number;
    translateY?: string | number;
    verticalAlignment?: "top" | "bottom" | "stretch" | "middle";
    visibility?: "visible" | "hidden" | "collapse";
    width?: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
}>;

// ui/core/view-base/view-base.d.ts
export type ViewBaseAttributes = Override<ObservableAttributes, {
    alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
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
    id?: string;
    ios?: any;
    isCollapsed?: boolean;
    isLoaded?: boolean;
    left?: number | "auto" | LengthDipUnit | LengthPxUnit;
    nativeView?: any;
    onBindingContextChange?: (args: PropertyChangeData) => void;
    onClassNameChange?: (args: PropertyChangeData) => void;
    onIdChange?: (args: PropertyChangeData) => void;
    order?: number;
    page?: Page;
    parent?: ViewBase;
    parentNode?: ViewBase;
    recycleNativeView?: "always" | "never" | "auto";
    row?: number;
    rowSpan?: number;
    top?: number | "auto" | LengthDipUnit | LengthPxUnit;
    typeName?: string;
    viewController?: any;
}>;

// ui/web-view/web-view.d.ts
export type WebViewAttributes = Override<ViewAttributes, {
    android?: any;
    canGoBack?: boolean;
    canGoForward?: boolean;
    ios?: any;
    onLoadFinished?: (args: LoadEventData) => void;
    onLoadStarted?: (args: LoadEventData) => void;
    src?: string;
}>;

// ui/layouts/wrap-layout/wrap-layout.d.ts
export type WrapLayoutAttributes = Override<LayoutBaseAttributes, {
    effectiveItemHeight?: number;
    effectiveItemWidth?: number;
    itemHeight?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemWidth?: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    onItemHeightChange?: (args: PropertyChangeData) => void;
    onItemWidthChange?: (args: PropertyChangeData) => void;
    onOrientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;



