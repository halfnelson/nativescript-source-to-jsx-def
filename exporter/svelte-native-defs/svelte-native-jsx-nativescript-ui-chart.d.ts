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

declare global {
namespace svelteNative.JSX {

// index.d.ts
interface AreaSeriesAttributes  extends CategoricalSeriesAttributes{

};

// index.d.ts
interface BarSeriesAttributes  extends CategoricalSeriesAttributes{
    maxBarSize?: string | number;
    minBarSize?: string | number;
    onmaxBarSizeChange?: (args: PropertyChangeData) => void;
    onminBarSizeChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface BubbleSeriesAttributes  extends CategoricalSeriesAttributes{
    bubbleScale?: string | number;
    bubbleSizeProperty?: string;
    onbubbleScaleChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface CandlestickSeriesAttributes  extends OhlcSeriesAttributes{
    fillColors?: string | Color[];
    onfillColorsChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface CartesianAxisAttributes  extends ViewBaseAttributes{
    allowPan?: string | boolean;
    allowZoom?: string | boolean;
    hidden?: string | boolean;
    horizontalLocation?: ChartAxisHorizontalLocation;
    id?: string;
    ios?: any;
    labelBackgroundColor?: string | Color;
    labelBorderColor?: string | Color;
    labelBorderWidth?: string | number;
    labelFitMode?: ChartAxisLabelFitMode;
    labelFormat?: string | any;
    labelLayoutMode?: ChartAxisLabelLayoutMode;
    labelLayoutModeProperty?: Property<CartesianAxis, ChartAxisLabelLayoutMode>;
    labelMargin?: string | any;
    labelRotationAngle?: string | any;
    labelSize?: string | any;
    labelTextColor?: string | Color;
    lineColor?: string | Color;
    lineHidden?: string | boolean;
    lineThickness?: string | number;
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
    ticksColor?: string | Color;
    ticksHidden?: string | boolean;
    ticksLength?: string | number;
    ticksOffset?: string | number;
    ticksThickness?: string | number;
    verticalLocation?: ChartAxisVerticalLocation;
};

// index.d.ts
interface CartesianChartAnnotationAttributes  extends ViewBaseAttributes{
    axisId?: string;
    hidden?: string | boolean;
    onaxisIdChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeDashPatternChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    onzPositionChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeDashPattern?: string;
    strokeWidth?: string | number;
    zPosition?: ChartAnnotationZPosition;
};

// index.d.ts
interface CartesianSeriesAttributes  extends ChartSeriesAttributes{
    fillColor?: string | Color;
    horizontalAxis?: string | CartesianAxis;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onhorizontalAxisChange?: (args: PropertyChangeData) => void;
    onpaletteModeChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    onverticalAxisChange?: (args: PropertyChangeData) => void;
    paletteMode?: ChartSeriesPaletteMode;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
    verticalAxis?: string | CartesianAxis;
};

// index.d.ts
interface CategoricalAxisAttributes  extends CartesianAxisAttributes{
    firstLabelVisibility?: ChartAxisLabelVisibility;
    lastLabelVisibility?: ChartAxisLabelVisibility;
    majorTickInterval?: string | number;
    onfirstLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onlastLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onmajorTickIntervalChange?: (args: PropertyChangeData) => void;
    onplotModeChange?: (args: PropertyChangeData) => void;
    plotMode?: ChartAxisPlotMode;
};

// index.d.ts
interface CategoricalSeriesAttributes  extends CartesianSeriesAttributes{
    categoryProperty?: string;
    oncategoryPropertyChange?: (args: PropertyChangeData) => void;
    onstackModeChange?: (args: PropertyChangeData) => void;
    stackMode?: ChartSeriesStackMode;
};

// visualization\views\chart-axis.common.d.ts
interface ChartAxisLabelAttributes  extends ViewAttributes{
    fitMode?: ChartPublicEnumChartAxisLabelFitMode;
    format?: string;
    layoutMode?: ChartPublicEnumChartAxisLabelLayoutMode;
    onfitModeChange?: (args: PropertyChangeData) => void;
    onformatChange?: (args: PropertyChangeData) => void;
    onlayoutModeChange?: (args: PropertyChangeData) => void;
    onrotationAngleChange?: (args: PropertyChangeData) => void;
    rotationAngle?: string | number;
};

// index.d.ts
interface ChartGridLineAnnotationAttributes  extends CartesianChartAnnotationAttributes{
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | any;
};

// index.d.ts
interface ChartPlotBandAnnotationAttributes  extends CartesianChartAnnotationAttributes{
    fillColor?: string | Color;
    maxValue?: string | any;
    minValue?: string | any;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onminValueChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface ChartSeriesAttributes  extends ViewBaseAttributes{
    android?: any;
    ios?: any;
    items?: string | any;
    labelStyle?: string | PointLabelStyle;
    legendTitle?: string;
    onitemsChange?: (args: PropertyChangeData) => void;
    onlabelStyleChange?: (args: PropertyChangeData) => void;
    onlegendTitleChange?: (args: PropertyChangeData) => void;
    onselectionModeChange?: (args: PropertyChangeData) => void;
    onshowLabelsChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    onvaluePropertyChange?: (args: PropertyChangeData) => void;
    selectionMode?: ChartSeriesSelectionMode;
    seriesName?: string;
    showLabels?: string | boolean;
    value?: string | any;
    valueProperty?: string | any;
};

// visualization\views\chart-series.common.d.ts
interface ChartSeriesLabelAttributes  extends ViewAttributes{
    format?: string;
    onformatChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface DateTimeCategoricalAxisAttributes  extends CategoricalAxisAttributes{
    dateFormat?: string;
    dateTimeComponent?: ChartAxisDateTimeComponent;
    ondateFormatChange?: (args: PropertyChangeData) => void;
    ondateTimeComponentChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface DateTimeContinuousAxisAttributes  extends LinearAxisAttributes{
    dateFormat?: string;
    majorStepUnit?: ChartAxisDateTimeComponent;
    ondateFormatChange?: (args: PropertyChangeData) => void;
    onmajorStepUnitChange?: (args: PropertyChangeData) => void;
    onplotModeChange?: (args: PropertyChangeData) => void;
    onsourceDateFormatChange?: (args: PropertyChangeData) => void;
    plotMode?: ChartAxisPlotMode;
    sourceDateFormat?: string;
};

// index.d.ts
interface DonutSeriesAttributes  extends PieSeriesAttributes{
    innerRadiusFactor?: string | number;
    oninnerRadiusFactorChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface LineSeriesAttributes  extends CategoricalSeriesAttributes{

};

// index.d.ts
interface LinearAxisAttributes  extends CartesianAxisAttributes{
    majorStep?: string | number;
    maximum?: string | any;
    minimum?: string | any;
    onmajorStepChange?: (args: PropertyChangeData) => void;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface LogarithmicAxisAttributes  extends LinearAxisAttributes{
    exponentStep?: string | number;
    logarithmBase?: string | number;
    onexponentStepChange?: (args: PropertyChangeData) => void;
    onlogarithmBaseChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface OhlcSeriesAttributes  extends CartesianSeriesAttributes{
    closePropertyName?: string;
    highPropertyName?: string;
    lowPropertyName?: string;
    onclosePropertyNameChange?: (args: PropertyChangeData) => void;
    onhighPropertyNameChange?: (args: PropertyChangeData) => void;
    onlowPropertyNameChange?: (args: PropertyChangeData) => void;
    onopenPropertyNameChange?: (args: PropertyChangeData) => void;
    onstrokeColorsChange?: (args: PropertyChangeData) => void;
    openPropertyName?: string;
    strokeColors?: string | Color[];
};

// index.d.ts
interface PaletteAttributes  extends ViewBaseAttributes{
    entries?: string | ObservableArray<PaletteEntry>;
    onentriesChange?: (args: PropertyChangeData) => void;
    onseriesNameChange?: (args: PropertyChangeData) => void;
    onseriesStateChange?: (args: PropertyChangeData) => void;
    seriesName?: string;
    seriesState?: ChartPaletteSeriesState;
};

// index.d.ts
interface PaletteEntryAttributes  extends ViewBaseAttributes{
    fillColor?: string | Color;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
};

// index.d.ts
interface PieSeriesAttributes  extends ChartSeriesAttributes{
    endAngle?: string | number;
    expandRadius?: string | number;
    fillColors?: string | Color[];
    legendLabel?: string;
    onendAngleChange?: (args: PropertyChangeData) => void;
    onexpandRadiusChange?: (args: PropertyChangeData) => void;
    onfillColorsChange?: (args: PropertyChangeData) => void;
    onlegendLabelChange?: (args: PropertyChangeData) => void;
    onouterRadiusFactorChange?: (args: PropertyChangeData) => void;
    onshowPercentageChange?: (args: PropertyChangeData) => void;
    onstartAngleChange?: (args: PropertyChangeData) => void;
    onstrokeColorsChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    outerRadiusFactor?: string | number;
    showPercentage?: string | boolean;
    startAngle?: string | number;
    strokeColors?: string | Color[];
    strokeWidth?: string | number;
};

// index.d.ts
interface PointLabelStyleAttributes  extends ViewBaseAttributes{
    fillColor?: string | Color;
    fontName?: string;
    fontStyle?: ChartFontStyle;
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
    strokeColor?: string | Color;
    strokeWidth?: string | number;
    textColor?: string | Color;
    textFormat?: string;
    textSize?: string | number;
};

// index.d.ts
interface RadCartesianChartAttributes  extends RadChartBaseAttributes{
    grid?: string | RadCartesianChartGrid;
    horizontalAxis?: string | CartesianAxis;
    horizontalZoom?: string | number;
    ongridChange?: (args: PropertyChangeData) => void;
    onhorizontalAxisChange?: (args: PropertyChangeData) => void;
    onhorizontalZoomChange?: (args: PropertyChangeData) => void;
    ontrackballChange?: (args: PropertyChangeData) => void;
    onverticalAxisChange?: (args: PropertyChangeData) => void;
    onverticalZoomChange?: (args: PropertyChangeData) => void;
    trackball?: string | Trackball;
    verticalAxis?: string | CartesianAxis;
    verticalZoom?: string | number;
};

// index.d.ts
interface RadCartesianChartGridAttributes  extends ViewBaseAttributes{
    android?: any;
    horizontalLinesVisible?: string | boolean;
    horizontalStripLineColor?: string | Color | Color[];
    horizontalStripLinesVisible?: string | boolean;
    horizontalStrokeColor?: string | Color | Color[];
    horizontalStrokeWidth?: string | number;
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
    verticalLinesVisible?: string | boolean;
    verticalStripLineColor?: string | Color | Color[];
    verticalStripLinesVisible?: string | boolean;
    verticalStrokeColor?: string | Color | Color[];
    verticalStrokeWidth?: string | number;
};

// index.d.ts
interface RadChartBaseAttributes  extends ViewAttributes{
    allowAnimations?: string | boolean;
    androidView?: any;
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
    pointSelectionMode?: ChartSelectionMode;
    series?: string | ObservableArray<any>;
    seriesSelectionMode?: ChartSelectionMode;
};

// index.d.ts
interface RadLegendViewAttributes  extends ViewAttributes{
    enableSelection?: string | boolean;
    horizontalOffset?: string | number;
    offsetOrigin?: ChartLegendOffsetOrigin;
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
    titleColor?: string | Color;
    titleSize?: string | number;
    verticalOffset?: string | number;
};

// index.d.ts
interface RadPieChartAttributes  extends RadChartBaseAttributes{

};

// index.d.ts
interface RangeBarSeriesAttributes  extends CategoricalSeriesAttributes{
    highPropertyName?: string;
    lowPropertyName?: string;
    onhighPropertyNameChange?: (args: PropertyChangeData) => void;
    onlowPropertyNameChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface ScatterBubbleSeriesAttributes  extends ScatterSeriesAttributes{
    bubbleScale?: string | number;
    bubbleSizeProperty?: string;
    bubbleSizePropertyName?: string;
    onbubbleScaleChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyNameChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface ScatterSeriesAttributes  extends CartesianSeriesAttributes{
    onxPropertyChange?: (args: PropertyChangeData) => void;
    onyPropertyChange?: (args: PropertyChangeData) => void;
    xProperty?: string;
    yProperty?: string;
};

// index.d.ts
interface SplineAreaSeriesAttributes  extends AreaSeriesAttributes{

};

// index.d.ts
interface SplineSeriesAttributes  extends LineSeriesAttributes{

};

// index.d.ts
interface TrackballAttributes  extends ViewBaseAttributes{
    onshowIntersectionPointsChange?: (args: PropertyChangeData) => void;
    onsnapModeChange?: (args: PropertyChangeData) => void;
    showIntersectionPoints?: string | boolean;
    snapMode?: ChartTrackballSnapMode;
};


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
