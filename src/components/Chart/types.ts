export type ChartWrapperProps = {
  wrapperWidth?: number;
  wrapperHeight?: number;
  chartTitle?: string;
  className?: string;
  children: any;
};

export type ChartProps<T> = {
  data: T[];
} & Omit<ChartWrapperProps, 'children'>;
