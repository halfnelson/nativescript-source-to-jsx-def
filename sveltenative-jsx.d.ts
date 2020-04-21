type View = import("@nativescript/core/ui/core/view/view").View;
type NavigationButton = import("@nativescript/core/ui/action-bar/action-bar").NavigationButton;
type ActionItems = import("@nativescript/core/ui/action-bar/action-bar").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar/action-bar").AndroidActionBarSettings;
type PropertyChangeData = import("@nativescript/core/data/observable/observable").PropertyChangeData;
type LengthDipUnit = import("@nativescript/core/ui/styling/style-properties").LengthDipUnit;
type LengthPxUnit = import("@nativescript/core/ui/styling/style-properties").LengthPxUnit;
type Color = import("@nativescript/core/color/color").Color;
type LinearGradient = import("@nativescript/core/ui/styling/gradient").LinearGradient;
type LengthPercentUnit = import("@nativescript/core/ui/styling/style-properties").LengthPercentUnit;
type DoubleTapGestureEventData = import("@nativescript/core/ui/gestures/gestures").DoubleTapGestureEventData;
type PinchGestureEventData = import("@nativescript/core/ui/gestures/gestures").PinchGestureEventData;
type PanGestureEventData = import("@nativescript/core/ui/gestures/gestures").PanGestureEventData;
type SwipeGestureEventData = import("@nativescript/core/ui/gestures/gestures").SwipeGestureEventData;
type RotationGestureEventData = import("@nativescript/core/ui/gestures/gestures").RotationGestureEventData;
type GestureEventData = import("@nativescript/core/ui/gestures/gestures").GestureEventData;
type TouchGestureEventData = import("@nativescript/core/ui/gestures/gestures").TouchGestureEventData;
type EventData = import("@nativescript/core/data/observable/observable").EventData;
type ShownModallyData = import("@nativescript/core/ui/core/view/view").ShownModallyData;
type ViewCommon = import("@nativescript/core/ui/core/view/view-common").ViewCommon;
type LinearGradientLinearGradient = import("@nativescript/core/ui/styling/linear-gradient").LinearGradient;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type ViewBase = import("@nativescript/core/ui/core/view-base/view-base").ViewBase;
type Page = import("@nativescript/core/ui/page/page").Page;
type Style = import("@nativescript/core/ui/styling/style/style").Style;
type ActionBar = import("@nativescript/core/ui/action-bar/action-bar").ActionBar;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar/action-bar").IOSActionItemSettings;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar/action-bar").AndroidActionItemSettings;
type TabContentItem = import("@nativescript/core/ui/tab-navigation-base/tab-content-item/tab-content-item").TabContentItem;
type TabStrip = import("@nativescript/core/ui/tab-navigation-base/tab-strip/tab-strip").TabStrip;
type SelectedIndexChangedEventData = import("@nativescript/core/ui/bottom-navigation/bottom-navigation").SelectedIndexChangedEventData;
type TabNavigationBaseSelectedIndexChangedEventData = import("@nativescript/core/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base").SelectedIndexChangedEventData;
type FormattedString = import("@nativescript/core/ui/text-base/formatted-string").FormattedString;
type BackstackEntry = import("@nativescript/core/ui/frame/frame").BackstackEntry;
type NavigationEntry = import("@nativescript/core/ui/frame/frame").NavigationEntry;
type NavigationTransition = import("@nativescript/core/ui/frame/frame").NavigationTransition;
type AndroidFrame = import("@nativescript/core/ui/frame/frame").AndroidFrame;
type iOSFrame = import("@nativescript/core/ui/frame/frame").iOSFrame;
type ImageSource = import("@nativescript/core/image-source/image-source").ImageSource;
type ItemsSource = import("@nativescript/core/ui/list-picker/list-picker").ItemsSource;
type ListViewItemsSource = import("@nativescript/core/ui/list-view/list-view").ItemsSource;
type Template = import("@nativescript/core/ui/core/view/view").Template;
type KeyedTemplate = import("@nativescript/core/ui/core/view/view").KeyedTemplate;
type ItemEventData = import("@nativescript/core/ui/list-view/list-view").ItemEventData;
type Frame = import("@nativescript/core/ui/frame/frame").Frame;
type NavigatedData = import("@nativescript/core/ui/page/page").NavigatedData;
type CreateViewEventData = import("@nativescript/core/ui/placeholder/placeholder").CreateViewEventData;
type ScrollEventData = import("@nativescript/core/ui/scroll-view/scroll-view").ScrollEventData;
type SegmentedBarItem = import("@nativescript/core/ui/segmented-bar/segmented-bar").SegmentedBarItem;
type SegmentedBarSelectedIndexChangedEventData = import("@nativescript/core/ui/segmented-bar/segmented-bar").SelectedIndexChangedEventData;
type TabViewItem = import("@nativescript/core/ui/tab-view/tab-view").TabViewItem;
type TabViewSelectedIndexChangedEventData = import("@nativescript/core/ui/tab-view/tab-view").SelectedIndexChangedEventData;
type LoadEventData = import("@nativescript/core/ui/web-view/web-view").LoadEventData;
type TabStripItem = import("@nativescript/core/ui/tab-navigation-base/tab-strip-item/tab-strip-item").TabStripItem;
type TabStripItemEventData = import("@nativescript/core/ui/tab-navigation-base/tab-strip/tab-strip").TabStripItemEventData;
type Label = import("@nativescript/core/ui/label/label").Label;
type Image = import("@nativescript/core/ui/image/image").Image;

