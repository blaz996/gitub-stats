import React from 'react';
import { ChartWrapperProps } from '../types';
import { ResponsiveContainer } from 'recharts';
import './ChartWrapper.scss';

export const chartDefaultColors = [
  '#003f5c',
  '#2f4b7c',
  '#665191',
  '#a05195',
  '#d45087',
  '#f95d6a',
  '#ff7c43',
  '#ffa600',
];

export const ChartWrapper = ({
  wrapperHeight: height = 300,
  className = '',
  chartTitle,
  children,
}: ChartWrapperProps) => {
  return (
    <div className={`chart-wrapper ${className}`}>
      <h1 className='chart-title'>{chartTitle}</h1>
      <ResponsiveContainer width={'99%'} height={height}>
        {children}
      </ResponsiveContainer>
    </div>
  );
};
