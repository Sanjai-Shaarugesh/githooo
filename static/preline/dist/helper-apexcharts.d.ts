import { ApexOptions } from 'apexcharts';

export interface IBuildTooltipHelperOptions {
	title: string;
	mode: string;
	valuePrefix: string;
	isValueDivided: boolean;
	valuePostfix: string;
	hasTextLabel: boolean;
	invertGroup: boolean;
	labelDivider: string;
	wrapperClasses: string;
	wrapperExtClasses: string;
	seriesClasses: string;
	seriesExtClasses: string;
	titleClasses: string;
	titleExtClasses: string;
	markerClasses: string;
	markerExtClasses: string;
	valueClasses: string;
	valueExtClasses: string;
	labelClasses: string;
	labelExtClasses: string;
	hasCategory?: boolean;
}
export interface IChartProps {
	dataPointIndex: number;
	ctx: {
		opts: ApexOptions;
	};
	series: [][];
}
export interface IChartPropsSeries {
	name: string;
	altValue?: string;
	data: number[];
}
export interface IChartDonutProps {
	series: IChartPropsSeries[];
	seriesIndex: number;
	w: {
		globals: ApexOptions;
	};
}
export declare function buildTooltip(
	props: IChartProps,
	options: IBuildTooltipHelperOptions,
): string;
export declare function buildTooltipCompareTwo(
	props: IChartProps,
	options: IBuildTooltipHelperOptions,
): string;
export declare function buildTooltipCompareTwoAlt(
	props: IChartProps,
	options: IBuildTooltipHelperOptions,
): string;
export declare function buildTooltipForDonut(
	{ series, seriesIndex, w }: IChartDonutProps,
	textColor: string[],
): string;
export declare function buildChart(
	id: string,
	shared: Function,
	light: string,
	dark: string,
): any;

export {};
