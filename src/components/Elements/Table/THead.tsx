import React from 'react';
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid';
import { FilterValue } from '@/hooks/useFilter';

import './THead.scss';

type TheadProps<T> = {
  value: { icon: React.ReactNode | string; field: keyof T };
  activeFilterField: FilterValue<T>;
  toggleActiveFilter: (filter: keyof T) => void;
};

export const THead = <T,>({
  activeFilterField,
  toggleActiveFilter,
  value,
}: TheadProps<T>) => {
  const isActiveFilter = activeFilterField.filterValue === value.field;
  return (
    <th
      className={`${isActiveFilter ? 'active' : ''}`}
      onClick={() => toggleActiveFilter(value.field)}
    >
      <div className='th__icon-wrapper'>
        <span className='th__icon'>{value.icon}</span>
        {isActiveFilter && (
          <span>
            {activeFilterField.ascending ? (
              <ArrowSmallUpIcon />
            ) : (
              <ArrowSmallDownIcon />
            )}
          </span>
        )}
      </div>
    </th>
  );
};
