import { generateRange } from './generateRange';

import { SetState } from '@/types';

import { useCallback } from 'react';

export const paginate = (arr: any[], itemsPerPage: number = 10) => {
  const pagesNum = arr.length / itemsPerPage;
  const paginatedArr = Array.from({ length: pagesNum }, (_, i) => {
    const start = i * itemsPerPage;
    return arr.slice(start, start + itemsPerPage);
  });
  return paginatedArr;
};

export const navigatePagination = (
  activePageIndex: number,
  data: unknown[],
  updateActivePageIndex: SetState
) => {
  const pageUpExists = (step: number = 1) =>
    activePageIndex + step >= data.length ? false : true;

  const pageDownExists = (step: number = 1) =>
    activePageIndex - step < 0 ? false : true;

  const updatePagination = () => {
    const currPageIndex = activePageIndex + 1;
    let result = [currPageIndex];

    if (pageDownExists()) {
      result = [...generateRange(currPageIndex + 2, currPageIndex), ...result];
    }

    if (pageUpExists()) {
      result = [...result, ...generateRange(currPageIndex, currPageIndex + 3)];
    }

    console.log(result);

    return result.filter((num) => num <= 10 && num > 0);
  };
  const nextPage = () => {
    if (!pageUpExists()) return;
    updateActivePageIndex((prevActivePage: number) => prevActivePage + 1);
  };
  const prevPage = () => {
    if (!pageDownExists()) return;
    updateActivePageIndex((prevActivePage: number) => prevActivePage - 1);
  };
  const navigateToPage = (index: number) => {
    updateActivePageIndex(index);
  };
  const navigateForwardStep = (step: number = 3) =>
    pageUpExists(step)
      ? updateActivePageIndex((prevActivePage: number) => prevActivePage + step)
      : updateActivePageIndex(data.length - 1);

  const navigateBackwardStep = (step: number = 3) => {
    pageDownExists(step)
      ? updateActivePageIndex((prevActivePage: number) => prevActivePage - step)
      : updateActivePageIndex(0);
  };

  return {
    updatePagination,
    nextPage,
    prevPage,
    navigateToPage,
    navigateForwardStep,
    navigateBackwardStep,
  };
};
