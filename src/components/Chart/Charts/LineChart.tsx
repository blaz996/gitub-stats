import React from 'react';
import {
  LineChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from 'recharts';

import { ChartWrapper } from '../ChartWrapper/ChartWrapper';
import { ChartProps } from '../types';

export const LineChart = <T,>({
  data,
  wrapperHeight,
  wrapperWidth,
  chartTitle,
  className,
}: ChartProps<T>) => {
  return (
    <ChartWrapper
      chartData={data}
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}
      chartTitle={chartTitle}
      className={className}
    >
      <Chart data={data}>
        <XAxis dataKey='label' fontSize={10} />
        <YAxis fontSize={12} />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <CartesianGrid horizontal={false} vertical={false} />
        <Line dataKey='value' cursor='pointer' />
      </Chart>
    </ChartWrapper>
  );
};
