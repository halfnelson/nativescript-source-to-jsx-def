export {} //Ensure this is a module
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
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// index.d.ts
type AreaSeriesAttributes = Override<CategoricalSeriesAttributes, {

}>;

// index.d.ts
type BarSeriesAttributes = Override<CategoricalSeriesAttributes, {
    maxbarsize?: string | number;
    minbarsize?: string | number;
    onMaxBarSizeChange?: (args: PropertyChangeData) => void;
    onMinBarSizeChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type BubbleSeriesAttributes = Override<CategoricalSeriesAttributes, {
    bubblescale?: string | number;
    bubblesizeproperty?: string;
    onBubbleScaleChange?: (args: PropertyChangeData) => void;
    onBubbleSizePropertyChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type CandlestickSeriesAttributes = Override<OhlcSeriesAttributes, {
    fillcolors?: string | Color[];
    onFillColorsChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type CartesianAxisAttributes = Override<ViewBaseAttributes, {
    allowpan?: string | boolean;
    allowzoom?: string | boolean;
    hidden?: string | boolean;
    horizontallocation?: ChartAxisHorizontalLocation;
    id?: string;
    ios?: any;
    labelbackgroundcolor?: string | Color;
    labelbordercolor?: string | Color;
    labelborderwidth?: string | number;
    labelfitmode?: ChartAxisLabelFitMode;
    labelformat?: string | any;
    labellayoutmode?: ChartAxisLabelLayoutMode;
    labellayoutmodeproperty?: Property<CartesianAxis, ChartAxisLabelLayoutMode>;
    labelmargin?: string | any;
    labelrotationangle?: string | any;
    labelsize?: string | any;
    labeltextcolor?: string | Color;
    linecolor?: string | Color;
    linehidden?: string | boolean;
    linethickness?: string | number;
    onAllowPanChange?: (args: PropertyChangeData) => void;
    onAllowZoomChange?: (args: PropertyChangeData) => void;
    onHiddenChange?: (args: PropertyChangeData) => void;
    onHorizontalLocationChange?: (args: PropertyChangeData) => void;
    onIdChange?: (args: PropertyChangeData) => void;
    onLabelBackgroundColorChange?: (args: PropertyChangeData) => void;
    onLabelBorderColorChange?: (args: PropertyChangeData) => void;
    onLabelBorderWidthChange?: (args: PropertyChangeData) => void;
    onLabelFitModeChange?: (args: PropertyChangeData) => void;
    onLabelFormatChange?: (args: PropertyChangeData) => void;
    onLabelLayoutModeChange?: (args: PropertyChangeData) => void;
    onLabelMarginChange?: (args: PropertyChangeData) => void;
    onLabelRotationAngleChange?: (args: PropertyChangeData) => void;
    onLabelSizeChange?: (args: PropertyChangeData) => void;
    onLabelTextColorChange?: (args: PropertyChangeData) => void;
    onLineColorChange?: (args: PropertyChangeData) => void;
    onLineHiddenChange?: (args: PropertyChangeData) => void;
    onLineThicknessChange?: (args: PropertyChangeData) => void;
    onTicksColorChange?: (args: PropertyChangeData) => void;
    onTicksHiddenChange?: (args: PropertyChangeData) => void;
    onTicksLengthChange?: (args: PropertyChangeData) => void;
    onTicksOffsetChange?: (args: PropertyChangeData) => void;
    onTicksThicknessChange?: (args: PropertyChangeData) => void;
    onVerticalLocationChange?: (args: PropertyChangeData) => void;
    tickscolor?: string | Color;
    tickshidden?: string | boolean;
    tickslength?: string | number;
    ticksoffset?: string | number;
    ticksthickness?: string | number;
    verticallocation?: ChartAxisVerticalLocation;
}>;

// index.d.ts
type CartesianChartAnnotationAttributes = Override<ViewBaseAttributes, {
    axisid?: string;
    hidden?: string | boolean;
    onAxisIdChange?: (args: PropertyChangeData) => void;
    onHiddenChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeDashPatternChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    onZPositionChange?: (args: PropertyChangeData) => void;
    strokecolor?: string | Color;
    strokedashpattern?: string;
    strokewidth?: string | number;
    zposition?: ChartAnnotationZPosition;
}>;

// index.d.ts
type CartesianSeriesAttributes = Override<ChartSeriesAttributes, {
    fillcolor?: string | Color;
    horizontalaxis?: string | CartesianAxis;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onHorizontalAxisChange?: (args: PropertyChangeData) => void;
    onPaletteModeChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    onVerticalAxisChange?: (args: PropertyChangeData) => void;
    palettemode?: ChartSeriesPaletteMode;
    strokecolor?: string | Color;
    strokewidth?: string | number;
    verticalaxis?: string | CartesianAxis;
}>;

// index.d.ts
type CategoricalAxisAttributes = Override<CartesianAxisAttributes, {
    firstlabelvisibility?: ChartAxisLabelVisibility;
    lastlabelvisibility?: ChartAxisLabelVisibility;
    majortickinterval?: string | number;
    onFirstLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onLastLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onMajorTickIntervalChange?: (args: PropertyChangeData) => void;
    onPlotModeChange?: (args: PropertyChangeData) => void;
    plotmode?: ChartAxisPlotMode;
}>;

// index.d.ts
type CategoricalSeriesAttributes = Override<CartesianSeriesAttributes, {
    categoryproperty?: string;
    onCategoryPropertyChange?: (args: PropertyChangeData) => void;
    onStackModeChange?: (args: PropertyChangeData) => void;
    stackmode?: ChartSeriesStackMode;
}>;

// visualization\views\chart-axis.common.d.ts
type ChartAxisLabelAttributes = Override<ViewAttributes, {
    fitmode?: ChartPublicEnumChartAxisLabelFitMode;
    format?: string;
    layoutmode?: ChartPublicEnumChartAxisLabelLayoutMode;
    onFitModeChange?: (args: PropertyChangeData) => void;
    onFormatChange?: (args: PropertyChangeData) => void;
    onLayoutModeChange?: (args: PropertyChangeData) => void;
    onRotationAngleChange?: (args: PropertyChangeData) => void;
    rotationangle?: string | number;
}>;

// index.d.ts
type ChartGridLineAnnotationAttributes = Override<CartesianChartAnnotationAttributes, {
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | any;
}>;

// index.d.ts
type ChartPlotBandAnnotationAttributes = Override<CartesianChartAnnotationAttributes, {
    fillcolor?: string | Color;
    maxvalue?: string | any;
    minvalue?: string | any;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onMinValueChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type ChartSeriesAttributes = Override<ViewBaseAttributes, {
    android?: any;
    ios?: any;
    items?: string | any;
    labelstyle?: string | PointLabelStyle;
    legendtitle?: string;
    onItemsChange?: (args: PropertyChangeData) => void;
    onLabelStyleChange?: (args: PropertyChangeData) => void;
    onLegendTitleChange?: (args: PropertyChangeData) => void;
    onSelectionModeChange?: (args: PropertyChangeData) => void;
    onShowLabelsChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    onValuePropertyChange?: (args: PropertyChangeData) => void;
    selectionmode?: ChartSeriesSelectionMode;
    seriesname?: string;
    showlabels?: string | boolean;
    value?: string | any;
    valueproperty?: string | any;
}>;

// visualization\views\chart-series.common.d.ts
type ChartSeriesLabelAttributes = Override<ViewAttributes, {
    format?: string;
    onFormatChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type DateTimeCategoricalAxisAttributes = Override<CategoricalAxisAttributes, {
    dateformat?: string;
    datetimecomponent?: ChartAxisDateTimeComponent;
    onDateFormatChange?: (args: PropertyChangeData) => void;
    onDateTimeComponentChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type DateTimeContinuousAxisAttributes = Override<LinearAxisAttributes, {
    dateformat?: string;
    majorstepunit?: ChartAxisDateTimeComponent;
    onDateFormatChange?: (args: PropertyChangeData) => void;
    onMajorStepUnitChange?: (args: PropertyChangeData) => void;
    onPlotModeChange?: (args: PropertyChangeData) => void;
    onSourceDateFormatChange?: (args: PropertyChangeData) => void;
    plotmode?: ChartAxisPlotMode;
    sourcedateformat?: string;
}>;

// index.d.ts
type DonutSeriesAttributes = Override<PieSeriesAttributes, {
    innerradiusfactor?: string | number;
    onInnerRadiusFactorChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type LineSeriesAttributes = Override<CategoricalSeriesAttributes, {

}>;

// index.d.ts
type LinearAxisAttributes = Override<CartesianAxisAttributes, {
    majorstep?: string | number;
    maximum?: string | any;
    minimum?: string | any;
    onMajorStepChange?: (args: PropertyChangeData) => void;
    onMaximumChange?: (args: PropertyChangeData) => void;
    onMinimumChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type LogarithmicAxisAttributes = Override<LinearAxisAttributes, {
    exponentstep?: string | number;
    logarithmbase?: string | number;
    onExponentStepChange?: (args: PropertyChangeData) => void;
    onLogarithmBaseChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type OhlcSeriesAttributes = Override<CartesianSeriesAttributes, {
    closepropertyname?: string;
    highpropertyname?: string;
    lowpropertyname?: string;
    onClosePropertyNameChange?: (args: PropertyChangeData) => void;
    onHighPropertyNameChange?: (args: PropertyChangeData) => void;
    onLowPropertyNameChange?: (args: PropertyChangeData) => void;
    onOpenPropertyNameChange?: (args: PropertyChangeData) => void;
    onStrokeColorsChange?: (args: PropertyChangeData) => void;
    openpropertyname?: string;
    strokecolors?: string | Color[];
}>;

// index.d.ts
type PaletteAttributes = Override<ViewBaseAttributes, {
    entries?: string | ObservableArray<PaletteEntry>;
    onEntriesChange?: (args: PropertyChangeData) => void;
    onSeriesNameChange?: (args: PropertyChangeData) => void;
    onSeriesStateChange?: (args: PropertyChangeData) => void;
    seriesname?: string;
    seriesstate?: ChartPaletteSeriesState;
}>;

// index.d.ts
type PaletteEntryAttributes = Override<ViewBaseAttributes, {
    fillcolor?: string | Color;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    strokecolor?: string | Color;
    strokewidth?: string | number;
}>;

// index.d.ts
type PieSeriesAttributes = Override<ChartSeriesAttributes, {
    endangle?: string | number;
    expandradius?: string | number;
    fillcolors?: string | Color[];
    legendlabel?: string;
    onEndAngleChange?: (args: PropertyChangeData) => void;
    onExpandRadiusChange?: (args: PropertyChangeData) => void;
    onFillColorsChange?: (args: PropertyChangeData) => void;
    onLegendLabelChange?: (args: PropertyChangeData) => void;
    onOuterRadiusFactorChange?: (args: PropertyChangeData) => void;
    onShowPercentageChange?: (args: PropertyChangeData) => void;
    onStartAngleChange?: (args: PropertyChangeData) => void;
    onStrokeColorsChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    outerradiusfactor?: string | number;
    showpercentage?: string | boolean;
    startangle?: string | number;
    strokecolors?: string | Color[];
    strokewidth?: string | number;
}>;

// index.d.ts
type PointLabelStyleAttributes = Override<ViewBaseAttributes, {
    fillcolor?: string | Color;
    fontname?: string;
    fontstyle?: ChartFontStyle;
    margin?: string;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onFontNameChange?: (args: PropertyChangeData) => void;
    onFontStyleChange?: (args: PropertyChangeData) => void;
    onMarginChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    onTextColorChange?: (args: PropertyChangeData) => void;
    onTextFormatChange?: (args: PropertyChangeData) => void;
    onTextSizeChange?: (args: PropertyChangeData) => void;
    strokecolor?: string | Color;
    strokewidth?: string | number;
    textcolor?: string | Color;
    textformat?: string;
    textsize?: string | number;
}>;

// index.d.ts
type RadCartesianChartAttributes = Override<RadChartBaseAttributes, {
    grid?: string | RadCartesianChartGrid;
    horizontalaxis?: string | CartesianAxis;
    horizontalzoom?: string | number;
    onGridChange?: (args: PropertyChangeData) => void;
    onHorizontalAxisChange?: (args: PropertyChangeData) => void;
    onHorizontalZoomChange?: (args: PropertyChangeData) => void;
    onTrackballChange?: (args: PropertyChangeData) => void;
    onVerticalAxisChange?: (args: PropertyChangeData) => void;
    onVerticalZoomChange?: (args: PropertyChangeData) => void;
    trackball?: string | Trackball;
    verticalaxis?: string | CartesianAxis;
    verticalzoom?: string | number;
}>;

// index.d.ts
type RadCartesianChartGridAttributes = Override<ViewBaseAttributes, {
    android?: any;
    horizontallinesvisible?: string | boolean;
    horizontalstriplinecolor?: string | Color | Color[];
    horizontalstriplinesvisible?: string | boolean;
    horizontalstrokecolor?: string | Color | Color[];
    horizontalstrokewidth?: string | number;
    ios?: any;
    onHorizontalLinesVisibleChange?: (args: PropertyChangeData) => void;
    onHorizontalStripLineColorChange?: (args: PropertyChangeData) => void;
    onHorizontalStripLinesVisibleChange?: (args: PropertyChangeData) => void;
    onHorizontalStrokeColorChange?: (args: PropertyChangeData) => void;
    onHorizontalStrokeWidthChange?: (args: PropertyChangeData) => void;
    onVerticalLinesVisibleChange?: (args: PropertyChangeData) => void;
    onVerticalStripLineColorChange?: (args: PropertyChangeData) => void;
    onVerticalStripLinesVisibleChange?: (args: PropertyChangeData) => void;
    onVerticalStrokeColorChange?: (args: PropertyChangeData) => void;
    onVerticalStrokeWidthChange?: (args: PropertyChangeData) => void;
    verticallinesvisible?: string | boolean;
    verticalstriplinecolor?: string | Color | Color[];
    verticalstriplinesvisible?: string | boolean;
    verticalstrokecolor?: string | Color | Color[];
    verticalstrokewidth?: string | number;
}>;

// index.d.ts
type RadChartBaseAttributes = Override<ViewAttributes, {
    allowanimations?: string | boolean;
    androidview?: any;
    annotations?: string | ObservableArray<any>;
    legend?: string | RadLegendView;
    onAllowAnimationsChange?: (args: PropertyChangeData) => void;
    onAnnotationsChange?: (args: PropertyChangeData) => void;
    onLegendChange?: (args: PropertyChangeData) => void;
    onPalettesChange?: (args: PropertyChangeData) => void;
    onPointSelectionModeChange?: (args: PropertyChangeData) => void;
    onSeriesChange?: (args: PropertyChangeData) => void;
    onSeriesSelectionModeChange?: (args: PropertyChangeData) => void;
    palettes?: string | ObservableArray<Palette>;
    pointselectionmode?: ChartSelectionMode;
    series?: string | ObservableArray<any>;
    seriesselectionmode?: ChartSelectionMode;
}>;

// index.d.ts
type RadLegendViewAttributes = Override<ViewAttributes, {
    enableselection?: string | boolean;
    horizontaloffset?: string | number;
    offsetorigin?: ChartLegendOffsetOrigin;
    onEnableSelectionChange?: (args: PropertyChangeData) => void;
    onHorizontalOffsetChange?: (args: PropertyChangeData) => void;
    onOffsetOriginChange?: (args: PropertyChangeData) => void;
    onPositionChange?: (args: PropertyChangeData) => void;
    onTitleChange?: (args: PropertyChangeData) => void;
    onTitleColorChange?: (args: PropertyChangeData) => void;
    onTitleSizeChange?: (args: PropertyChangeData) => void;
    onVerticalOffsetChange?: (args: PropertyChangeData) => void;
    position?: ChartLegendPosition;
    title?: string;
    titlecolor?: string | Color;
    titlesize?: string | number;
    verticaloffset?: string | number;
}>;

// index.d.ts
type RadPieChartAttributes = Override<RadChartBaseAttributes, {

}>;

// index.d.ts
type RangeBarSeriesAttributes = Override<CategoricalSeriesAttributes, {
    highpropertyname?: string;
    lowpropertyname?: string;
    onHighPropertyNameChange?: (args: PropertyChangeData) => void;
    onLowPropertyNameChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type ScatterBubbleSeriesAttributes = Override<ScatterSeriesAttributes, {
    bubblescale?: string | number;
    bubblesizeproperty?: string;
    bubblesizepropertyname?: string;
    onBubbleScaleChange?: (args: PropertyChangeData) => void;
    onBubbleSizePropertyChange?: (args: PropertyChangeData) => void;
    onBubbleSizePropertyNameChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type ScatterSeriesAttributes = Override<CartesianSeriesAttributes, {
    onXPropertyChange?: (args: PropertyChangeData) => void;
    onYPropertyChange?: (args: PropertyChangeData) => void;
    xproperty?: string;
    yproperty?: string;
}>;

// index.d.ts
type SplineAreaSeriesAttributes = Override<AreaSeriesAttributes, {

}>;

// index.d.ts
type SplineSeriesAttributes = Override<LineSeriesAttributes, {

}>;

// index.d.ts
type TrackballAttributes = Override<ViewBaseAttributes, {
    onShowIntersectionPointsChange?: (args: PropertyChangeData) => void;
    onSnapModeChange?: (args: PropertyChangeData) => void;
    showintersectionpoints?: string | boolean;
    snapmode?: ChartTrackballSnapMode;
}>;


interface IntrinsicElements {
        areaSeries: AreaSeriesAttributes;
        barSeries: BarSeriesAttributes;
        bubbleSeries: BubbleSeriesAttributes;
        candlestickSeries: CandlestickSeriesAttributes;
        cartesianAxis: CartesianAxisAttributes;
        cartesianChartAnnotation: CartesianChartAnnotationAttributes;
        cartesianSeries: CartesianSeriesAttributes;
        categoricalAxis: CategoricalAxisAttributes;
        categoricalSeries: CategoricalSeriesAttributes;
        chartAxisLabel: ChartAxisLabelAttributes;
        chartGridLineAnnotation: ChartGridLineAnnotationAttributes;
        chartPlotBandAnnotation: ChartPlotBandAnnotationAttributes;
        chartSeries: ChartSeriesAttributes;
        chartSeriesLabel: ChartSeriesLabelAttributes;
        dateTimeCategoricalAxis: DateTimeCategoricalAxisAttributes;
        dateTimeContinuousAxis: DateTimeContinuousAxisAttributes;
        donutSeries: DonutSeriesAttributes;
        lineSeries: LineSeriesAttributes;
        linearAxis: LinearAxisAttributes;
        logarithmicAxis: LogarithmicAxisAttributes;
        ohlcSeries: OhlcSeriesAttributes;
        palette: PaletteAttributes;
        paletteEntry: PaletteEntryAttributes;
        pieSeries: PieSeriesAttributes;
        pointLabelStyle: PointLabelStyleAttributes;
        radCartesianChart: RadCartesianChartAttributes;
        radCartesianChartGrid: RadCartesianChartGridAttributes;
        radLegendView: RadLegendViewAttributes;
        radPieChart: RadPieChartAttributes;
        rangeBarSeries: RangeBarSeriesAttributes;
        scatterBubbleSeries: ScatterBubbleSeriesAttributes;
        scatterSeries: ScatterSeriesAttributes;
        splineAreaSeries: SplineAreaSeriesAttributes;
        splineSeries: SplineSeriesAttributes;
        trackball: TrackballAttributes; 
}


}
}
