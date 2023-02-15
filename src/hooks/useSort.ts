import React from 'react';
import { useState, useEffect } from 'react';
import { sortData } from '@/utils/sort';

export type SortT<T> = {
  value: keyof T;
  ascending: boolean;
};

export const useSort = <T>(data: T[], defaultFilter?: SortT<T>) => {
  const [activeSort, setActiveSortValue] = useState<SortT<T>>(
    defaultFilter || ({} as SortT<T>)
  );
  const [sortedData, setSortedData] = useState<T[]>([]);

  useEffect(() => {
    const sortedData = sortData<T>(
      data,
      activeSort.value,
      activeSort.ascending
    );

    setSortedData(sortedData);
  }, [activeSort]);

  const toggleSortAscending = React.useCallback(() => {
    setActiveSortValue((oldSortData) => ({
      ...oldSortData,
      ascending: !oldSortData.ascending,
    }));
  }, []);

  const toggleSortValue = React.useCallback(
    (sortVal: keyof T) => {
      if (activeSort.value === sortVal) {
        toggleSortAscending();
      } else {
        setActiveSortValue({ value: sortVal, ascending: true });
      }
    },
    [activeSort]
  );
  const selectSortValue = React.useCallback((filterVal: SortT<T>) => {
    setActiveSortValue(filterVal);
  }, []);

  return {
    activeSort,
    toggleSortValue,
    selectSortValue,
    sortedData,
    toggleSortAscending,
  };
};
