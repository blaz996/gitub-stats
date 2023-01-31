import React from 'react';
import {
  BarChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
  Tooltip,
} from 'recharts';

import { chartDefaultColors } from '../ChartWrapper/ChartWrapper';
import { ChartWrapper } from '../ChartWrapper/ChartWrapper';
import { ChartWrapperProps } from '../types';
import { CustomToolTip } from '../CustomChartComponents/CustomChartComponents';

type BarChartProps<T> = {
  chartWidth?: number;
  chartHeight?: number;
  data: T[];
} & Omit<ChartWrapperProps, 'children'>;

export const BarChart = <T,>({
  chartWidth: width,
  chartHeight: height,
  data,
  wrapperHeight,
  wrapperWidth,
  chartTitle,
}: BarChartProps<T>) => {
  return (
    <ChartWrapper
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}
      chartTitle={chartTitle}
    >
      <Chart data={data} width={width} height={height} barCategoryGap='20%'>
        <XAxis dataKey='label' />
        <YAxis />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          content={<CustomToolTip chartType='bar' />}
        />
        <CartesianGrid horizontal={false} vertical={false} />
        <Bar dataKey='value' cursor='pointer' minPointSize={5}>
          {chartDefaultColors.map((color, i) => {
            return <Cell key={i} fill={color} />;
          })}
        </Bar>
      </Chart>
    </ChartWrapper>
  );
};
