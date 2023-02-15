import React from 'react';
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid';
import { SortT } from '@/hooks/useSort';

import './THead.scss';

type TheadProps<T> = {
  value: { icon: React.ReactNode | string; field: keyof T };
  activeSort: SortT<T>;
  toggleActiveSort: (sort: keyof T) => void;
};

export const THead = <T,>({
  activeSort,
  toggleActiveSort,
  value,
}: TheadProps<T>) => {
  const isActiveSort = activeSort.value === value.field;
  return (
    <th
      className={`${isActiveSort ? 'active' : ''} selection--off`}
      onClick={() => toggleActiveSort(value.field)}
    >
      <div className='th__icon-wrapper'>
        <span className='th__icon'>{value.icon}</span>
        {isActiveSort && (
          <span>
            {activeSort.ascending ? (
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
