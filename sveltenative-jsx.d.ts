type ActionItems = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar").ActionItems;
type AndroidActionBarSettings = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar").AndroidActionBarSettings;
type NavigationButton = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar").NavigationButton;
type View = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view").View;
type Color = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/color/color").Color;
type LinearGradient = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/gradient").LinearGradient;
type LengthPxUnit = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit;
type LengthPercentUnit = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPercentUnit;
type DOMNode = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/debugger/dom-node").DOMNode;
type Page = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/page/page").Page;
type ViewBase = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view-base/view-base").ViewBase;
type Style = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style/style").Style;
type ActionBar = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar").ActionBar;
type AndroidActionItemSettings = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar").AndroidActionItemSettings;
type IOSActionItemSettings = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar").IOSActionItemSettings;
type TabContentItem = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-content-item/tab-content-item").TabContentItem;
type TabStrip = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-strip/tab-strip").TabStrip;
type FormattedString = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-base/formatted-string").FormattedString;
type AndroidFrame = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame").AndroidFrame;
type BackstackEntry = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame").BackstackEntry;
type NavigationEntry = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame").NavigationEntry;
type iOSFrame = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame").iOSFrame;
type NavigationTransition = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame").NavigationTransition;
type ImageSource = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/image-source/image-source").ImageSource;
type Template = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view").Template;
type KeyedTemplate = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view").KeyedTemplate;
type ItemsSource = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-view/list-view").ItemsSource;
type Frame = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame").Frame;
type SegmentedBarItem = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar").SegmentedBarItem;
type TabViewItem = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view").TabViewItem;
type TabStripItem = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-strip-item/tab-strip-item").TabStripItem;
type Image = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/image/image").Image;
type Label = import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/label/label").Label;

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar.d.ts
type ActionBarAttributes =  ViewAttributes & {
    actionItems: ActionItems;
    android: AndroidActionBarSettings;
    effectiveContentInsetLeft: number;
    effectiveContentInsetRight: number;
    flat: boolean;
    ios: any;
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationButton: NavigationButton;
    title: string;
    titleView: View;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view.d.ts
type ViewAttributes =  ViewBaseAttributes & {
    android: any;
    androidDynamicElevationOffset: number;
    androidElevation: number;
    automationText: string;
    background: string;
    backgroundColor: string | Color;
    backgroundImage: string | LinearGradient;
    bindingContext: any;
    borderBottomColor: Color;
    borderBottomLeftRadius: number | "auto" | LengthPxUnit;
    borderBottomRightRadius: number | "auto" | LengthPxUnit;
    borderBottomWidth: number | "auto" | LengthPxUnit;
    borderColor: string | Color;
    borderLeftColor: Color;
    borderLeftWidth: number | "auto" | LengthPxUnit;
    borderRadius: string | number | LengthPxUnit;
    borderRightColor: Color;
    borderRightWidth: number | "auto" | LengthPxUnit;
    borderTopColor: Color;
    borderTopLeftRadius: number | "auto" | LengthPxUnit;
    borderTopRightRadius: number | "auto" | LengthPxUnit;
    borderTopWidth: number | "auto" | LengthPxUnit;
    borderWidth: string | number | LengthPxUnit;
    color: Color;
    column: string | number;
    columnSpan: string | number;
    css: string;
    cssClasses: Set<string>;
    cssPseudoClasses: Set<string>;
    cssType: string;
    dock: string | "left" | "top" | "right" | "bottom";
    height: number | "auto" | LengthPercentUnit;
    horizontalAlignment: "left" | "right" | "center" | "stretch";
    ios: any;
    iosOverflowSafeArea: boolean;
    iosOverflowSafeAreaEnabled: boolean;
    isEnabled: boolean;
    isLayoutRequired: boolean;
    isLayoutValid: boolean;
    isUserInteractionEnabled: boolean;
    left: string | number | "auto" | LengthPxUnit;
    margin: string | number | LengthPercentUnit;
    marginBottom: number | "auto" | LengthPercentUnit;
    marginLeft: number | "auto" | LengthPercentUnit;
    marginRight: number | "auto" | LengthPercentUnit;
    marginTop: number | "auto" | LengthPercentUnit;
    minHeight: number | "auto" | LengthPxUnit;
    minWidth: number | "auto" | LengthPxUnit;
    modal: View;
    opacity: number;
    originX: number;
    originY: number;
    perspective: number;
    rotate: number;
    rotateX: number;
    rotateY: number;
    row: string | number;
    rowSpan: string | number;
    scaleX: number;
    scaleY: number;
    top: string | number | "auto" | LengthPxUnit;
    translateX: number;
    translateY: number;
    verticalAlignment: "top" | "bottom" | "stretch" | "middle";
    visibility: "visible" | "hidden" | "collapse";
    width: number | "auto" | LengthPercentUnit;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view-base/view-base.d.ts
type ViewBaseAttributes =  ObservableAttributes & {
    alignSelf: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    android: any;
    bindingContext: string | any;
    className: string | string;
    col: number;
    colSpan: number;
    column: number;
    columnSpan: number;
    cssClasses: Set<string>;
    cssPseudoClasses: Set<string>;
    dock: "left" | "top" | "right" | "bottom";
    domNode: DOMNode;
    effectiveBorderBottomWidth: number;
    effectiveBorderLeftWidth: number;
    effectiveBorderRightWidth: number;
    effectiveBorderTopWidth: number;
    effectiveHeight: number;
    effectiveLeft: number;
    effectiveMarginBottom: number;
    effectiveMarginLeft: number;
    effectiveMarginRight: number;
    effectiveMarginTop: number;
    effectiveMinHeight: number;
    effectiveMinWidth: number;
    effectivePaddingBottom: number;
    effectivePaddingLeft: number;
    effectivePaddingRight: number;
    effectivePaddingTop: number;
    effectiveTop: number;
    effectiveWidth: number;
    flexGrow: number;
    flexShrink: number;
    flexWrapBefore: boolean;
    id: string | string;
    ios: any;
    isCollapsed: boolean;
    isLoaded: boolean;
    left: number | "auto" | LengthPxUnit;
    nativeView: any;
    order: number;
    page: Page;
    parent: ViewBase;
    parentNode: ViewBase;
    recycleNativeView: "always" | "never" | "auto";
    row: number;
    rowSpan: number;
    style: Style;
    top: number | "auto" | LengthPxUnit;
    typeName: string;
    viewController: any;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/data/observable/observable.d.ts
type ObservableAttributes =  {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar.d.ts
type ActionItemAttributes =  ViewBaseAttributes & {
    actionBar: ActionBar;
    actionView: View;
    android: AndroidActionItemSettings;
    icon: string;
    ios: IOSActionItemSettings;
    text: string;
    visibility: string;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar.d.ts
type NavigationButtonAttributes =  ActionItemAttributes & {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/activity-indicator/activity-indicator.d.ts
type ActivityIndicatorAttributes =  ViewAttributes & {
    android: any;
    busy: boolean;
    ios: any;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/border/border.d.ts
type BorderAttributes =  ContentViewAttributes & {
    cornerRadius: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/content-view/content-view.d.ts
type ContentViewAttributes =  ViewAttributes & {
    content: View;
    layoutView: View;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/bottom-navigation/bottom-navigation.d.ts
type BottomNavigationAttributes =  TabNavigationBaseAttributes & {
    android: any;
    ios: any;
    items: TabContentItem[];
    selectedIndex: number;
    tabStrip: TabStrip;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base.d.ts
type TabNavigationBaseAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    items: string | TabContentItem[];
    selectedIndex: string | number;
    tabStrip: string | TabStrip;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/button/button.d.ts
type ButtonAttributes =  TextBaseAttributes & {
    android: any;
    ios: any;
    textWrap: boolean;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-base/text-base.d.ts
type TextBaseAttributes =  ViewAttributes & {
    fontSize: number;
    formattedText: FormattedString;
    letterSpacing: number;
    lineHeight: number;
    padding: string | number | LengthPxUnit;
    paddingBottom: number | "auto" | LengthPxUnit;
    paddingLeft: number | "auto" | LengthPxUnit;
    paddingRight: number | "auto" | LengthPxUnit;
    paddingTop: number | "auto" | LengthPxUnit;
    text: string;
    textAlignment: "left" | "right" | "center" | "initial";
    textDecoration: "none" | "underline" | "line-through" | "underline line-through";
    textTransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whiteSpace: "initial" | "normal" | "nowrap";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/date-picker/date-picker.d.ts
type DatePickerAttributes =  ViewAttributes & {
    android: any;
    date: Date;
    day: number;
    ios: any;
    maxDate: Date;
    minDate: Date;
    month: number;
    year: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame.d.ts
type FrameAttributes =  ViewAttributes & {
    actionBarVisibility: "always" | "never" | "auto";
    android: AndroidFrame;
    animated: boolean;
    backStack: BackstackEntry[];
    currentEntry: NavigationEntry;
    currentPage: Page;
    ios: iOSFrame;
    navigationBarHeight: number;
    transition: NavigationTransition;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/html-view/html-view.d.ts
type HtmlViewAttributes =  ViewAttributes & {
    android: any;
    html: string;
    ios: any;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/image/image.d.ts
type ImageAttributes =  ViewAttributes & {
    android: any;
    decodeHeight: number | "auto" | LengthPxUnit;
    decodeWidth: number | "auto" | LengthPxUnit;
    imageSource: ImageSource;
    ios: any;
    isLoading: boolean;
    loadMode: "sync" | "async";
    src: any;
    stretch: "none" | "aspectFill" | "aspectFit" | "fill";
    tintColor: Color;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/label/label.d.ts
type LabelAttributes =  TextBaseAttributes & {
    android: any;
    ios: any;
    textWrap: boolean;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-picker/list-picker.d.ts
type ListPickerAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    items: any;
    selectedIndex: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-view/list-view.d.ts
type ListViewAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    iosEstimatedRowHeight: number | "auto" | LengthPxUnit;
    itemIdGenerator: (item: any, index: number, items: any) => number;
    itemTemplate: string | Template;
    itemTemplateSelector: string | ((item: any, index: number, items: any) => string);
    itemTemplates: string | KeyedTemplate[];
    items: any[] | ItemsSource;
    rowHeight: number | "auto" | LengthPxUnit;
    separatorColor: Color;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/page/page.d.ts
type PageAttributes =  ContentViewAttributes & {
    actionBar: ActionBar;
    actionBarHidden: boolean;
    androidStatusBarBackground: Color;
    backgroundSpanUnderStatusBar: boolean;
    enableSwipeBackNavigation: boolean;
    frame: Frame;
    hasActionBar: boolean;
    navigationContext: any;
    statusBarStyle: "light" | "dark";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/placeholder/placeholder.d.ts
type PlaceholderAttributes =  ViewAttributes & {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/progress/progress.d.ts
type ProgressAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    maxValue: number;
    value: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/proxy-view-container/proxy-view-container.d.ts
type ProxyViewContainerAttributes =  LayoutBaseAttributes & {
    proxy: string | string;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/layout-base.d.ts
type LayoutBaseAttributes =  CustomLayoutViewAttributes & {
    clipToBounds: boolean;
    isPassThroughParentEnabled: boolean;
    padding: string | number | LengthPxUnit;
    paddingBottom: number | "auto" | LengthPxUnit;
    paddingLeft: number | "auto" | LengthPxUnit;
    paddingRight: number | "auto" | LengthPxUnit;
    paddingTop: number | "auto" | LengthPxUnit;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view.d.ts
type CustomLayoutViewAttributes =  ContainerViewAttributes & {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view.d.ts
type ContainerViewAttributes =  ViewAttributes & {
    iosOverflowSafeArea: boolean;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/scroll-view/scroll-view.d.ts
type ScrollViewAttributes =  ContentViewAttributes & {
    horizontalOffset: number;
    isScrollEnabled: boolean;
    orientation: "horizontal" | "vertical";
    scrollBarIndicatorVisible: boolean;
    scrollableHeight: number;
    scrollableWidth: number;
    verticalOffset: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/search-bar/search-bar.d.ts
type SearchBarAttributes =  ViewAttributes & {
    android: any;
    hint: string;
    ios: any;
    text: string;
    textFieldBackgroundColor: Color;
    textFieldHintColor: Color;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarItemAttributes =  ViewBaseAttributes & {
    title: string;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarAttributes =  ViewAttributes & {
    items: SegmentedBarItem[];
    selectedBackgroundColor: Color;
    selectedIndex: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/slider/slider.d.ts
type SliderAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    maxValue: number;
    minValue: number;
    value: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/switch/switch.d.ts
type SwitchAttributes =  ViewAttributes & {
    android: any;
    checked: boolean;
    ios: any;
    offBackgroundColor: Color;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view.d.ts
type TabViewItemAttributes =  ViewBaseAttributes & {
    canBeLoaded: boolean;
    iconSource: string;
    textTransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title: string;
    view: View;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view.d.ts
type TabViewAttributes =  ViewAttributes & {
    android: any;
    androidOffscreenTabLimit: number;
    androidSelectedTabHighlightColor: Color;
    androidSwipeEnabled: boolean;
    androidTabsPosition: "top" | "bottom";
    ios: any;
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    items: TabViewItem[];
    selectedIndex: number;
    selectedTabTextColor: Color;
    tabBackgroundColor: Color;
    tabTextColor: Color;
    tabTextFontSize: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tabs/tabs.d.ts
type TabsAttributes =  TabNavigationBaseAttributes & {
    android: any;
    iOSTabBarItemsAlignment: "center" | "leading" | "justified" | "centerSelected";
    ios: any;
    items: TabContentItem[];
    offscreenTabLimit: number;
    selectedIndex: number;
    swipeEnabled: boolean;
    tabStrip: TabStrip;
    tabsPosition: "top" | "bottom";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-field/text-field.d.ts
type TextFieldAttributes =  EditableTextBaseAttributes & {
    android: any;
    ios: any;
    secure: boolean;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/editable-text-base/editable-text-base.d.ts
type EditableTextBaseAttributes =  TextBaseAttributes & {
    autocapitalizationType: string | "none" | "words" | "sentences" | "allcharacters";
    autocorrect: string | boolean;
    editable: string | boolean;
    hint: string | string;
    keyboardType: string | "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxLength: string | number;
    maxLines: string | number;
    returnKeyType: string | "done" | "next" | "go" | "search" | "send";
    updateTextTrigger: string | "focusLost" | "textChanged";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-view/text-view.d.ts
type TextViewAttributes =  EditableTextBaseAttributes & {
    android: any;
    ios: any;
    maxLines: number;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/time-picker/time-picker.d.ts
type TimePickerAttributes =  ViewAttributes & {
    android: any;
    hour: number;
    ios: any;
    maxHour: number;
    maxMinute: number;
    minHour: number;
    minMinute: number;
    minute: number;
    minuteInterval: number;
    time: Date;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/web-view/web-view.d.ts
type WebViewAttributes =  ViewAttributes & {
    android: any;
    canGoBack: boolean;
    canGoForward: boolean;
    ios: any;
    src: string;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/absolute-layout/absolute-layout.d.ts
type AbsoluteLayoutAttributes =  LayoutBaseAttributes & {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/dock-layout/dock-layout.d.ts
type DockLayoutAttributes =  LayoutBaseAttributes & {
    stretchLastChild: boolean;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/flexbox-layout/flexbox-layout.d.ts
type FlexboxLayoutAttributes =  LayoutBaseAttributes & {
    alignContent: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
    alignItems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
    flexWrap: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/grid-layout/grid-layout.d.ts
type GridLayoutAttributes =  LayoutBaseAttributes & {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/stack-layout/stack-layout.d.ts
type StackLayoutAttributes =  LayoutBaseAttributes & {
    orientation: "horizontal" | "vertical";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/wrap-layout/wrap-layout.d.ts
type WrapLayoutAttributes =  LayoutBaseAttributes & {
    itemHeight: number | "auto" | LengthPxUnit;
    itemWidth: number | "auto" | LengthPxUnit;
    orientation: "horizontal" | "vertical";
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-content-item/tab-content-item.d.ts
type TabContentItemAttributes =  ContentViewAttributes & {
    canBeLoaded: boolean;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-strip/tab-strip.d.ts
type TabStripAttributes =  ViewAttributes & {
    highlightColor: string | Color;
    iosIconRenderingMode: string | "automatic" | "alwaysOriginal" | "alwaysTemplate";
    isIconSizeFixed: string | boolean;
    items: string | TabStripItem[];
    selectedItemColor: string | Color;
    unSelectedItemColor: string | Color;
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-strip-item/tab-strip-item.d.ts
type TabStripItemAttributes =  ViewAttributes & {
    iconClass: string;
    iconSource: string;
    image: Image;
    label: Label;
    title: string;
};