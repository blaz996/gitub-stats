import React from 'react';
import { SortT } from '@/hooks/useSort';

import './SortList.scss';

type SortListProps<T> = {
  sortValues: { sort: SortT<T>; label: string }[];
  activeSort: SortT<T>;
  updateSort: (sort: SortT<T>) => void;
};

export const SortList = <T,>({
  sortValues,
  updateSort,
  activeSort,
}: SortListProps<T>) => {
  return (
    <ul className='filter-list'>
      {sortValues.map(({ label, sort }) => (
        <li
          key={label}
          onClick={() => updateSort(sort)}
          className={`filter-list__item ${
            sort.value === activeSort.value ? 'filter-list__item--disabled' : ''
          }`}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};
