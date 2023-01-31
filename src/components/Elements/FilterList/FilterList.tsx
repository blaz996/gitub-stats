import React from 'react';
import { FilterValue } from '@/hooks/useFilter';

import './FilterList.scss';

type FilterListProps<T> = {
  filters: { filter: FilterValue<T>; label: string }[];
  activeFilter: FilterValue<T>;
  updateFilter: (filter: FilterValue<T>) => void;
};

export const FilterList = <T,>({
  filters,
  updateFilter,
  activeFilter,
}: FilterListProps<T>) => {
  return (
    <ul className='filter-list'>
      {filters.map(({ label, filter }) => (
        <li
          onClick={() => updateFilter(filter)}
          className={`filter-list__item ${
            filter.filterValue === activeFilter.filterValue
              ? 'filter-list__item--disabled'
              : ''
          }`}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};