// ui/action-bar/action-bar.d.ts
type ActionBarAttributes =  ViewAttributes & {
    actionitems: ActionItems;
    android: AndroidActionBarSettings;
    androidcontentinset: string | number | LengthDipUnit | LengthPxUnit;
    androidcontentinsetleft: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    androidcontentinsetright: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    effectivecontentinsetleft: number;
    effectivecontentinsetright: number;
    flat: string | false | true;
    ios: any;
    iosiconrenderingmode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationbutton: NavigationButton;
    onflatchange: (args: PropertyChangeData) => void;
    oniosiconrenderingmodechange: (args: PropertyChangeData) => void;
    ontitlechange: (args: PropertyChangeData) => void;
    title: string;
    titleview: View;
};

// ui/core/view/view.d.ts
type ViewAttributes =  ViewBaseAttributes & {
    android: any;
    androiddynamicelevationoffset: string | number;
    androidelevation: string | number;
    automationtext: string;
    background: string;
    backgroundcolor: string | Color;
    backgroundimage: string | LinearGradientLinearGradient;
    backgroundposition: string;
    backgroundrepeat: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
    backgroundsize: string;
    bindingcontext: any;
    borderbottomcolor: string | Color;
    borderbottomleftradius: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderbottomrightradius: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderbottomwidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordercolor: string | Color;
    borderleftcolor: string | Color;
    borderleftwidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderradius: string | number | LengthDipUnit | LengthPxUnit;
    borderrightcolor: string | Color;
    borderrightwidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordertopcolor: string | Color;
    bordertopleftradius: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordertoprightradius: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    bordertopwidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    borderwidth: string | number | LengthDipUnit | LengthPxUnit;
    color: string | Color;
    column: string | number;
    columnspan: string | number;
    css: string;
    cssclasses: Set<string>;
    csspseudoclasses: Set<string>;
    csstype: string;
    dock: "left" | "top" | "right" | "bottom";
    height: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    horizontalalignment: "left" | "right" | "center" | "stretch";
    ios: any;
    iosoverflowsafearea: false | true;
    iosoverflowsafeareaenabled: false | true;
    isenabled: false | true;
    islayoutrequired: false | true;
    islayoutvalid: false | true;
    isuserinteractionenabled: false | true;
    left: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    margin: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginbottom: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginleft: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    marginright: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    margintop: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
    minheight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    minwidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    modal: View;
    onandroidbackpressed: (args: EventData) => void;
    oncolumnchange: (args: PropertyChangeData) => void;
    oncolumnspanchange: (args: PropertyChangeData) => void;
    ondockchange: (args: PropertyChangeData) => void;
    ondoubletap: (arg: DoubleTapGestureEventData) => any;
    onleftchange: (args: PropertyChangeData) => void;
    onloaded: (args: EventData) => void;
    onlongpress: (arg: GestureEventData) => any;
    onpan: (arg: PanGestureEventData) => any;
    onpinch: (arg: PinchGestureEventData) => any;
    onrotation: (arg: RotationGestureEventData) => any;
    onrowchange: (args: PropertyChangeData) => void;
    onrowspanchange: (args: PropertyChangeData) => void;
    onshowingmodally: (args: ShownModallyData) => void;
    onshownmodally: (args: ShownModallyData) => void;
    onswipe: (arg: SwipeGestureEventData) => any;
    ontap: (arg: DoubleTapGestureEventData) => any;
    ontopchange: (args: PropertyChangeData) => void;
    ontouch: (arg: TouchGestureEventData) => any;
    onunloaded: (args: EventData) => void;
    opacity: string | number;
    originx: number;
    originy: number;
    perspective: string | number;
    rotate: string | number;
    rotatex: string | number;
    rotatey: string | number;
    row: string | number;
    rowspan: string | number;
    scalex: string | number;
    scaley: string | number;
    texttransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    top: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    translatex: string | number;
    translatey: string | number;
    verticalalignment: "top" | "bottom" | "stretch" | "middle";
    visibility: "visible" | "hidden" | "collapse";
    width: string | number | "auto" | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
};

