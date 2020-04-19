type ActionItems = import("@nativescript/core/ui/action-bar/action-bar").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar/action-bar").AndroidActionBarSettings;
type LengthDipUnit = import("@nativescript/core/ui/styling/style-properties").LengthDipUnit;
type LengthPxUnit = import("@nativescript/core/ui/styling/style-properties").LengthPxUnit;
type NavigationButton = import("@nativescript/core/ui/action-bar/action-bar").NavigationButton;
type View = import("@nativescript/core/ui/core/view/view").View;
type Color = import("@nativescript/core/color/color").Color;
type LinearGradient = import("@nativescript/core/ui/styling/gradient").LinearGradient;
type LengthPercentUnit = import("@nativescript/core/ui/styling/style-properties").LengthPercentUnit;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type Page = import("@nativescript/core/ui/page/page").Page;
type ViewBase = import("@nativescript/core/ui/core/view-base/view-base").ViewBase;
type Style = import("@nativescript/core/ui/styling/style/style").Style;
type ActionBar = import("@nativescript/core/ui/action-bar/action-bar").ActionBar;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar/action-bar").AndroidActionItemSettings;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar/action-bar").IOSActionItemSettings;
type TabContentItem = import("@nativescript/core/ui/tab-navigation-base/tab-content-item/tab-content-item").TabContentItem;
type TabStrip = import("@nativescript/core/ui/tab-navigation-base/tab-strip/tab-strip").TabStrip;
type FormattedString = import("@nativescript/core/ui/text-base/formatted-string").FormattedString;
type AndroidFrame = import("@nativescript/core/ui/frame/frame").AndroidFrame;
type BackstackEntry = import("@nativescript/core/ui/frame/frame").BackstackEntry;
type NavigationEntry = import("@nativescript/core/ui/frame/frame").NavigationEntry;
type iOSFrame = import("@nativescript/core/ui/frame/frame").iOSFrame;
type NavigationTransition = import("@nativescript/core/ui/frame/frame").NavigationTransition;
type ImageSource = import("@nativescript/core/image-source/image-source").ImageSource;
type ItemsSource = import("@nativescript/core/ui/list-picker/list-picker").ItemsSource;
type Template = import("@nativescript/core/ui/core/view/view").Template;
type KeyedTemplate = import("@nativescript/core/ui/core/view/view").KeyedTemplate;
type ListViewItemsSource = import("@nativescript/core/ui/list-view/list-view").ItemsSource;
type Frame = import("@nativescript/core/ui/frame/frame").Frame;
type SegmentedBarItem = import("@nativescript/core/ui/segmented-bar/segmented-bar").SegmentedBarItem;
type TabViewItem = import("@nativescript/core/ui/tab-view/tab-view").TabViewItem;
type TabStripItem = import("@nativescript/core/ui/tab-navigation-base/tab-strip-item/tab-strip-item").TabStripItem;
type Image = import("@nativescript/core/ui/image/image").Image;
type Label = import("@nativescript/core/ui/label/label").Label;

// ui/action-bar/action-bar.d.ts
type ActionBarAttributes =  ViewAttributes & {
    actionItems: ActionItems;
    android: AndroidActionBarSettings;
    androidContentInset: string | number | LengthDipUnit | LengthPxUnit;
    androidContentInsetLeft: number | "auto" | LengthDipUnit | LengthPxUnit;
    androidContentInsetRight: number | "auto" | LengthDipUnit | LengthPxUnit;
    effectiveContentInsetLeft: number;
    effectiveContentInsetRight: number;
    flat: string | false | true;
    ios: any;
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationButton: NavigationButton;
    title: string;
    titleView: View;
};

// ui/core/view/view.d.ts
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
    borderBottomLeftRadius: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderBottomRightRadius: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderBottomWidth: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderColor: string | Color;
    borderLeftColor: Color;
    borderLeftWidth: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderRadius: string | number | LengthDipUnit | LengthPxUnit;
    borderRightColor: Color;
    borderRightWidth: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderTopColor: Color;
    borderTopLeftRadius: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderTopRightRadius: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderTopWidth: number | "auto" | LengthDipUnit | LengthPxUnit;
    borderWidth: string | number | LengthDipUnit | LengthPxUnit;
    color: Color;
    column: string | number;
    columnSpan: string | number;
    css: string;
    cssClasses: Set<string>;
    cssPseudoClasses: Set<string>;
    cssType: string;
    dock: "left" | "top" | "right" | "bottom";
    height: number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    horizontalAlignment: "left" | "right" | "center" | "stretch";
    ios: any;
    iosOverflowSafeArea: false | true;
    iosOverflowSafeAreaEnabled: false | true;
    isEnabled: false | true;
    isLayoutRequired: false | true;
    isLayoutValid: false | true;
    isUserInteractionEnabled: false | true;
    left: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    margin: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginBottom: number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginLeft: number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginRight: number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginTop: number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    minHeight: number | "auto" | LengthDipUnit | LengthPxUnit;
    minWidth: number | "auto" | LengthDipUnit | LengthPxUnit;
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
    top: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    translateX: number;
    translateY: number;
    verticalAlignment: "top" | "bottom" | "stretch" | "middle";
    visibility: "visible" | "hidden" | "collapse";
    width: number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
};

