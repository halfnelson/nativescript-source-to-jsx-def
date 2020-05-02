type CartesianAxis = import("nativescript-ui-chart/index").CartesianAxis;
type ChartAnnotationZPosition = import("nativescript-ui-chart/index").ChartAnnotationZPosition;
type ChartAxisDateTimeComponent = import("nativescript-ui-chart/index").ChartAxisDateTimeComponent;
type ChartAxisHorizontalLocation = import("nativescript-ui-chart/index").ChartAxisHorizontalLocation;
type ChartAxisLabelFitMode = import("nativescript-ui-chart/index").ChartAxisLabelFitMode;
type ChartAxisLabelLayoutMode = import("nativescript-ui-chart/index").ChartAxisLabelLayoutMode;
type ChartAxisLabelVisibility = import("nativescript-ui-chart/index").ChartAxisLabelVisibility;
type ChartAxisPlotMode = import("nativescript-ui-chart/index").ChartAxisPlotMode;
type ChartAxisVerticalLocation = import("nativescript-ui-chart/index").ChartAxisVerticalLocation;
type ChartFontStyle = import("nativescript-ui-chart/index").ChartFontStyle;
type ChartLegendOffsetOrigin = import("nativescript-ui-chart/index").ChartLegendOffsetOrigin;
type ChartLegendPosition = import("nativescript-ui-chart/index").ChartLegendPosition;
type ChartPaletteSeriesState = import("nativescript-ui-chart/index").ChartPaletteSeriesState;
type ChartPublicEnumChartAxisLabelFitMode = import("nativescript-ui-chart/misc/chart-public-enum").ChartAxisLabelFitMode;
type ChartPublicEnumChartAxisLabelLayoutMode = import("nativescript-ui-chart/misc/chart-public-enum").ChartAxisLabelLayoutMode;
type ChartSelectionMode = import("nativescript-ui-chart/index").ChartSelectionMode;
type ChartSeriesPaletteMode = import("nativescript-ui-chart/index").ChartSeriesPaletteMode;
type ChartSeriesSelectionMode = import("nativescript-ui-chart/index").ChartSeriesSelectionMode;
type ChartSeriesStackMode = import("nativescript-ui-chart/index").ChartSeriesStackMode;
type ChartTrackballSnapMode = import("nativescript-ui-chart/index").ChartTrackballSnapMode;
type Color = import("@nativescript/core/color/color").Color;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array/observable-array").ObservableArray<T1>;
type Palette = import("nativescript-ui-chart/index").Palette;
type PaletteEntry = import("nativescript-ui-chart/index").PaletteEntry;
type PointLabelStyle = import("nativescript-ui-chart/index").PointLabelStyle;
type Property<T1, T2> = import("@nativescript/core/ui/core/properties/properties").Property<T1, T2>;
type PropertyChangeData = import("@nativescript/core/data/observable/observable").PropertyChangeData;
type RadCartesianChartGrid = import("nativescript-ui-chart/index").RadCartesianChartGrid;
type RadLegendView = import("nativescript-ui-chart/index").RadLegendView;
type Trackball = import("nativescript-ui-chart/index").Trackball;

// index.d.ts
type AreaSeriesAttributes = CategoricalSeriesAttributes & {

};