// ui/core/view-base/view-base.d.ts
type ViewBaseAttributes =  ObservableAttributes & {
    alignself: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    android: any;
    automationtext: string;
    bindingcontext: string | any;
    classname: string;
    col: number;
    colspan: number;
    column: number;
    columnspan: number;
    cssclasses: Set<string>;
    csspseudoclasses: Set<string>;
    dock: "left" | "top" | "right" | "bottom";
    domnode: DOMNode;
    effectiveborderbottomwidth: number;
    effectiveborderleftwidth: number;
    effectiveborderrightwidth: number;
    effectivebordertopwidth: number;
    effectiveheight: number;
    effectiveleft: number;
    effectivemarginbottom: number;
    effectivemarginleft: number;
    effectivemarginright: number;
    effectivemargintop: number;
    effectiveminheight: number;
    effectiveminwidth: number;
    effectivepaddingbottom: number;
    effectivepaddingleft: number;
    effectivepaddingright: number;
    effectivepaddingtop: number;
    effectivetop: number;
    effectivewidth: number;
    flexgrow: number;
    flexshrink: number;
    flexwrapbefore: false | true;
    id: string;
    ios: any;
    iosoverflowsafearea: string | false | true;
    iosoverflowsafeareaenabled: string | false | true;
    iscollapsed: false | true;
    isenabled: string | false | true;
    isloaded: false | true;
    isuserinteractionenabled: string | false | true;
    left: number | "auto" | LengthDipUnit | LengthPxUnit;
    nativeview: any;
    onautomationtextchange: (args: PropertyChangeData) => void;
    onbindingcontextchange: (args: PropertyChangeData) => void;
    onclassnamechange: (args: PropertyChangeData) => void;
    onidchange: (args: PropertyChangeData) => void;
    oniosoverflowsafeareachange: (args: PropertyChangeData) => void;
    oniosoverflowsafeareaenabledchange: (args: PropertyChangeData) => void;
    onisenabledchange: (args: PropertyChangeData) => void;
    onisuserinteractionenabledchange: (args: PropertyChangeData) => void;
    onoriginxchange: (args: PropertyChangeData) => void;
    onoriginychange: (args: PropertyChangeData) => void;
    order: number;
    originx: string | number;
    originy: string | number;
    page: Page;
    parent: ViewBase;
    parentnode: ViewBase;
    recyclenativeview: "always" | "never" | "auto";
    row: number;
    rowspan: number;
    style: string | Style;
    top: number | "auto" | LengthDipUnit | LengthPxUnit;
    typename: string;
    viewcontroller: any;
};

// data/observable/observable.d.ts
type ObservableAttributes =  {
    onpropertychange: (data: EventData) => void;
};

// ui/action-bar/action-bar.d.ts
type ActionItemAttributes =  ViewBaseAttributes & {
    actionbar: ActionBar;
    actionview: View;
    android: AndroidActionItemSettings;
    icon: string;
    ios: IOSActionItemSettings;
    oniconchange: (args: PropertyChangeData) => void;
    ontap: (args: EventData) => void;
    ontextchange: (args: PropertyChangeData) => void;
    onvisibilitychange: (args: PropertyChangeData) => void;
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
    onbusychange: (args: PropertyChangeData) => void;
};

