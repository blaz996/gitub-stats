import React from 'react';
import { PieChart as Chart, Pie, Tooltip, Cell, Legend } from 'recharts';

import { chartDefaultColors } from '../ChartWrapper/ChartWrapper';
import { ChartWrapper } from '../ChartWrapper/ChartWrapper';
import { ChartWrapperProps, ChartProps } from '../types';
import { CustomToolTip } from '../CustomChartComponents/CustomChartComponents';

export const PieChart = <T,>({
  data,
  wrapperHeight,
  wrapperWidth,
  chartTitle,
}: ChartProps<T>) => {
  console.log(data);
  return (
    <ChartWrapper
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}
      chartTitle={chartTitle}
    >
      <Chart>
        <Tooltip
          cursor={{ fill: 'transparent' }}
          content={<CustomToolTip chartType='pie' />}
        />

        <Pie nameKey='label' data={data} dataKey='value' cursor='pointer'>
          {data.map((entry, i) => {
            return <Cell key={i} fill={chartDefaultColors[i]} />;
          })}
        </Pie>
        <Legend verticalAlign='bottom' wrapperStyle={{ top: 270, left: 25 }} />
      </Chart>
    </ChartWrapper>
  );
};