// index.d.ts
type BarSeriesAttributes = CategoricalSeriesAttributes & {
    maxbarsize?: string | number; // DynamicPropertyRegistration index.d.ts
    minbarsize?: string | number; // DynamicPropertyRegistration index.d.ts
    onMaxBarSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMinBarSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type BubbleSeriesAttributes = CategoricalSeriesAttributes & {
    bubblescale?: string | number; // DynamicPropertyRegistration index.d.ts
    bubblesizeproperty?: string; // DynamicPropertyRegistration index.d.ts
    onBubbleScaleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onBubbleSizePropertyChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type CandlestickSeriesAttributes = OhlcSeriesAttributes & {
    fillcolors?: string | Color[]; // DynamicPropertyRegistration chart-series.android.d.ts
    onFillColorsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-series.android.d.ts
};

// index.d.ts
type CartesianAxisAttributes = ViewBaseAttributes & {
    allowpan?: string | boolean; // DynamicPropertyRegistration index.d.ts
    allowzoom?: string | boolean; // DynamicPropertyRegistration index.d.ts
    hidden?: string | boolean; // DynamicPropertyRegistration index.d.ts
    horizontallocation?: ChartAxisHorizontalLocation; // DynamicPropertyRegistration index.d.ts
    id?: string; // DynamicPropertyRegistration index.d.ts
    ios?: any; // InstanceProperty index.d.ts
    labelbackgroundcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    labelbordercolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    labelborderwidth?: string | number; // DynamicPropertyRegistration index.d.ts
    labelfitmode?: ChartAxisLabelFitMode; // DynamicPropertyRegistration index.d.ts
    labelformat?: string | any; // DynamicPropertyRegistration index.d.ts
    labellayoutmode?: ChartAxisLabelLayoutMode; // DynamicPropertyRegistration index.d.ts
    labellayoutmodeproperty?: Property<CartesianAxis, ChartAxisLabelLayoutMode>; // InstanceProperty index.d.ts
    labelmargin?: string | any; // DynamicPropertyRegistration index.d.ts
    labelrotationangle?: string | any; // DynamicPropertyRegistration index.d.ts
    labelsize?: string | any; // DynamicPropertyRegistration index.d.ts
    labeltextcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    linecolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    linehidden?: string | boolean; // DynamicPropertyRegistration index.d.ts
    linethickness?: string | number; // DynamicPropertyRegistration index.d.ts
    onAllowPanChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onAllowZoomChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHiddenChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalLocationChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onIdChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelBackgroundColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelBorderColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelBorderWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelFitModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelLayoutModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelMarginChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelRotationAngleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelTextColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLineColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLineHiddenChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLineThicknessChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTicksColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTicksHiddenChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTicksLengthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTicksOffsetChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTicksThicknessChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalLocationChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    tickscolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    tickshidden?: string | boolean; // DynamicPropertyRegistration index.d.ts
    tickslength?: string | number; // DynamicPropertyRegistration index.d.ts
    ticksoffset?: string | number; // DynamicPropertyRegistration index.d.ts
    ticksthickness?: string | number; // DynamicPropertyRegistration index.d.ts
    verticallocation?: ChartAxisVerticalLocation; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type CartesianChartAnnotationAttributes = ViewBaseAttributes & {
    axisid?: string; // DynamicPropertyRegistration index.d.ts
    hidden?: string | boolean; // DynamicPropertyRegistration index.d.ts
    onAxisIdChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHiddenChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeDashPatternChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onZPositionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    strokecolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    strokedashpattern?: string; // DynamicPropertyRegistration index.d.ts
    strokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
    zposition?: ChartAnnotationZPosition; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type CartesianSeriesAttributes = ChartSeriesAttributes & {
    fillcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    horizontalaxis?: string | CartesianAxis; // DynamicPropertyRegistration index.d.ts
    onFillColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalAxisChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPaletteModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalAxisChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    palettemode?: ChartSeriesPaletteMode; // DynamicPropertyRegistration index.d.ts
    strokecolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    strokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
    verticalaxis?: string | CartesianAxis; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type CategoricalAxisAttributes = CartesianAxisAttributes & {
    firstlabelvisibility?: ChartAxisLabelVisibility; // DynamicPropertyRegistration index.d.ts
    lastlabelvisibility?: ChartAxisLabelVisibility; // DynamicPropertyRegistration index.d.ts
    majortickinterval?: string | number; // DynamicPropertyRegistration index.d.ts
    onFirstLabelVisibilityChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLastLabelVisibilityChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMajorTickIntervalChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPlotModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    plotmode?: ChartAxisPlotMode; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type CategoricalSeriesAttributes = CartesianSeriesAttributes & {
    categoryproperty?: string; // DynamicPropertyRegistration index.d.ts
    onCategoryPropertyChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStackModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    stackmode?: ChartSeriesStackMode; // DynamicPropertyRegistration index.d.ts
};

// visualization\views\chart-axis.common.d.ts
type ChartAxisLabelAttributes = ViewAttributes & {
    fitmode?: ChartPublicEnumChartAxisLabelFitMode; // DynamicPropertyRegistration chart-axis.common.d.ts
    format?: string; // DynamicPropertyRegistration chart-axis.common.d.ts
    layoutmode?: ChartPublicEnumChartAxisLabelLayoutMode; // DynamicPropertyRegistration chart-axis.common.d.ts
    onFitModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-axis.common.d.ts
    onFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-axis.common.d.ts
    onLayoutModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-axis.common.d.ts
    onRotationAngleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-axis.common.d.ts
    rotationangle?: string | number; // DynamicPropertyRegistration chart-axis.common.d.ts
};

// index.d.ts
type ChartGridLineAnnotationAttributes = CartesianChartAnnotationAttributes & {
    onValueChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    value?: string | any; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type ChartPlotBandAnnotationAttributes = CartesianChartAnnotationAttributes & {
    fillcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    maxvalue?: string | any; // DynamicPropertyRegistration index.d.ts
    minvalue?: string | any; // DynamicPropertyRegistration index.d.ts
    onFillColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMaxValueChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMinValueChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type ChartSeriesAttributes = ViewBaseAttributes & {
    android?: any; // InstanceProperty index.d.ts
    ios?: any; // InstanceProperty index.d.ts
    items?: string | any; // DynamicPropertyRegistration index.d.ts
    labelstyle?: string | PointLabelStyle; // DynamicPropertyRegistration index.d.ts
    legendtitle?: string; // DynamicPropertyRegistration index.d.ts
    onItemsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLabelStyleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLegendTitleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSelectionModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onShowLabelsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onValueChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onValuePropertyChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-series.common.d.ts
    selectionmode?: ChartSeriesSelectionMode; // DynamicPropertyRegistration index.d.ts
    seriesname?: string; // InstanceProperty index.d.ts
    showlabels?: string | boolean; // DynamicPropertyRegistration index.d.ts
    value?: string | any; // DynamicPropertyRegistration index.d.ts
    valueproperty?: string | any; // DynamicPropertyRegistration chart-series.common.d.ts
};

// visualization\views\chart-series.common.d.ts
type ChartSeriesLabelAttributes = ViewAttributes & {
    format?: string; // DynamicPropertyRegistration chart-series.common.d.ts
    onFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-series.common.d.ts
};

// index.d.ts
type DateTimeCategoricalAxisAttributes = CategoricalAxisAttributes & {
    dateformat?: string; // DynamicPropertyRegistration index.d.ts
    datetimecomponent?: ChartAxisDateTimeComponent; // DynamicPropertyRegistration index.d.ts
    onDateFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onDateTimeComponentChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type DateTimeContinuousAxisAttributes = LinearAxisAttributes & {
    dateformat?: string; // DynamicPropertyRegistration index.d.ts
    majorstepunit?: ChartAxisDateTimeComponent; // DynamicPropertyRegistration index.d.ts
    onDateFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMajorStepUnitChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPlotModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSourceDateFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-axis.common.d.ts
    plotmode?: ChartAxisPlotMode; // DynamicPropertyRegistration index.d.ts
    sourcedateformat?: string; // DynamicPropertyRegistration chart-axis.common.d.ts
};

// index.d.ts
type DonutSeriesAttributes = PieSeriesAttributes & {
    innerradiusfactor?: string | number; // DynamicPropertyRegistration index.d.ts
    onInnerRadiusFactorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type LineSeriesAttributes = CategoricalSeriesAttributes & {

};

// index.d.ts
type LinearAxisAttributes = CartesianAxisAttributes & {
    majorstep?: string | number; // DynamicPropertyRegistration index.d.ts
    maximum?: string | any; // DynamicPropertyRegistration index.d.ts
    minimum?: string | any; // DynamicPropertyRegistration index.d.ts
    onMajorStepChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMaximumChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMinimumChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type LogarithmicAxisAttributes = LinearAxisAttributes & {
    exponentstep?: string | number; // DynamicPropertyRegistration index.d.ts
    logarithmbase?: string | number; // DynamicPropertyRegistration index.d.ts
    onExponentStepChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLogarithmBaseChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type OhlcSeriesAttributes = CartesianSeriesAttributes & {
    closepropertyname?: string; // DynamicPropertyRegistration index.d.ts
    highpropertyname?: string; // DynamicPropertyRegistration index.d.ts
    lowpropertyname?: string; // DynamicPropertyRegistration index.d.ts
    onClosePropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHighPropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLowPropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onOpenPropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeColorsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    openpropertyname?: string; // DynamicPropertyRegistration index.d.ts
    strokecolors?: string | Color[]; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type PaletteAttributes = ViewBaseAttributes & {
    entries?: string | ObservableArray<PaletteEntry>; // DynamicPropertyRegistration index.d.ts
    onEntriesChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSeriesNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSeriesStateChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    seriesname?: string; // DynamicPropertyRegistration index.d.ts
    seriesstate?: ChartPaletteSeriesState; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type PaletteEntryAttributes = ViewBaseAttributes & {
    fillcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    onFillColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    strokecolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    strokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type PieSeriesAttributes = ChartSeriesAttributes & {
    endangle?: string | number; // DynamicPropertyRegistration index.d.ts
    expandradius?: string | number; // DynamicPropertyRegistration index.d.ts
    fillcolors?: string | Color[]; // DynamicPropertyRegistration index.d.ts
    legendlabel?: string; // DynamicPropertyRegistration index.d.ts
    onEndAngleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onExpandRadiusChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onFillColorsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLegendLabelChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onOuterRadiusFactorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onShowPercentageChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStartAngleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeColorsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    outerradiusfactor?: string | number; // DynamicPropertyRegistration index.d.ts
    showpercentage?: string | boolean; // DynamicPropertyRegistration index.d.ts
    startangle?: string | number; // DynamicPropertyRegistration index.d.ts
    strokecolors?: string | Color[]; // DynamicPropertyRegistration index.d.ts
    strokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type PointLabelStyleAttributes = ViewBaseAttributes & {
    fillcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    fontname?: string; // DynamicPropertyRegistration index.d.ts
    fontstyle?: ChartFontStyle; // DynamicPropertyRegistration index.d.ts
    margin?: string; // DynamicPropertyRegistration index.d.ts
    onFillColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onFontNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onFontStyleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onMarginChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTextColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTextFormatChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTextSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    strokecolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    strokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
    textcolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    textformat?: string; // DynamicPropertyRegistration index.d.ts
    textsize?: string | number; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type RadCartesianChartAttributes = RadChartBaseAttributes & {
    grid?: string | RadCartesianChartGrid; // DynamicPropertyRegistration index.d.ts
    horizontalaxis?: string | CartesianAxis; // DynamicPropertyRegistration index.d.ts
    horizontalzoom?: string | number; // DynamicPropertyRegistration index.d.ts
    onGridChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalAxisChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalZoomChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTrackballChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalAxisChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalZoomChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    trackball?: string | Trackball; // DynamicPropertyRegistration index.d.ts
    verticalaxis?: string | CartesianAxis; // DynamicPropertyRegistration index.d.ts
    verticalzoom?: string | number; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type RadCartesianChartGridAttributes = ViewBaseAttributes & {
    android?: any; // InstanceProperty index.d.ts
    horizontallinesvisible?: string | boolean; // DynamicPropertyRegistration index.d.ts
    horizontalstriplinecolor?: string | Color | Color[]; // DynamicPropertyRegistration index.d.ts
    horizontalstriplinesvisible?: string | boolean; // DynamicPropertyRegistration index.d.ts
    horizontalstrokecolor?: string | Color | Color[]; // DynamicPropertyRegistration index.d.ts
    horizontalstrokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
    ios?: any; // InstanceProperty index.d.ts
    onHorizontalLinesVisibleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalStripLineColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalStripLinesVisibleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalStrokeColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalLinesVisibleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalStripLineColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalStripLinesVisibleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalStrokeColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalStrokeWidthChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    verticallinesvisible?: string | boolean; // DynamicPropertyRegistration index.d.ts
    verticalstriplinecolor?: string | Color | Color[]; // DynamicPropertyRegistration index.d.ts
    verticalstriplinesvisible?: string | boolean; // DynamicPropertyRegistration index.d.ts
    verticalstrokecolor?: string | Color | Color[]; // DynamicPropertyRegistration index.d.ts
    verticalstrokewidth?: string | number; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type RadChartBaseAttributes = ViewAttributes & {
    allowanimations?: string | boolean; // DynamicPropertyRegistration index.d.ts
    androidview?: any; // InstanceProperty index.d.ts
    annotations?: string | ObservableArray<any>; // DynamicPropertyRegistration index.d.ts
    legend?: string | RadLegendView; // DynamicPropertyRegistration index.d.ts
    onAllowAnimationsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onAnnotationsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLegendChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPalettesChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPointSelectionModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSeriesChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSeriesSelectionModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    palettes?: string | ObservableArray<Palette>; // DynamicPropertyRegistration index.d.ts
    pointselectionmode?: ChartSelectionMode; // DynamicPropertyRegistration index.d.ts
    series?: string | ObservableArray<any>; // DynamicPropertyRegistration index.d.ts
    seriesselectionmode?: ChartSelectionMode; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type RadLegendViewAttributes = ViewAttributes & {
    enableselection?: string | boolean; // DynamicPropertyRegistration index.d.ts
    horizontaloffset?: string | number; // DynamicPropertyRegistration index.d.ts
    offsetorigin?: ChartLegendOffsetOrigin; // DynamicPropertyRegistration index.d.ts
    onEnableSelectionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onHorizontalOffsetChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onOffsetOriginChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onPositionChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTitleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTitleColorChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onTitleSizeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onVerticalOffsetChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    position?: ChartLegendPosition; // DynamicPropertyRegistration index.d.ts
    title?: string; // DynamicPropertyRegistration index.d.ts
    titlecolor?: string | Color; // DynamicPropertyRegistration index.d.ts
    titlesize?: string | number; // DynamicPropertyRegistration index.d.ts
    verticaloffset?: string | number; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type RadPieChartAttributes = RadChartBaseAttributes & {

};

// index.d.ts
type RangeBarSeriesAttributes = CategoricalSeriesAttributes & {
    highpropertyname?: string; // DynamicPropertyRegistration index.d.ts
    lowpropertyname?: string; // DynamicPropertyRegistration index.d.ts
    onHighPropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onLowPropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type ScatterBubbleSeriesAttributes = ScatterSeriesAttributes & {
    bubblescale?: string | number; // DynamicPropertyRegistration index.d.ts
    bubblesizeproperty?: string; // DynamicPropertyRegistration chart-series.common.d.ts
    bubblesizepropertyname?: string; // DynamicPropertyRegistration index.d.ts
    onBubbleScaleChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onBubbleSizePropertyChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange chart-series.common.d.ts
    onBubbleSizePropertyNameChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
};

// index.d.ts
type ScatterSeriesAttributes = CartesianSeriesAttributes & {
    onXPropertyChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onYPropertyChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    xproperty?: string; // DynamicPropertyRegistration index.d.ts
    yproperty?: string; // DynamicPropertyRegistration index.d.ts
};

// index.d.ts
type SplineAreaSeriesAttributes = AreaSeriesAttributes & {

};

// index.d.ts
type SplineSeriesAttributes = LineSeriesAttributes & {

};

// index.d.ts
type TrackballAttributes = ViewBaseAttributes & {
    onShowIntersectionPointsChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    onSnapModeChange?: (args: PropertyChangeData) => void; // SyntheticEvent:PropertyChange index.d.ts
    showintersectionpoints?: string | boolean; // DynamicPropertyRegistration index.d.ts
    snapmode?: ChartTrackballSnapMode; // DynamicPropertyRegistration index.d.ts
};

declare namespace svelteNative.JSX {
    interface IntrinsicElements {
        areaseries: AreaSeriesAttributes;
        barseries: BarSeriesAttributes;
        bubbleseries: BubbleSeriesAttributes;
        candlestickseries: CandlestickSeriesAttributes;
        cartesianaxis: CartesianAxisAttributes;
        cartesianchartannotation: CartesianChartAnnotationAttributes;
        cartesianseries: CartesianSeriesAttributes;
        categoricalaxis: CategoricalAxisAttributes;
        categoricalseries: CategoricalSeriesAttributes;
        chartaxislabel: ChartAxisLabelAttributes;
        chartgridlineannotation: ChartGridLineAnnotationAttributes;
        chartplotbandannotation: ChartPlotBandAnnotationAttributes;
        chartseries: ChartSeriesAttributes;
        chartserieslabel: ChartSeriesLabelAttributes;
        datetimecategoricalaxis: DateTimeCategoricalAxisAttributes;
        datetimecontinuousaxis: DateTimeContinuousAxisAttributes;
        donutseries: DonutSeriesAttributes;
        lineseries: LineSeriesAttributes;
        linearaxis: LinearAxisAttributes;
        logarithmicaxis: LogarithmicAxisAttributes;
        ohlcseries: OhlcSeriesAttributes;
        palette: PaletteAttributes;
        paletteentry: PaletteEntryAttributes;
        pieseries: PieSeriesAttributes;
        pointlabelstyle: PointLabelStyleAttributes;
        radcartesianchart: RadCartesianChartAttributes;
        radcartesianchartgrid: RadCartesianChartGridAttributes;
        radlegendview: RadLegendViewAttributes;
        radpiechart: RadPieChartAttributes;
        rangebarseries: RangeBarSeriesAttributes;
        scatterbubbleseries: ScatterBubbleSeriesAttributes;
        scatterseries: ScatterSeriesAttributes;
        splineareaseries: SplineAreaSeriesAttributes;
        splineseries: SplineSeriesAttributes;
        trackball: TrackballAttributes; 
        [name: string]: { [name: string]: any };
    }
}

