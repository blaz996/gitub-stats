import React from 'react';
import { ChartWrapperProps } from '../types';
import { ResponsiveContainer } from 'recharts';
import './ChartWrapper.scss';
export const chartDefaultColors = ['red', 'blue', 'green', 'pink', 'purple'];

export const ChartWrapper = ({
  wrapperHeight: height = 300,

  chartTitle,
  children,
}: ChartWrapperProps) => {
  return (
    <div className='chart-wrapper'>
      <h1 className='chart-title'>{chartTitle}</h1>
      <ResponsiveContainer width={'99%'} height={height}>
        {children}
      </ResponsiveContainer>
    </div>
  );
};
