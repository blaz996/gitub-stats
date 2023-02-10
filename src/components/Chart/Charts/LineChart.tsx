import React from 'react';
import {
  LineChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
  Line,
  Tooltip,
} from 'recharts';

import { chartDefaultColors } from '../ChartWrapper/ChartWrapper';
import { ChartWrapper } from '../ChartWrapper/ChartWrapper';
import { ChartWrapperProps } from '../types';
import { CustomToolTip } from '../CustomChartComponents/CustomChartComponents';

type LineChartProps<T> = {
  chartWidth?: number;
  chartHeight?: number;
  data: T[];
} & Omit<ChartWrapperProps, 'children'>;

export const LineChart = <T,>({
  data,
  wrapperHeight,
  wrapperWidth,
  chartTitle,
  className,
}: LineChartProps<T>) => {
  console.log(data);
  return (
    <ChartWrapper
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}
      chartTitle={chartTitle}
      className={className}
    >
      <Chart data={data}>
        <XAxis dataKey='label' />
        <YAxis />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <CartesianGrid horizontal={false} vertical={false} />
        <Line dataKey='value' cursor='pointer' />
      </Chart>
    </ChartWrapper>
  );
};