// ui/border/border.d.ts
type BorderAttributes =  ContentViewAttributes & {
    cornerradius: number;
};

// ui/content-view/content-view.d.ts
type ContentViewAttributes =  ViewAttributes & {
    content: View;
    layoutview: View;
};

// ui/bottom-navigation/bottom-navigation.d.ts
type BottomNavigationAttributes =  TabNavigationBaseAttributes & {
    android: any;
    ios: any;
    items: TabContentItem[];
    onselectedindexchanged: (args: SelectedIndexChangedEventData) => void;
    selectedindex: number;
    tabstrip: TabStrip;
};

// ui/tab-navigation-base/tab-navigation-base/tab-navigation-base.d.ts
type TabNavigationBaseAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    items: string | TabContentItem[];
    onitemschange: (args: PropertyChangeData) => void;
    onselectedindexchange: (args: PropertyChangeData) => void;
    onselectedindexchanged: (args: TabNavigationBaseSelectedIndexChangedEventData) => void;
    ontabstripchange: (args: PropertyChangeData) => void;
    selectedindex: string | number;
    tabstrip: string | TabStrip;
};

// ui/button/button.d.ts
type ButtonAttributes =  TextBaseAttributes & {
    android: any;
    ios: any;
    ontap: (args: EventData) => void;
    textwrap: false | true;
};

// ui/text-base/text-base.d.ts
type TextBaseAttributes =  ViewAttributes & {
    fontfamily: string;
    fontsize: string | number;
    fontstyle: "normal" | "italic";
    fontweight: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    formattedtext: string | FormattedString;
    letterspacing: string | number;
    lineheight: string | number;
    onformattedtextchange: (args: PropertyChangeData) => void;
    ontextchange: (args: PropertyChangeData) => void;
    padding: string | number | LengthDipUnit | LengthPxUnit;
    paddingbottom: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingleft: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingright: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingtop: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    text: string;
    textalignment: "left" | "right" | "center" | "initial";
    textdecoration: "none" | "underline" | "line-through" | "underline line-through";
    texttransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whitespace: "initial" | "normal" | "nowrap";
};

// ui/date-picker/date-picker.d.ts
type DatePickerAttributes =  ViewAttributes & {
    android: any;
    date: string | Date;
    day: string | number;
    ios: any;
    maxdate: string | Date;
    mindate: string | Date;
    month: string | number;
    ondatechange: (args: PropertyChangeData) => void;
    ondaychange: (args: PropertyChangeData) => void;
    onmaxdatechange: (args: PropertyChangeData) => void;
    onmindatechange: (args: PropertyChangeData) => void;
    onmonthchange: (args: PropertyChangeData) => void;
    onyearchange: (args: PropertyChangeData) => void;
    year: string | number;
};

// ui/frame/frame.d.ts
type FrameAttributes =  ViewAttributes & {
    actionbarvisibility: "always" | "never" | "auto";
    android: AndroidFrame;
    animated: false | true;
    backstack: BackstackEntry[];
    currententry: NavigationEntry;
    currentpage: Page;
    defaultpage: string;
    ios: iOSFrame;
    navigationbarheight: number;
    onactionbarvisibilitychange: (args: PropertyChangeData) => void;
    ondefaultpagechange: (args: PropertyChangeData) => void;
    transition: NavigationTransition;
};

// ui/html-view/html-view.d.ts
type HtmlViewAttributes =  ViewAttributes & {
    android: any;
    html: string;
    ios: any;
    onhtmlchange: (args: PropertyChangeData) => void;
};

// ui/image/image.d.ts
type ImageAttributes =  ViewAttributes & {
    android: any;
    decodeheight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    decodewidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    imagesource: string | ImageSource;
    ios: any;
    isloading: string | false | true;
    loadmode: "sync" | "async";
    ondecodeheightchange: (args: PropertyChangeData) => void;
    ondecodewidthchange: (args: PropertyChangeData) => void;
    onimagesourcechange: (args: PropertyChangeData) => void;
    onisloadingchange: (args: PropertyChangeData) => void;
    onloadmodechange: (args: PropertyChangeData) => void;
    onsrcchange: (args: PropertyChangeData) => void;
    onstretchchange: (args: PropertyChangeData) => void;
    src: string | any;
    stretch: "none" | "aspectFill" | "aspectFit" | "fill";
    tintcolor: string | Color;
};

