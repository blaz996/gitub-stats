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
} & AllowSelect &
  React.SelectHTMLAttributes<HTMLSelectElement>;
export const TrendingHeader = ({
  title,
  selectEnabled,
  selectOptions,
  ...selectProps
}: TrendingHeaderProps) => {
  return (
    <div className='trending-header'>
      <h1 className='trending-header__title'>{title}</h1>
      {selectEnabled && (
        <Select
          defaultOption='javascript'
          options={selectOptions}
          label='language'
          {...selectProps}
        />
      )}
    </div>
  );
};
