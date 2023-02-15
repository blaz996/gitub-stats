import React from 'react';

import { Select } from '@/components/Form/Select';

import './TrendingHeader.scss';

type AllowSelect =
  | {
      selectEnabled: true;
      selectOptions: string[];
    }
  | { selectEnabled: false; selectOptions: never };

type TrendingHeaderProps = {
  title: string;
  selectEnabled: boolean;
  isLoading?: boolean;
} & AllowSelect &
  React.SelectHTMLAttributes<HTMLSelectElement>;
export const TrendingHeader = ({
  title,
  selectEnabled,
  selectOptions,
  isLoading,
  ...selectProps
}: TrendingHeaderProps) => {
  return (
    <div className='trending-header__container'>
      <div className='trending-header'>
        <h1 className='trending-header__title'>{title}</h1>
        {selectEnabled && (
          <Select
            disabled={isLoading}
            defaultOption='javascript'
            options={selectOptions}
            label='language'
            {...selectProps}
          />
        )}
      </div>
    </div>
  );
};
