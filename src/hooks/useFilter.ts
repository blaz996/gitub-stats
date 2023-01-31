import React from 'react';
import { useState, useEffect } from 'react';
import { sortFilteredData } from '@/utils/sort';

export type FilterValue<T> = {
  filterValue: keyof T;
  ascending: boolean;
};

export const useFilter = <T>(data: T[], defaultFilter?: FilterValue<T>) => {
  const [activeFilter, setActiveFilter] = useState<FilterValue<T>>(
    defaultFilter || ({} as FilterValue<T>)
  );
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    const filteredData = sortFilteredData<T>(
      data,
      activeFilter.filterValue,
      activeFilter.ascending
    );

    setFilteredData(filteredData);
  }, [activeFilter]);

  const toggleFilterAscending = React.useCallback(() => {
    setActiveFilter((oldFilterData) => ({
      ...oldFilterData,
      ascending: !oldFilterData.ascending,
    }));
  }, []);

  const toogleFilterValue = React.useCallback(
    (filterVal: keyof T) => {
      if (activeFilter.filterValue === filterVal) {
        toggleFilterAscending();
      } else {
        setActiveFilter({ filterValue: filterVal, ascending: true });
      }
    },
    [activeFilter]
  );
  const selectFilterValue = React.useCallback((filterVal: FilterValue<T>) => {
    setActiveFilter(filterVal);
  }, []);

  return {
    activeFilter,
    toogleFilterValue,
    selectFilterValue,
    filteredData,
    toggleFilterAscending,
  };
};