// ui/core/view-base/view-base.d.ts
type ViewBaseAttributes =  ObservableAttributes & {
    alignSelf: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    android: any;
    automationText: string;
    bindingContext: string | any;
    className: string;
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
    flexWrapBefore: false | true;
    id: string;
    ios: any;
    iosOverflowSafeArea: string | false | true;
    iosOverflowSafeAreaEnabled: string | false | true;
    isCollapsed: false | true;
    isEnabled: string | false | true;
    isLoaded: false | true;
    isUserInteractionEnabled: string | false | true;
    left: number | "auto" | LengthDipUnit | LengthPxUnit;
    nativeView: any;
    order: number;
    originX: string | number;
    originY: string | number;
    page: Page;
    parent: ViewBase;
    parentNode: ViewBase;
    recycleNativeView: "always" | "never" | "auto";
    row: number;
    rowSpan: number;
    style: Style;
    top: number | "auto" | LengthDipUnit | LengthPxUnit;
    typeName: string;
    viewController: any;
};

// data/observable/observable.d.ts
type ObservableAttributes =  {

};

// ui/action-bar/action-bar.d.ts
type ActionItemAttributes =  ViewBaseAttributes & {
    actionBar: ActionBar;
    actionView: View;
    android: AndroidActionItemSettings;
    icon: string;
    ios: IOSActionItemSettings;
    text: string;
    visibility: string;
};

// ui/action-bar/action-bar.d.ts
type NavigationButtonAttributes =  ActionItemAttributes & {

};

// ui/activity-indicator/activity-indicator.d.ts
type ActivityIndicatorAttributes =  ViewAttributes & {
    android: any;
    busy: string | false | true;
    ios: any;
};

// ui/border/border.d.ts
type BorderAttributes =  ContentViewAttributes & {
    cornerRadius: number;
};

// ui/content-view/content-view.d.ts
type ContentViewAttributes =  ViewAttributes & {
    content: View;
    layoutView: View;
};

// ui/bottom-navigation/bottom-navigation.d.ts
type BottomNavigationAttributes =  TabNavigationBaseAttributes & {
    android: any;
    ios: any;
    items: TabContentItem[];
    selectedIndex: number;
    tabStrip: TabStrip;
};

// ui/tab-navigation-base/tab-navigation-base/tab-navigation-base.d.ts
type TabNavigationBaseAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    items: string | TabContentItem[];
    selectedIndex: string | number;
    tabStrip: string | TabStrip;
};

// ui/button/button.d.ts
type ButtonAttributes =  TextBaseAttributes & {
    android: any;
    ios: any;
    textWrap: false | true;
};

// ui/text-base/text-base.d.ts
type TextBaseAttributes =  ViewAttributes & {
    fontSize: number;
    formattedText: string | FormattedString;
    letterSpacing: number;
    lineHeight: number;
    padding: string | number | LengthDipUnit | LengthPxUnit;
    paddingBottom: number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingLeft: number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingRight: number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingTop: number | "auto" | LengthDipUnit | LengthPxUnit;
    text: string;
    textAlignment: "left" | "right" | "center" | "initial";
    textDecoration: "none" | "underline" | "line-through" | "underline line-through";
    textTransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whiteSpace: "initial" | "normal" | "nowrap";
};

// ui/date-picker/date-picker.d.ts
type DatePickerAttributes =  ViewAttributes & {
    android: any;
    date: string | Date;
    day: string | number;
    ios: any;
    maxDate: string | Date;
    minDate: string | Date;
    month: string | number;
    year: string | number;
};

