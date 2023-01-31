import React from 'react';
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid';
import { FilterValue } from '@/hooks/useFilter';
import { RepoResponse } from '@/features/profiles/types';

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
      {value.icon}
      {isActiveFilter && (
        <span>
          {activeFilterField.ascending ? (
            <ArrowSmallUpIcon />
          ) : (
            <ArrowSmallDownIcon />
          )}
        </span>
      )}
    </th>
  );
};
