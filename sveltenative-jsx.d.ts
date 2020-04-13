//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar.ts
type ActionItem = {
    android: AndroidActionItemSettings
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar-common.ts
type ActionItemBase = {
    actionBar: ActionBarDefinition
    actionView: View
    android: AndroidActionItemSettings
    icon: string
    ios: IOSActionItemSettings
    text: string
    visibility: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar.ts
type NavigationButton = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar.ts
type ActionBar = {
    android: AndroidActionBarSettings
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/action-bar/action-bar-common.ts
type ActionBarBase = {
    actionItems: ActionItems
    android: AndroidActionBarSettings
    androidContentInset: string | number | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    androidContentInsetLeft: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    androidContentInsetRight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    effectiveContentInsetLeft: number
    effectiveContentInsetRight: number
    flat: boolean
    ios: any
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate"
    navigationButton: NavigationButton
    title: string
    titleView: View
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/activity-indicator/activity-indicator.ts
type ActivityIndicator = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/activity-indicator/activity-indicator-common.ts
type ActivityIndicatorBase = {
    busy: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/border/border.ts
type Border = {
    cornerRadius: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/bottom-navigation/bottom-navigation.ts
type BottomNavigation = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/button/button.ts
type Button = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/button/button-common.ts
type ButtonBase = {
    textWrap: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/content-view/content-view.ts
type ContentView = {
    content: View
    layoutView: View
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/date-picker/date-picker.ts
type DatePicker = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/date-picker/date-picker-common.ts
type DatePickerBase = {
    date: Date
    day: number
    maxDate: Date
    minDate: Date
    month: number
    year: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame.ts
type Frame = {
    android: AndroidFrame
    containerViewId: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/frame/frame-common.ts
type FrameBase = {
    actionBarVisibility: "always" | "never" | "auto"
    animated: boolean
    backStack: BackstackEntry[]
    currentEntry: NavigationEntry
    currentPage: Page
    defaultPage: string
    navigationBarHeight: number
    transition: NavigationTransition
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/html-view/html-view.ts
type HtmlView = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/html-view/html-view-common.ts
type HtmlViewBase = {
    html: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/image/image.ts
type Image = {
    useCache: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/image/image-common.ts
type ImageBase = {
    decodeHeight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    decodeWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    imageSource: ImageSource
    isLoading: boolean
    loadMode: "sync" | "async"
    src: any
    stretch: "none" | "aspectFill" | "aspectFit" | "fill"
    tintColor: Color
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/label/label.ts
type Label = {
    textWrap: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-picker/list-picker.ts
type ListPicker = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-picker/list-picker-common.ts
type ListPickerBase = {
    isItemsSource: boolean
    items: any[] | ItemsSource
    selectedIndex: number
    selectedValue: string
    textField: string
    valueField: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-view/list-view.ts
type ListView = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/list-view/list-view-common.ts
type ListViewBase = {
    iosEstimatedRowHeight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    itemIdGenerator: (item: any, index: number, items: any) => number
    itemTemplate: string | Template
    itemTemplateSelector: string | ((item: any, index: number, items: any) => string)
    itemTemplates: string | KeyedTemplate[]
    items: any[] | ItemsSource
    rowHeight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    separatorColor: Color
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/page/page.ts
type Page = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/page/page-common.ts
type PageBase = {
    actionBar: ActionBar
    actionBarHidden: boolean
    androidStatusBarBackground: Color
    backgroundSpanUnderStatusBar: boolean
    enableSwipeBackNavigation: boolean
    frame: Frame
    hasActionBar: boolean
    navigationContext: any
    page: PageDefinition
    statusBarStyle: "light" | "dark"
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/placeholder/placeholder.ts
type Placeholder = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/progress/progress.ts
type Progress = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/progress/progress-common.ts
type ProgressBase = {
    maxValue: number
    value: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/proxy-view-container/proxy-view-container.ts
type ProxyViewContainer = {
    android: any
    ios: any
    isLayoutRequested: boolean
    proxy: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/layout-base.ts
type LayoutBase = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/layout-base-common.ts
type LayoutBaseCommon = {
    clipToBounds: boolean
    isPassThroughParentEnabled: boolean
    padding: string | number | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    paddingBottom: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    paddingLeft: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    paddingRight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    paddingTop: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/repeater/repeater.ts
type Repeater = {
    android: any
    ios: any
    itemTemplate: string | Template
    items: any[] | ItemsSource
    itemsLayout: LayoutBase
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/scroll-view/scroll-view.ts
type ScrollView = {
    horizontalOffset: number
    scrollableHeight: number
    scrollableWidth: number
    verticalOffset: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/scroll-view/scroll-view-common.ts
type ScrollViewBase = {
    horizontalOffset: number
    isScrollEnabled: boolean
    orientation: "horizontal" | "vertical"
    scrollBarIndicatorVisible: boolean
    scrollableHeight: number
    scrollableWidth: number
    verticalOffset: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/search-bar/search-bar.ts
type SearchBar = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/search-bar/search-bar-common.ts
type SearchBarBase = {
    hint: string
    text: string
    textFieldBackgroundColor: Color
    textFieldHintColor: Color
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar.ts
type SegmentedBarItem = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar-common.ts
type SegmentedBarItemBase = {
    title: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar.ts
type SegmentedBar = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/segmented-bar/segmented-bar-common.ts
type SegmentedBarBase = {
    items: SegmentedBarItemDefinition[]
    selectedBackgroundColor: Color
    selectedIndex: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/slider/slider.ts
type Slider = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/slider/slider-common.ts
type SliderBase = {
    maxValue: number
    minValue: number
    value: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/switch/switch.ts
type Switch = {
    checked: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/switch/switch-common.ts
type SwitchBase = {
    checked: boolean
    offBackgroundColor: Color
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view.ts
type TabViewItem = {
    index: number
    tabItemSpec: any
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view-common.ts
type TabViewItemBase = {
    iconSource: string
    textTransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase"
    title: string
    view: View
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view.ts
type TabView = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-view/tab-view-common.ts
type TabViewBase = {
    androidOffscreenTabLimit: number
    androidSelectedTabHighlightColor: Color
    androidSwipeEnabled: boolean
    androidTabsPosition: "top" | "bottom"
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate"
    items: TabViewItemDefinition[]
    selectedIndex: number
    selectedTabTextColor: Color
    tabBackgroundColor: Color
    tabTextColor: Color
    tabTextFontSize: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tabs/tabs.ts
type Tabs = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tabs/tabs-common.ts
type TabsBase = {
    iOSTabBarItemsAlignment: "center" | "leading" | "justified" | "centerSelected"
    offscreenTabLimit: number
    swipeEnabled: boolean
    tabsPosition: "top" | "bottom"
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-field/text-field.ts
type TextField = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-field/text-field-common.ts
type TextFieldBase = {
    secure: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-view/text-view.ts
type TextView = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/text-view/text-view-common.ts
type TextViewBase = {
    maxLines: number
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/time-picker/time-picker.ts
type TimePicker = {
    updatingNativeValue: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/time-picker/time-picker-common.ts
type TimePickerBase = {
    hour: number
    maxHour: number
    maxMinute: number
    minHour: number
    minMinute: number
    minute: number
    minuteInterval: number
    time: Date
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/web-view/web-view.ts
type WebView = {
    canGoBack: boolean
    canGoForward: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/web-view/web-view-common.ts
type WebViewBase = {
    canGoBack: boolean
    canGoForward: boolean
    src: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view.ts
type View = {
    column: number
    columnSpan: number
    dock: "left" | "top" | "right" | "bottom"
    isLayoutRequired: boolean
    isLayoutValid: boolean
    left: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    row: number
    rowSpan: number
    top: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view-common.ts
type ViewCommon = {
    androidDynamicElevationOffset: number
    androidElevation: number
    automationText: string
    background: string
    backgroundColor: Color
    backgroundImage: string | LinearGradient
    backgroundPosition: string
    backgroundRepeat: "repeat" | "repeat-x" | "repeat-y" | "no-repeat"
    backgroundSize: string
    borderBottomColor: Color
    borderBottomLeftRadius: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderBottomRightRadius: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderBottomWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderColor: string | Color
    borderLeftColor: Color
    borderLeftWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderRadius: string | number | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderRightColor: Color
    borderRightWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderTopColor: Color
    borderTopLeftRadius: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderTopRightRadius: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderTopWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    borderWidth: string | number | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    color: Color
    css: string
    cssType: string
    height: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
    horizontalAlignment: "left" | "right" | "stretch" | "center"
    iosOverflowSafeArea: boolean
    iosOverflowSafeAreaEnabled: boolean
    isEnabled: boolean
    isLayoutRequired: boolean
    isLayoutValid: boolean
    isUserInteractionEnabled: boolean
    margin: string | number | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
    marginBottom: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
    marginLeft: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
    marginRight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
    marginTop: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
    minHeight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    minWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    modal: ViewCommon
    opacity: number
    originX: number
    originY: number
    perspective: number
    rotate: number
    rotateX: number
    rotateY: number
    scaleX: number
    scaleY: number
    textTransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase"
    translateX: number
    translateY: number
    verticalAlignment: "top" | "bottom" | "stretch" | "middle"
    visibility: "visible" | "hidden" | "collapse"
    width: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit | import("C:/dev/svelte/nativescriptSource...
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view.ts
type ContainerView = {
    iosOverflowSafeArea: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/core/view/view.ts
type CustomLayoutView = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/absolute-layout/absolute-layout.ts
type AbsoluteLayout = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/absolute-layout/absolute-layout-common.ts
type AbsoluteLayoutBase = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/dock-layout/dock-layout.ts
type DockLayout = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/dock-layout/dock-layout-common.ts
type DockLayoutBase = {
    stretchLastChild: boolean
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/flexbox-layout/flexbox-layout.ts
type FlexboxLayout = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/flexbox-layout/flexbox-layout-common.ts
type FlexboxLayoutBase = {
    alignContent: "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
    alignItems: "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
    flexDirection: "row" | "column" | "row-reverse" | "column-reverse"
    flexWrap: "nowrap" | "wrap" | "wrap-reverse"
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/grid-layout/grid-layout.ts
type GridLayout = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/grid-layout/grid-layout-common.ts
type GridLayoutBase = {
    columns: string
    rows: string
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/stack-layout/stack-layout.ts
type StackLayout = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/stack-layout/stack-layout-common.ts
type StackLayoutBase = {
    orientation: "horizontal" | "vertical"
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/wrap-layout/wrap-layout.ts
type WrapLayout = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/layouts/wrap-layout/wrap-layout-common.ts
type WrapLayoutBase = {
    effectiveItemHeight: number
    effectiveItemWidth: number
    itemHeight: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    itemWidth: number | "auto" | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthDipUnit | import("C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/styling/style-properties").LengthPxUnit
    orientation: "horizontal" | "vertical"
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-content-item/tab-content-item.ts
type TabContentItem = {
    index: number
    tabItemSpec: any
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-content-item/tab-content-item-common.ts
type TabContentItemBase = {

};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-strip/tab-strip.ts
type TabStrip = {
    highlightColor: Color
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate"
    isIconSizeFixed: boolean
    items: TabStripItem[]
    selectedItemColor: Color
    unSelectedItemColor: Color
};

//C:/dev/svelte/nativescriptSourceToJsxDef/nativescript_src/nativescript-core/ui/tab-navigation-base/tab-strip-item/tab-strip-item.ts
type TabStripItem = {
    iconClass: string
    iconSource: string
    image: Image
    label: Label
    title: string
};