// ui/frame/frame.d.ts
type FrameAttributes =  ViewAttributes & {
    actionBarVisibility: "always" | "never" | "auto";
    android: AndroidFrame;
    animated: false | true;
    backStack: BackstackEntry[];
    currentEntry: NavigationEntry;
    currentPage: Page;
    defaultPage: string;
    ios: iOSFrame;
    navigationBarHeight: number;
    transition: NavigationTransition;
};

// ui/html-view/html-view.d.ts
type HtmlViewAttributes =  ViewAttributes & {
    android: any;
    html: string;
    ios: any;
};

// ui/image/image.d.ts
type ImageAttributes =  ViewAttributes & {
    android: any;
    decodeHeight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    decodeWidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    imageSource: string | ImageSource;
    ios: any;
    isLoading: string | false | true;
    loadMode: "sync" | "async";
    src: string | any;
    stretch: "none" | "aspectFill" | "aspectFit" | "fill";
    tintColor: Color;
};

// ui/label/label.d.ts
type LabelAttributes =  TextBaseAttributes & {
    android: any;
    ios: any;
    textWrap: false | true;
};

// ui/list-picker/list-picker.d.ts
type ListPickerAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    isItemsSource: false | true;
    items: string | any[] | ItemsSource;
    selectedIndex: string | number;
    selectedValue: string;
    textField: string;
    valueField: string;
};

// ui/list-view/list-view.d.ts
type ListViewAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    iosEstimatedRowHeight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemIdGenerator: (item: any, index: number, items: any) => number;
    itemTemplate: string | string | Template;
    itemTemplateSelector: string | ((item: any, index: number, items: any) => string);
    itemTemplates: string | string | KeyedTemplate[];
    items: string | any[] | ListViewItemsSource;
    rowHeight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    separatorColor: Color;
};

// ui/page/page.d.ts
type PageAttributes =  ContentViewAttributes & {
    actionBar: ActionBar;
    actionBarHidden: string | false | true;
    androidStatusBarBackground: Color;
    backgroundSpanUnderStatusBar: string | false | true;
    enableSwipeBackNavigation: string | false | true;
    frame: Frame;
    hasActionBar: false | true;
    navigationContext: any;
    page: Page;
    statusBarStyle: "light" | "dark";
};

// ui/placeholder/placeholder.d.ts
type PlaceholderAttributes =  ViewAttributes & {

};

// ui/progress/progress.d.ts
type ProgressAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    maxValue: string | number;
    value: string | number;
};

// ui/proxy-view-container/proxy-view-container.d.ts
type ProxyViewContainerAttributes =  LayoutBaseAttributes & {
    proxy: string;
};

// ui/layouts/layout-base.d.ts
type LayoutBaseAttributes =  CustomLayoutViewAttributes & {
    clipToBounds: string | false | true;
    isPassThroughParentEnabled: string | false | true;
    padding: string | number | LengthDipUnit | LengthPxUnit;
    paddingBottom: number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingLeft: number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingRight: number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingTop: number | "auto" | LengthDipUnit | LengthPxUnit;
};

// ui/core/view/view.d.ts
type CustomLayoutViewAttributes =  ContainerViewAttributes & {

};

// ui/core/view/view.d.ts
type ContainerViewAttributes =  ViewAttributes & {
    iosOverflowSafeArea: false | true;
};

// ui/scroll-view/scroll-view.d.ts
type ScrollViewAttributes =  ContentViewAttributes & {
    horizontalOffset: number;
    isScrollEnabled: string | false | true;
    orientation: "horizontal" | "vertical";
    scrollBarIndicatorVisible: string | false | true;
    scrollableHeight: number;
    scrollableWidth: number;
    verticalOffset: number;
};

// ui/search-bar/search-bar.d.ts
type SearchBarAttributes =  ViewAttributes & {
    android: any;
    hint: string;
    ios: any;
    text: string;
    textFieldBackgroundColor: string | Color;
    textFieldHintColor: string | Color;
};

// ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarItemAttributes =  ViewBaseAttributes & {
    title: string;
};

// ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarAttributes =  ViewAttributes & {
    items: string | SegmentedBarItem[];
    selectedBackgroundColor: Color;
    selectedIndex: string | number;
};

// ui/slider/slider.d.ts
type SliderAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    maxValue: string | number;
    minValue: string | number;
    value: string | number;
};

// ui/switch/switch.d.ts
type SwitchAttributes =  ViewAttributes & {
    android: any;
    checked: string | false | true;
    ios: any;
    offBackgroundColor: string | Color;
};

