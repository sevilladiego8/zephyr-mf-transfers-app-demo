import './AnalyticsChart.scss';
export type AnalyticsDataPoint = {
    label: string;
    value: number;
};
export type AnalyticsSimpleChartProps = {
    id?: string;
    title?: string;
    subtitle?: string;
    total?: string | number;
    growth?: string;
    data?: AnalyticsDataPoint[];
    className?: string;
};
declare const AnalyticsSimpleChart: (props: AnalyticsSimpleChartProps) => import("react/jsx-runtime").JSX.Element;
export default AnalyticsSimpleChart;
