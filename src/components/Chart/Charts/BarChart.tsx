import React from 'react';
import {
  BarChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

import { chartDefaultColors } from '../ChartWrapper/ChartWrapper';
import { ChartWrapper } from '../ChartWrapper/ChartWrapper';
import { ChartProps } from '../types';
import { CustomToolTip } from '../CustomChartComponents/CustomChartComponents';

export const BarChart = <T,>({
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
      <Chart data={data} barCategoryGap='20%'>
        <XAxis dataKey='label' fontSize={10} />
        <YAxis scale='sqrt' fontSize={12} />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          content={<CustomToolTip chartType='bar' />}
        />
        <CartesianGrid horizontal={false} vertical={false} />
        <Bar dataKey='value' cursor='pointer'>
          {chartDefaultColors.map((color, i) => {
            return <Cell key={i} fill={color} />;
          })}
        </Bar>
      </Chart>
    </ChartWrapper>
  );
};