// ui/tab-view/tab-view.d.ts
type TabViewItemAttributes =  ViewBaseAttributes & {
    canBeLoaded: false | true;
    iconSource: string;
    textTransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title: string;
    view: View;
};

// ui/tab-view/tab-view.d.ts
type TabViewAttributes =  ViewAttributes & {
    android: any;
    androidOffscreenTabLimit: string | number;
    androidSelectedTabHighlightColor: Color;
    androidSwipeEnabled: string | false | true;
    androidTabsPosition: "top" | "bottom";
    ios: any;
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    items: string | TabViewItem[];
    selectedIndex: string | number;
    selectedTabTextColor: Color;
    tabBackgroundColor: Color;
    tabTextColor: Color;
    tabTextFontSize: number;
};

// ui/tabs/tabs.d.ts
type TabsAttributes =  TabNavigationBaseAttributes & {
    android: any;
    iOSTabBarItemsAlignment: "center" | "leading" | "justified" | "centerSelected";
    ios: any;
    items: TabContentItem[];
    offscreenTabLimit: string | number;
    selectedIndex: number;
    swipeEnabled: string | false | true;
    tabStrip: TabStrip;
    tabsPosition: "top" | "bottom";
};

// ui/text-field/text-field.d.ts
type TextFieldAttributes =  EditableTextBaseAttributes & {
    android: any;
    ios: any;
    secure: string | false | true;
};

// ui/editable-text-base/editable-text-base.d.ts
type EditableTextBaseAttributes =  TextBaseAttributes & {
    autocapitalizationType: "none" | "words" | "sentences" | "allcharacters";
    autocorrect: string | false | true;
    editable: string | false | true;
    hint: string;
    keyboardType: "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxLength: string | number;
    maxLines: string | number;
    returnKeyType: "done" | "next" | "go" | "search" | "send";
    updateTextTrigger: "focusLost" | "textChanged";
};

// ui/text-view/text-view.d.ts
type TextViewAttributes =  EditableTextBaseAttributes & {
    android: any;
    ios: any;
    maxLines: number;
};

// ui/time-picker/time-picker.d.ts
type TimePickerAttributes =  ViewAttributes & {
    android: any;
    hour: string | number;
    ios: any;
    maxHour: string | number;
    maxMinute: string | number;
    minHour: string | number;
    minMinute: string | number;
    minute: string | number;
    minuteInterval: string | number;
    time: string | Date;
};

// ui/web-view/web-view.d.ts
type WebViewAttributes =  ViewAttributes & {
    android: any;
    canGoBack: false | true;
    canGoForward: false | true;
    ios: any;
    src: string;
};

// ui/layouts/absolute-layout/absolute-layout.d.ts
type AbsoluteLayoutAttributes =  LayoutBaseAttributes & {

};

// ui/layouts/dock-layout/dock-layout.d.ts
type DockLayoutAttributes =  LayoutBaseAttributes & {
    stretchLastChild: string | false | true;
};

// ui/layouts/flexbox-layout/flexbox-layout.d.ts
type FlexboxLayoutAttributes =  LayoutBaseAttributes & {
    alignContent: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
    alignItems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
    flexWrap: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
};

// ui/layouts/grid-layout/grid-layout.d.ts
type GridLayoutAttributes =  LayoutBaseAttributes & {
    columns: string;
    rows: string;
};

// ui/layouts/stack-layout/stack-layout.d.ts
type StackLayoutAttributes =  LayoutBaseAttributes & {
    orientation: "horizontal" | "vertical";
};

// ui/layouts/wrap-layout/wrap-layout.d.ts
type WrapLayoutAttributes =  LayoutBaseAttributes & {
    effectiveItemHeight: number;
    effectiveItemWidth: number;
    itemHeight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemWidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    orientation: "horizontal" | "vertical";
};

// ui/tab-navigation-base/tab-content-item/tab-content-item.d.ts
type TabContentItemAttributes =  ContentViewAttributes & {
    canBeLoaded: false | true;
};

// ui/tab-navigation-base/tab-strip/tab-strip.d.ts
type TabStripAttributes =  ViewAttributes & {
    highlightColor: string | Color;
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    isIconSizeFixed: string | false | true;
    items: string | TabStripItem[];
    selectedItemColor: string | Color;
    unSelectedItemColor: string | Color;
};

// ui/tab-navigation-base/tab-strip-item/tab-strip-item.d.ts
type TabStripItemAttributes =  ViewAttributes & {
    iconClass: string;
    iconSource: string;
    image: Image;
    label: Label;
    title: string;
};