// ui/label/label.d.ts
type LabelAttributes =  TextBaseAttributes & {
    android: any;
    ios: any;
    textwrap: string | false | true;
};

// ui/list-picker/list-picker.d.ts
type ListPickerAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    isitemssource: false | true;
    items: string | any[] | ItemsSource;
    onitemschange: (args: PropertyChangeData) => void;
    onselectedindexchange: (args: PropertyChangeData) => void;
    onselectedvaluechange: (args: PropertyChangeData) => void;
    ontextfieldchange: (args: PropertyChangeData) => void;
    onvaluefieldchange: (args: PropertyChangeData) => void;
    selectedindex: string | number;
    selectedvalue: string;
    textfield: string;
    valuefield: string;
};

// ui/list-view/list-view.d.ts
type ListViewAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    iosestimatedrowheight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemidgenerator: (item: any, index: number, items: any) => number;
    itemtemplate: string | Template;
    itemtemplateselector: string | ((item: any, index: number, items: any) => string);
    itemtemplates: string | KeyedTemplate[];
    items: string | any[] | ListViewItemsSource;
    oniosestimatedrowheightchange: (args: PropertyChangeData) => void;
    onitemloading: (args: ItemEventData) => void;
    onitemtap: (args: ItemEventData) => void;
    onitemtemplatechange: (args: PropertyChangeData) => void;
    onitemtemplateschange: (args: PropertyChangeData) => void;
    onitemschange: (args: PropertyChangeData) => void;
    onloadmoreitems: (args: EventData) => void;
    onrowheightchange: (args: PropertyChangeData) => void;
    rowheight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    separatorcolor: string | Color;
};

// ui/page/page.d.ts
type PageAttributes =  ContentViewAttributes & {
    actionbar: ActionBar;
    actionbarhidden: string | false | true;
    androidstatusbarbackground: string | Color;
    backgroundspanunderstatusbar: string | false | true;
    enableswipebacknavigation: string | false | true;
    frame: Frame;
    hasactionbar: false | true;
    navigationcontext: any;
    onactionbarhiddenchange: (args: PropertyChangeData) => void;
    onbackgroundspanunderstatusbarchange: (args: PropertyChangeData) => void;
    onenableswipebacknavigationchange: (args: PropertyChangeData) => void;
    onnavigatedfrom: (args: NavigatedData) => void;
    onnavigatedto: (args: NavigatedData) => void;
    onnavigatingfrom: (args: NavigatedData) => void;
    onnavigatingto: (args: NavigatedData) => void;
    page: Page;
    statusbarstyle: "light" | "dark";
};

// ui/placeholder/placeholder.d.ts
type PlaceholderAttributes =  ViewAttributes & {
    oncreatingview: (args: CreateViewEventData) => void;
};

// ui/progress/progress.d.ts
type ProgressAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    maxvalue: string | number;
    onmaxvaluechange: (args: PropertyChangeData) => void;
    onvaluechange: (args: PropertyChangeData) => void;
    value: string | number;
};

// ui/proxy-view-container/proxy-view-container.d.ts
type ProxyViewContainerAttributes =  LayoutBaseAttributes & {
    onproxychange: (args: PropertyChangeData) => void;
    proxy: string;
};

// ui/layouts/layout-base.d.ts
type LayoutBaseAttributes =  CustomLayoutViewAttributes & {
    cliptobounds: string | false | true;
    ispassthroughparentenabled: string | false | true;
    oncliptoboundschange: (args: PropertyChangeData) => void;
    onispassthroughparentenabledchange: (args: PropertyChangeData) => void;
    padding: string | number | LengthDipUnit | LengthPxUnit;
    paddingbottom: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingleft: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingright: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    paddingtop: string | number | "auto" | LengthDipUnit | LengthPxUnit;
};

// ui/core/view/view.d.ts
type CustomLayoutViewAttributes =  ContainerViewAttributes & {

};

// ui/core/view/view.d.ts
type ContainerViewAttributes =  ViewAttributes & {
    iosoverflowsafearea: false | true;
};

