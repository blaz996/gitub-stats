import React, { useState, useEffect } from 'react';

import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';

import { navigatePagination } from '@/utils/pagination';
import { generateRange } from '@/utils/generateRange';
import { SetState } from '@/types';

import './Pagination.scss';

type PaginationProps = {
  paginationStep?: number;
  pagesNum?: number;
  activePageIndex: number;
  data: unknown[];
  updateActivePageIndex: SetState;
};

export const Pagination = ({
  paginationStep,
  pagesNum,
  activePageIndex,
  updateActivePageIndex,
  data,
}: PaginationProps) => {
  const [paginatedArr, setPaginatedArr] = useState(generateRange(1, 4));

  useEffect(() => {
    setPaginatedArr(updatePagination);
    console.log(paginatedArr);
  }, [activePageIndex, data]);

  const {
    navigateBackwardStep,
    navigateForwardStep,
    navigateToPage,
    nextPage,
    prevPage,
    updatePagination,
  } = navigatePagination(activePageIndex, data, updateActivePageIndex);

  if (data.length === 0) {
    return <></>;
  }

  return (
    <div className='pagination'>
      <ChevronDoubleLeftIcon
        onClick={() => navigateBackwardStep(paginationStep)}
        className='pagination__icon'
      />
      <ChevronLeftIcon onClick={prevPage} className='pagination__icon ' />
      {paginatedArr.map((num) => (
        <button
          onClick={() => navigateToPage(num - 1)}
          key={num}
          className={`pagination__btn ${
            num === activePageIndex + 1 ? 'active' : ''
          } `}
        >
          {num}
        </button>
      ))}
      <ChevronRightIcon onClick={nextPage} className='pagination__icon' />
      <ChevronDoubleRightIcon
        onClick={() => navigateForwardStep(paginationStep)}
        className='pagination__icon'
      />
    </div>
  );
};
