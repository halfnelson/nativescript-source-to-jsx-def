export {} //Ensure this is a module
type CartesianAxis = import("nativescript-ui-chart").CartesianAxis;
type ChartAnnotationZPosition = import("nativescript-ui-chart").ChartAnnotationZPosition;
type ChartAxisDateTimeComponent = import("nativescript-ui-chart").ChartAxisDateTimeComponent;
type ChartAxisHorizontalLocation = import("nativescript-ui-chart").ChartAxisHorizontalLocation;
type ChartAxisLabelFitMode = import("nativescript-ui-chart").ChartAxisLabelFitMode;
type ChartAxisLabelLayoutMode = import("nativescript-ui-chart").ChartAxisLabelLayoutMode;
type ChartAxisLabelVisibility = import("nativescript-ui-chart").ChartAxisLabelVisibility;
type ChartAxisPlotMode = import("nativescript-ui-chart").ChartAxisPlotMode;
type ChartAxisVerticalLocation = import("nativescript-ui-chart").ChartAxisVerticalLocation;
type ChartFontStyle = import("nativescript-ui-chart").ChartFontStyle;
type ChartLegendOffsetOrigin = import("nativescript-ui-chart").ChartLegendOffsetOrigin;
type ChartLegendPosition = import("nativescript-ui-chart").ChartLegendPosition;
type ChartPaletteSeriesState = import("nativescript-ui-chart").ChartPaletteSeriesState;
type ChartPublicEnumChartAxisLabelFitMode = import("nativescript-ui-chart/misc/chart-public-enum").ChartAxisLabelFitMode;
type ChartPublicEnumChartAxisLabelLayoutMode = import("nativescript-ui-chart/misc/chart-public-enum").ChartAxisLabelLayoutMode;
type ChartSelectionMode = import("nativescript-ui-chart").ChartSelectionMode;
type ChartSeriesPaletteMode = import("nativescript-ui-chart").ChartSeriesPaletteMode;
type ChartSeriesSelectionMode = import("nativescript-ui-chart").ChartSeriesSelectionMode;
type ChartSeriesStackMode = import("nativescript-ui-chart").ChartSeriesStackMode;
type ChartTrackballSnapMode = import("nativescript-ui-chart").ChartTrackballSnapMode;
type Color = import("@nativescript/core/color").Color;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array").ObservableArray<T1>;
type Palette = import("nativescript-ui-chart").Palette;
type PaletteEntry = import("nativescript-ui-chart").PaletteEntry;
type PointLabelStyle = import("nativescript-ui-chart").PointLabelStyle;
type Property<T1, T2> = import("@nativescript/core/ui/core/properties").Property<T1, T2>;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type RadCartesianChartGrid = import("nativescript-ui-chart").RadCartesianChartGrid;
type RadLegendView = import("nativescript-ui-chart").RadLegendView;
type Trackball = import("nativescript-ui-chart").Trackball;
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
    onmaxBarSizeChange?: (args: PropertyChangeData) => void;
    onminBarSizeChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type BubbleSeriesAttributes = Override<CategoricalSeriesAttributes, {
    bubblescale?: string | number;
    bubblesizeproperty?: string;
    onbubbleScaleChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type CandlestickSeriesAttributes = Override<OhlcSeriesAttributes, {
    fillcolors?: string | Color[];
    onfillColorsChange?: (args: PropertyChangeData) => void;
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
    onallowPanChange?: (args: PropertyChangeData) => void;
    onallowZoomChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onhorizontalLocationChange?: (args: PropertyChangeData) => void;
    onidChange?: (args: PropertyChangeData) => void;
    onlabelBackgroundColorChange?: (args: PropertyChangeData) => void;
    onlabelBorderColorChange?: (args: PropertyChangeData) => void;
    onlabelBorderWidthChange?: (args: PropertyChangeData) => void;
    onlabelFitModeChange?: (args: PropertyChangeData) => void;
    onlabelFormatChange?: (args: PropertyChangeData) => void;
    onlabelLayoutModeChange?: (args: PropertyChangeData) => void;
    onlabelMarginChange?: (args: PropertyChangeData) => void;
    onlabelRotationAngleChange?: (args: PropertyChangeData) => void;
    onlabelSizeChange?: (args: PropertyChangeData) => void;
    onlabelTextColorChange?: (args: PropertyChangeData) => void;
    onlineColorChange?: (args: PropertyChangeData) => void;
    onlineHiddenChange?: (args: PropertyChangeData) => void;
    onlineThicknessChange?: (args: PropertyChangeData) => void;
    onticksColorChange?: (args: PropertyChangeData) => void;
    onticksHiddenChange?: (args: PropertyChangeData) => void;
    onticksLengthChange?: (args: PropertyChangeData) => void;
    onticksOffsetChange?: (args: PropertyChangeData) => void;
    onticksThicknessChange?: (args: PropertyChangeData) => void;
    onverticalLocationChange?: (args: PropertyChangeData) => void;
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
    onaxisIdChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeDashPatternChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    onzPositionChange?: (args: PropertyChangeData) => void;
    strokecolor?: string | Color;
    strokedashpattern?: string;
    strokewidth?: string | number;
    zposition?: ChartAnnotationZPosition;
}>;

// index.d.ts
type CartesianSeriesAttributes = Override<ChartSeriesAttributes, {
    fillcolor?: string | Color;
    horizontalaxis?: string | CartesianAxis;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onhorizontalAxisChange?: (args: PropertyChangeData) => void;
    onpaletteModeChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    onverticalAxisChange?: (args: PropertyChangeData) => void;
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
    onfirstLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onlastLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onmajorTickIntervalChange?: (args: PropertyChangeData) => void;
    onplotModeChange?: (args: PropertyChangeData) => void;
    plotmode?: ChartAxisPlotMode;
}>;

// index.d.ts
type CategoricalSeriesAttributes = Override<CartesianSeriesAttributes, {
    categoryproperty?: string;
    oncategoryPropertyChange?: (args: PropertyChangeData) => void;
    onstackModeChange?: (args: PropertyChangeData) => void;
    stackmode?: ChartSeriesStackMode;
}>;

// visualization\views\chart-axis.common.d.ts
type ChartAxisLabelAttributes = Override<ViewAttributes, {
    fitmode?: ChartPublicEnumChartAxisLabelFitMode;
    format?: string;
    layoutmode?: ChartPublicEnumChartAxisLabelLayoutMode;
    onfitModeChange?: (args: PropertyChangeData) => void;
    onformatChange?: (args: PropertyChangeData) => void;
    onlayoutModeChange?: (args: PropertyChangeData) => void;
    onrotationAngleChange?: (args: PropertyChangeData) => void;
    rotationangle?: string | number;
}>;

// index.d.ts
type ChartGridLineAnnotationAttributes = Override<CartesianChartAnnotationAttributes, {
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | any;
}>;

// index.d.ts
type ChartPlotBandAnnotationAttributes = Override<CartesianChartAnnotationAttributes, {
    fillcolor?: string | Color;
    maxvalue?: string | any;
    minvalue?: string | any;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onminValueChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type ChartSeriesAttributes = Override<ViewBaseAttributes, {
    android?: any;
    ios?: any;
    items?: string | any;
    labelstyle?: string | PointLabelStyle;
    legendtitle?: string;
    onitemsChange?: (args: PropertyChangeData) => void;
    onlabelStyleChange?: (args: PropertyChangeData) => void;
    onlegendTitleChange?: (args: PropertyChangeData) => void;
    onselectionModeChange?: (args: PropertyChangeData) => void;
    onshowLabelsChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    onvaluePropertyChange?: (args: PropertyChangeData) => void;
    selectionmode?: ChartSeriesSelectionMode;
    seriesname?: string;
    showlabels?: string | boolean;
    value?: string | any;
    valueproperty?: string | any;
}>;

// visualization\views\chart-series.common.d.ts
type ChartSeriesLabelAttributes = Override<ViewAttributes, {
    format?: string;
    onformatChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type DateTimeCategoricalAxisAttributes = Override<CategoricalAxisAttributes, {
    dateformat?: string;
    datetimecomponent?: ChartAxisDateTimeComponent;
    ondateFormatChange?: (args: PropertyChangeData) => void;
    ondateTimeComponentChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type DateTimeContinuousAxisAttributes = Override<LinearAxisAttributes, {
    dateformat?: string;
    majorstepunit?: ChartAxisDateTimeComponent;
    ondateFormatChange?: (args: PropertyChangeData) => void;
    onmajorStepUnitChange?: (args: PropertyChangeData) => void;
    onplotModeChange?: (args: PropertyChangeData) => void;
    onsourceDateFormatChange?: (args: PropertyChangeData) => void;
    plotmode?: ChartAxisPlotMode;
    sourcedateformat?: string;
}>;

// index.d.ts
type DonutSeriesAttributes = Override<PieSeriesAttributes, {
    innerradiusfactor?: string | number;
    oninnerRadiusFactorChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type LineSeriesAttributes = Override<CategoricalSeriesAttributes, {

}>;

// index.d.ts
type LinearAxisAttributes = Override<CartesianAxisAttributes, {
    majorstep?: string | number;
    maximum?: string | any;
    minimum?: string | any;
    onmajorStepChange?: (args: PropertyChangeData) => void;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type LogarithmicAxisAttributes = Override<LinearAxisAttributes, {
    exponentstep?: string | number;
    logarithmbase?: string | number;
    onexponentStepChange?: (args: PropertyChangeData) => void;
    onlogarithmBaseChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type OhlcSeriesAttributes = Override<CartesianSeriesAttributes, {
    closepropertyname?: string;
    highpropertyname?: string;
    lowpropertyname?: string;
    onclosePropertyNameChange?: (args: PropertyChangeData) => void;
    onhighPropertyNameChange?: (args: PropertyChangeData) => void;
    onlowPropertyNameChange?: (args: PropertyChangeData) => void;
    onopenPropertyNameChange?: (args: PropertyChangeData) => void;
    onstrokeColorsChange?: (args: PropertyChangeData) => void;
    openpropertyname?: string;
    strokecolors?: string | Color[];
}>;

// index.d.ts
type PaletteAttributes = Override<ViewBaseAttributes, {
    entries?: string | ObservableArray<PaletteEntry>;
    onentriesChange?: (args: PropertyChangeData) => void;
    onseriesNameChange?: (args: PropertyChangeData) => void;
    onseriesStateChange?: (args: PropertyChangeData) => void;
    seriesname?: string;
    seriesstate?: ChartPaletteSeriesState;
}>;

// index.d.ts
type PaletteEntryAttributes = Override<ViewBaseAttributes, {
    fillcolor?: string | Color;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    strokecolor?: string | Color;
    strokewidth?: string | number;
}>;

// index.d.ts
type PieSeriesAttributes = Override<ChartSeriesAttributes, {
    endangle?: string | number;
    expandradius?: string | number;
    fillcolors?: string | Color[];
    legendlabel?: string;
    onendAngleChange?: (args: PropertyChangeData) => void;
    onexpandRadiusChange?: (args: PropertyChangeData) => void;
    onfillColorsChange?: (args: PropertyChangeData) => void;
    onlegendLabelChange?: (args: PropertyChangeData) => void;
    onouterRadiusFactorChange?: (args: PropertyChangeData) => void;
    onshowPercentageChange?: (args: PropertyChangeData) => void;
    onstartAngleChange?: (args: PropertyChangeData) => void;
    onstrokeColorsChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
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
    onfillColorChange?: (args: PropertyChangeData) => void;
    onfontNameChange?: (args: PropertyChangeData) => void;
    onfontStyleChange?: (args: PropertyChangeData) => void;
    onmarginChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    ontextColorChange?: (args: PropertyChangeData) => void;
    ontextFormatChange?: (args: PropertyChangeData) => void;
    ontextSizeChange?: (args: PropertyChangeData) => void;
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
    ongridChange?: (args: PropertyChangeData) => void;
    onhorizontalAxisChange?: (args: PropertyChangeData) => void;
    onhorizontalZoomChange?: (args: PropertyChangeData) => void;
    ontrackballChange?: (args: PropertyChangeData) => void;
    onverticalAxisChange?: (args: PropertyChangeData) => void;
    onverticalZoomChange?: (args: PropertyChangeData) => void;
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
    onhorizontalLinesVisibleChange?: (args: PropertyChangeData) => void;
    onhorizontalStripLineColorChange?: (args: PropertyChangeData) => void;
    onhorizontalStripLinesVisibleChange?: (args: PropertyChangeData) => void;
    onhorizontalStrokeColorChange?: (args: PropertyChangeData) => void;
    onhorizontalStrokeWidthChange?: (args: PropertyChangeData) => void;
    onverticalLinesVisibleChange?: (args: PropertyChangeData) => void;
    onverticalStripLineColorChange?: (args: PropertyChangeData) => void;
    onverticalStripLinesVisibleChange?: (args: PropertyChangeData) => void;
    onverticalStrokeColorChange?: (args: PropertyChangeData) => void;
    onverticalStrokeWidthChange?: (args: PropertyChangeData) => void;
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
    onallowAnimationsChange?: (args: PropertyChangeData) => void;
    onannotationsChange?: (args: PropertyChangeData) => void;
    onlegendChange?: (args: PropertyChangeData) => void;
    onpalettesChange?: (args: PropertyChangeData) => void;
    onpointSelectionModeChange?: (args: PropertyChangeData) => void;
    onseriesChange?: (args: PropertyChangeData) => void;
    onseriesSelectionModeChange?: (args: PropertyChangeData) => void;
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
    onenableSelectionChange?: (args: PropertyChangeData) => void;
    onhorizontalOffsetChange?: (args: PropertyChangeData) => void;
    onoffsetOriginChange?: (args: PropertyChangeData) => void;
    onpositionChange?: (args: PropertyChangeData) => void;
    ontitleChange?: (args: PropertyChangeData) => void;
    ontitleColorChange?: (args: PropertyChangeData) => void;
    ontitleSizeChange?: (args: PropertyChangeData) => void;
    onverticalOffsetChange?: (args: PropertyChangeData) => void;
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
    onhighPropertyNameChange?: (args: PropertyChangeData) => void;
    onlowPropertyNameChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type ScatterBubbleSeriesAttributes = Override<ScatterSeriesAttributes, {
    bubblescale?: string | number;
    bubblesizeproperty?: string;
    bubblesizepropertyname?: string;
    onbubbleScaleChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyNameChange?: (args: PropertyChangeData) => void;
}>;

// index.d.ts
type ScatterSeriesAttributes = Override<CartesianSeriesAttributes, {
    onxPropertyChange?: (args: PropertyChangeData) => void;
    onyPropertyChange?: (args: PropertyChangeData) => void;
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
    onshowIntersectionPointsChange?: (args: PropertyChangeData) => void;
    onsnapModeChange?: (args: PropertyChangeData) => void;
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