// ui/scroll-view/scroll-view.d.ts
type ScrollViewAttributes =  ContentViewAttributes & {
    horizontaloffset: number;
    isscrollenabled: string | false | true;
    onisscrollenabledchange: (args: PropertyChangeData) => void;
    onorientationchange: (args: PropertyChangeData) => void;
    onscroll: (args: ScrollEventData) => void;
    onscrollbarindicatorvisiblechange: (args: PropertyChangeData) => void;
    orientation: "horizontal" | "vertical";
    scrollbarindicatorvisible: string | false | true;
    scrollableheight: number;
    scrollablewidth: number;
    verticaloffset: number;
};

// ui/search-bar/search-bar.d.ts
type SearchBarAttributes =  ViewAttributes & {
    android: any;
    hint: string;
    ios: any;
    onclose: (args: EventData) => void;
    onhintchange: (args: PropertyChangeData) => void;
    onsubmit: (args: EventData) => void;
    ontextchange: (args: PropertyChangeData) => void;
    ontextfieldbackgroundcolorchange: (args: PropertyChangeData) => void;
    ontextfieldhintcolorchange: (args: PropertyChangeData) => void;
    text: string;
    textfieldbackgroundcolor: string | Color;
    textfieldhintcolor: string | Color;
};

// ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarItemAttributes =  ViewBaseAttributes & {
    title: string;
};

// ui/segmented-bar/segmented-bar.d.ts
type SegmentedBarAttributes =  ViewAttributes & {
    items: string | SegmentedBarItem[];
    onitemschange: (args: PropertyChangeData) => void;
    onselectedindexchange: (args: PropertyChangeData) => void;
    onselectedindexchanged: (args: SegmentedBarSelectedIndexChangedEventData) => void;
    selectedbackgroundcolor: string | Color;
    selectedindex: string | number;
};

// ui/slider/slider.d.ts
type SliderAttributes =  ViewAttributes & {
    android: any;
    ios: any;
    maxvalue: string | number;
    minvalue: string | number;
    onmaxvaluechange: (args: PropertyChangeData) => void;
    onminvaluechange: (args: PropertyChangeData) => void;
    onvaluechange: (args: PropertyChangeData) => void;
    value: string | number;
};

// ui/switch/switch.d.ts
type SwitchAttributes =  ViewAttributes & {
    android: any;
    checked: string | false | true;
    ios: any;
    offbackgroundcolor: string | Color;
    oncheckedchange: (args: PropertyChangeData) => void;
    onoffbackgroundcolorchange: (args: PropertyChangeData) => void;
};

// ui/tab-view/tab-view.d.ts
type TabViewItemAttributes =  ViewBaseAttributes & {
    canbeloaded: false | true;
    iconsource: string;
    texttransform: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title: string;
    view: View;
};

// ui/tab-view/tab-view.d.ts
type TabViewAttributes =  ViewAttributes & {
    android: any;
    androidoffscreentablimit: string | number;
    androidselectedtabhighlightcolor: string | Color;
    androidswipeenabled: string | false | true;
    androidtabsposition: "top" | "bottom";
    ios: any;
    iosiconrenderingmode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    items: string | TabViewItem[];
    onandroidoffscreentablimitchange: (args: PropertyChangeData) => void;
    onandroidswipeenabledchange: (args: PropertyChangeData) => void;
    onandroidtabspositionchange: (args: PropertyChangeData) => void;
    oniosiconrenderingmodechange: (args: PropertyChangeData) => void;
    onitemschange: (args: PropertyChangeData) => void;
    onselectedindexchange: (args: PropertyChangeData) => void;
    onselectedindexchanged: (args: TabViewSelectedIndexChangedEventData) => void;
    selectedindex: string | number;
    selectedtabtextcolor: string | Color;
    tabbackgroundcolor: string | Color;
    tabtextcolor: string | Color;
    tabtextfontsize: string | number;
};

