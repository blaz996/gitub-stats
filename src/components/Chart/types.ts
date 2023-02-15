export type ChartWrapperProps = {
  wrapperWidth?: number;
  wrapperHeight?: number;
  chartTitle?: string;
  className?: string;
  chartData: any[];
  children: any;
};

export type ChartProps<T> = {
  data: T[];
} & Omit<ChartWrapperProps, 'children' | 'chartData'>;
