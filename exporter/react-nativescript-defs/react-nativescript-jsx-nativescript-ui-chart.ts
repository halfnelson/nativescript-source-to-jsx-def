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

// index.d.ts
interface AreaSeriesAttributes  extends CategoricalSeriesAttributes{

};

// index.d.ts
interface BarSeriesAttributes  extends CategoricalSeriesAttributes{
    maxBarSize?: string | number;
    minBarSize?: string | number;
    onMaxBarSizeChange?: (args: PropertyChangeData) => void;
    onMinBarSizeChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface BubbleSeriesAttributes  extends CategoricalSeriesAttributes{
    bubbleScale?: string | number;
    bubbleSizeProperty?: string;
    onBubbleScaleChange?: (args: PropertyChangeData) => void;
    onBubbleSizePropertyChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface CandlestickSeriesAttributes  extends OhlcSeriesAttributes{
    fillColors?: string | Color[];
    onFillColorsChange?: (args: PropertyChangeData) => void;
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
    onAxisIdChange?: (args: PropertyChangeData) => void;
    onHiddenChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeDashPatternChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    onZPositionChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeDashPattern?: string;
    strokeWidth?: string | number;
    zPosition?: ChartAnnotationZPosition;
};

// index.d.ts
interface CartesianSeriesAttributes  extends ChartSeriesAttributes{
    fillColor?: string | Color;
    horizontalAxis?: string | CartesianAxis;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onHorizontalAxisChange?: (args: PropertyChangeData) => void;
    onPaletteModeChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    onVerticalAxisChange?: (args: PropertyChangeData) => void;
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
    onFirstLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onLastLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onMajorTickIntervalChange?: (args: PropertyChangeData) => void;
    onPlotModeChange?: (args: PropertyChangeData) => void;
    plotMode?: ChartAxisPlotMode;
};

// index.d.ts
interface CategoricalSeriesAttributes  extends CartesianSeriesAttributes{
    categoryProperty?: string;
    onCategoryPropertyChange?: (args: PropertyChangeData) => void;
    onStackModeChange?: (args: PropertyChangeData) => void;
    stackMode?: ChartSeriesStackMode;
};

// visualization\views\chart-axis.common.d.ts
interface ChartAxisLabelAttributes  extends ViewAttributes{
    fitMode?: ChartPublicEnumChartAxisLabelFitMode;
    format?: string;
    layoutMode?: ChartPublicEnumChartAxisLabelLayoutMode;
    onFitModeChange?: (args: PropertyChangeData) => void;
    onFormatChange?: (args: PropertyChangeData) => void;
    onLayoutModeChange?: (args: PropertyChangeData) => void;
    onRotationAngleChange?: (args: PropertyChangeData) => void;
    rotationAngle?: string | number;
};

// index.d.ts
interface ChartGridLineAnnotationAttributes  extends CartesianChartAnnotationAttributes{
    onValueChange?: (args: PropertyChangeData) => void;
    value?: string | any;
};

// index.d.ts
interface ChartPlotBandAnnotationAttributes  extends CartesianChartAnnotationAttributes{
    fillColor?: string | Color;
    maxValue?: string | any;
    minValue?: string | any;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onMaxValueChange?: (args: PropertyChangeData) => void;
    onMinValueChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface ChartSeriesAttributes  extends ViewBaseAttributes{
    android?: any;
    ios?: any;
    items?: string | any;
    labelStyle?: string | PointLabelStyle;
    legendTitle?: string;
    onItemsChange?: (args: PropertyChangeData) => void;
    onLabelStyleChange?: (args: PropertyChangeData) => void;
    onLegendTitleChange?: (args: PropertyChangeData) => void;
    onSelectionModeChange?: (args: PropertyChangeData) => void;
    onShowLabelsChange?: (args: PropertyChangeData) => void;
    onValueChange?: (args: PropertyChangeData) => void;
    onValuePropertyChange?: (args: PropertyChangeData) => void;
    selectionMode?: ChartSeriesSelectionMode;
    seriesName?: string;
    showLabels?: string | boolean;
    value?: string | any;
    valueProperty?: string | any;
};

// visualization\views\chart-series.common.d.ts
interface ChartSeriesLabelAttributes  extends ViewAttributes{
    format?: string;
    onFormatChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface DateTimeCategoricalAxisAttributes  extends CategoricalAxisAttributes{
    dateFormat?: string;
    dateTimeComponent?: ChartAxisDateTimeComponent;
    onDateFormatChange?: (args: PropertyChangeData) => void;
    onDateTimeComponentChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface DateTimeContinuousAxisAttributes  extends LinearAxisAttributes{
    dateFormat?: string;
    majorStepUnit?: ChartAxisDateTimeComponent;
    onDateFormatChange?: (args: PropertyChangeData) => void;
    onMajorStepUnitChange?: (args: PropertyChangeData) => void;
    onPlotModeChange?: (args: PropertyChangeData) => void;
    onSourceDateFormatChange?: (args: PropertyChangeData) => void;
    plotMode?: ChartAxisPlotMode;
    sourceDateFormat?: string;
};

// index.d.ts
interface DonutSeriesAttributes  extends PieSeriesAttributes{
    innerRadiusFactor?: string | number;
    onInnerRadiusFactorChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface LineSeriesAttributes  extends CategoricalSeriesAttributes{

};

// index.d.ts
interface LinearAxisAttributes  extends CartesianAxisAttributes{
    majorStep?: string | number;
    maximum?: string | any;
    minimum?: string | any;
    onMajorStepChange?: (args: PropertyChangeData) => void;
    onMaximumChange?: (args: PropertyChangeData) => void;
    onMinimumChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface LogarithmicAxisAttributes  extends LinearAxisAttributes{
    exponentStep?: string | number;
    logarithmBase?: string | number;
    onExponentStepChange?: (args: PropertyChangeData) => void;
    onLogarithmBaseChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface OhlcSeriesAttributes  extends CartesianSeriesAttributes{
    closePropertyName?: string;
    highPropertyName?: string;
    lowPropertyName?: string;
    onClosePropertyNameChange?: (args: PropertyChangeData) => void;
    onHighPropertyNameChange?: (args: PropertyChangeData) => void;
    onLowPropertyNameChange?: (args: PropertyChangeData) => void;
    onOpenPropertyNameChange?: (args: PropertyChangeData) => void;
    onStrokeColorsChange?: (args: PropertyChangeData) => void;
    openPropertyName?: string;
    strokeColors?: string | Color[];
};

// index.d.ts
interface PaletteAttributes  extends ViewBaseAttributes{
    entries?: string | ObservableArray<PaletteEntry>;
    onEntriesChange?: (args: PropertyChangeData) => void;
    onSeriesNameChange?: (args: PropertyChangeData) => void;
    onSeriesStateChange?: (args: PropertyChangeData) => void;
    seriesName?: string;
    seriesState?: ChartPaletteSeriesState;
};

// index.d.ts
interface PaletteEntryAttributes  extends ViewBaseAttributes{
    fillColor?: string | Color;
    onFillColorChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
};

// index.d.ts
interface PieSeriesAttributes  extends ChartSeriesAttributes{
    endAngle?: string | number;
    expandRadius?: string | number;
    fillColors?: string | Color[];
    legendLabel?: string;
    onEndAngleChange?: (args: PropertyChangeData) => void;
    onExpandRadiusChange?: (args: PropertyChangeData) => void;
    onFillColorsChange?: (args: PropertyChangeData) => void;
    onLegendLabelChange?: (args: PropertyChangeData) => void;
    onOuterRadiusFactorChange?: (args: PropertyChangeData) => void;
    onShowPercentageChange?: (args: PropertyChangeData) => void;
    onStartAngleChange?: (args: PropertyChangeData) => void;
    onStrokeColorsChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
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
    onFillColorChange?: (args: PropertyChangeData) => void;
    onFontNameChange?: (args: PropertyChangeData) => void;
    onFontStyleChange?: (args: PropertyChangeData) => void;
    onMarginChange?: (args: PropertyChangeData) => void;
    onStrokeColorChange?: (args: PropertyChangeData) => void;
    onStrokeWidthChange?: (args: PropertyChangeData) => void;
    onTextColorChange?: (args: PropertyChangeData) => void;
    onTextFormatChange?: (args: PropertyChangeData) => void;
    onTextSizeChange?: (args: PropertyChangeData) => void;
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
    onGridChange?: (args: PropertyChangeData) => void;
    onHorizontalAxisChange?: (args: PropertyChangeData) => void;
    onHorizontalZoomChange?: (args: PropertyChangeData) => void;
    onTrackballChange?: (args: PropertyChangeData) => void;
    onVerticalAxisChange?: (args: PropertyChangeData) => void;
    onVerticalZoomChange?: (args: PropertyChangeData) => void;
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
    onAllowAnimationsChange?: (args: PropertyChangeData) => void;
    onAnnotationsChange?: (args: PropertyChangeData) => void;
    onLegendChange?: (args: PropertyChangeData) => void;
    onPalettesChange?: (args: PropertyChangeData) => void;
    onPointSelectionModeChange?: (args: PropertyChangeData) => void;
    onSeriesChange?: (args: PropertyChangeData) => void;
    onSeriesSelectionModeChange?: (args: PropertyChangeData) => void;
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
    onHighPropertyNameChange?: (args: PropertyChangeData) => void;
    onLowPropertyNameChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface ScatterBubbleSeriesAttributes  extends ScatterSeriesAttributes{
    bubbleScale?: string | number;
    bubbleSizeProperty?: string;
    bubbleSizePropertyName?: string;
    onBubbleScaleChange?: (args: PropertyChangeData) => void;
    onBubbleSizePropertyChange?: (args: PropertyChangeData) => void;
    onBubbleSizePropertyNameChange?: (args: PropertyChangeData) => void;
};

// index.d.ts
interface ScatterSeriesAttributes  extends CartesianSeriesAttributes{
    onXPropertyChange?: (args: PropertyChangeData) => void;
    onYPropertyChange?: (args: PropertyChangeData) => void;
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
    onShowIntersectionPointsChange?: (args: PropertyChangeData) => void;
    onSnapModeChange?: (args: PropertyChangeData) => void;
    showIntersectionPoints?: string | boolean;
    snapMode?: ChartTrackballSnapMode;
};