// ui/tabs/tabs.d.ts
type TabsAttributes =  TabNavigationBaseAttributes & {
    android: any;
    iostabbaritemsalignment: "center" | "leading" | "justified" | "centerSelected";
    ios: any;
    items: TabContentItem[];
    offscreentablimit: string | number;
    oniostabbaritemsalignmentchange: (args: PropertyChangeData) => void;
    onoffscreentablimitchange: (args: PropertyChangeData) => void;
    onselectedindexchanged: (args: TabNavigationBaseSelectedIndexChangedEventData) => void;
    onswipeenabledchange: (args: PropertyChangeData) => void;
    ontabspositionchange: (args: PropertyChangeData) => void;
    selectedindex: number;
    swipeenabled: string | false | true;
    tabstrip: TabStrip;
    tabsposition: "top" | "bottom";
};

// ui/text-field/text-field.d.ts
type TextFieldAttributes =  EditableTextBaseAttributes & {
    android: any;
    ios: any;
    onsecurechange: (args: PropertyChangeData) => void;
    secure: string | false | true;
};

// ui/editable-text-base/editable-text-base.d.ts
type EditableTextBaseAttributes =  TextBaseAttributes & {
    autocapitalizationtype: "none" | "words" | "sentences" | "allcharacters";
    autocorrect: string | false | true;
    editable: string | false | true;
    hint: string;
    keyboardtype: "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxlength: string | number;
    maxlines: string | number;
    onautocapitalizationtypechange: (args: PropertyChangeData) => void;
    onautocorrectchange: (args: PropertyChangeData) => void;
    oneditablechange: (args: PropertyChangeData) => void;
    onhintchange: (args: PropertyChangeData) => void;
    onkeyboardtypechange: (args: PropertyChangeData) => void;
    onmaxlengthchange: (args: PropertyChangeData) => void;
    onmaxlineschange: (args: PropertyChangeData) => void;
    onreturnkeytypechange: (args: PropertyChangeData) => void;
    onupdatetexttriggerchange: (args: PropertyChangeData) => void;
    returnkeytype: "done" | "next" | "go" | "search" | "send";
    updatetexttrigger: "focusLost" | "textChanged";
};

// ui/text-view/text-view.d.ts
type TextViewAttributes =  EditableTextBaseAttributes & {
    android: any;
    ios: any;
    maxlines: number;
};

// ui/time-picker/time-picker.d.ts
type TimePickerAttributes =  ViewAttributes & {
    android: any;
    hour: string | number;
    ios: any;
    maxhour: string | number;
    maxminute: string | number;
    minhour: string | number;
    minminute: string | number;
    minute: string | number;
    minuteinterval: string | number;
    onhourchange: (args: PropertyChangeData) => void;
    onmaxhourchange: (args: PropertyChangeData) => void;
    onmaxminutechange: (args: PropertyChangeData) => void;
    onminhourchange: (args: PropertyChangeData) => void;
    onminminutechange: (args: PropertyChangeData) => void;
    onminutechange: (args: PropertyChangeData) => void;
    onminuteintervalchange: (args: PropertyChangeData) => void;
    ontimechange: (args: PropertyChangeData) => void;
    time: string | Date;
};

// ui/web-view/web-view.d.ts
type WebViewAttributes =  ViewAttributes & {
    android: any;
    cangoback: false | true;
    cangoforward: false | true;
    ios: any;
    onloadfinished: (args: LoadEventData) => void;
    onloadstarted: (args: LoadEventData) => void;
    src: string;
};

// ui/layouts/absolute-layout/absolute-layout.d.ts
type AbsoluteLayoutAttributes =  LayoutBaseAttributes & {

};

// ui/layouts/dock-layout/dock-layout.d.ts
type DockLayoutAttributes =  LayoutBaseAttributes & {
    onstretchlastchildchange: (args: PropertyChangeData) => void;
    stretchlastchild: string | false | true;
};

// ui/layouts/flexbox-layout/flexbox-layout.d.ts
type FlexboxLayoutAttributes =  LayoutBaseAttributes & {
    aligncontent: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
    alignitems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexdirection: "row" | "column" | "row-reverse" | "column-reverse";
    flexwrap: "nowrap" | "wrap" | "wrap-reverse";
    justifycontent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
};

// ui/layouts/grid-layout/grid-layout.d.ts
type GridLayoutAttributes =  LayoutBaseAttributes & {
    columns: string;
    rows: string;
};

// ui/layouts/stack-layout/stack-layout.d.ts
type StackLayoutAttributes =  LayoutBaseAttributes & {
    onorientationchange: (args: PropertyChangeData) => void;
    orientation: "horizontal" | "vertical";
};

// ui/layouts/wrap-layout/wrap-layout.d.ts
type WrapLayoutAttributes =  LayoutBaseAttributes & {
    effectiveitemheight: number;
    effectiveitemwidth: number;
    itemheight: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    itemwidth: string | number | "auto" | LengthDipUnit | LengthPxUnit;
    onitemheightchange: (args: PropertyChangeData) => void;
    onitemwidthchange: (args: PropertyChangeData) => void;
    onorientationchange: (args: PropertyChangeData) => void;
    orientation: "horizontal" | "vertical";
};

// ui/tab-navigation-base/tab-content-item/tab-content-item.d.ts
type TabContentItemAttributes =  ContentViewAttributes & {
    canbeloaded: false | true;
};

// ui/tab-navigation-base/tab-strip/tab-strip.d.ts
type TabStripAttributes =  ViewAttributes & {
    highlightcolor: string | Color;
    iosiconrenderingmode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    isiconsizefixed: string | false | true;
    items: string | TabStripItem[];
    onhighlightcolorchange: (args: PropertyChangeData) => void;
    oniosiconrenderingmodechange: (args: PropertyChangeData) => void;
    onisiconsizefixedchange: (args: PropertyChangeData) => void;
    onitemtap: (args: TabStripItemEventData) => void;
    onitemschange: (args: PropertyChangeData) => void;
    onselecteditemcolorchange: (args: PropertyChangeData) => void;
    onunselecteditemcolorchange: (args: PropertyChangeData) => void;
    selecteditemcolor: string | Color;
    unselecteditemcolor: string | Color;
};

// ui/tab-navigation-base/tab-strip-item/tab-strip-item.d.ts
type TabStripItemAttributes =  ViewAttributes & {
    iconclass: string;
    iconsource: string;
    image: Image;
    label: Label;
    ontap: (args: EventData) => void;
    title: string;
};


declare namespace svelteNative.JSX {
    /* svelte2tsx JSX */
    interface ElementClass {
      $$prop_def: any;
    }
  
    interface ElementsProperty {
      $$prop_def: any; // specify the property name to use
    }
  
    interface Intrinsics {}

    interface IntrinsicElements {
        actionbar: ActionBarAttributes;
        actionitem: ActionItemAttributes;
        navigationbutton: NavigationButtonAttributes;
        activityindicator: ActivityIndicatorAttributes;
        border: BorderAttributes;
        bottomnavigation: BottomNavigationAttributes;
        button: ButtonAttributes;
        contentview: ContentViewAttributes;
        datepicker: DatePickerAttributes;
        frame: FrameAttributes;
        htmlview: HtmlViewAttributes;
        image: ImageAttributes;
        label: LabelAttributes;
        listpicker: ListPickerAttributes;
        listview: ListViewAttributes;
        page: PageAttributes;
        placeholder: PlaceholderAttributes;
        progress: ProgressAttributes;
        proxyviewcontainer: ProxyViewContainerAttributes;
        scrollview: ScrollViewAttributes;
        searchbar: SearchBarAttributes;
        segmentedbaritem: SegmentedBarItemAttributes;
        segmentedbar: SegmentedBarAttributes;
        slider: SliderAttributes;
        switch: SwitchAttributes;
        tabviewitem: TabViewItemAttributes;
        tabview: TabViewAttributes;
        tabs: TabsAttributes;
        textfield: TextFieldAttributes;
        textview: TextViewAttributes;
        timepicker: TimePickerAttributes;
        webview: WebViewAttributes;
        view: ViewAttributes;
        containerview: ContainerViewAttributes;
        customlayoutview: CustomLayoutViewAttributes;
        absolutelayout: AbsoluteLayoutAttributes;
        docklayout: DockLayoutAttributes;
        flexboxlayout: FlexboxLayoutAttributes;
        gridlayout: GridLayoutAttributes;
        stacklayout: StackLayoutAttributes;
        wraplayout: WrapLayoutAttributes;
        tabcontentitem: TabContentItemAttributes;
        tabstrip: TabStripAttributes;
        tabstripitem: TabStripItemAttributes;
        [name: string]: { [name: string]: any };
    }
}
