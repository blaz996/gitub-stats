import React from 'react';
import { usePagination } from '@/hooks/usePagination';
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';

import { SetState } from '@/types';

import './Pagination.scss';

type PaginationProps<T> = {
  activePageIndex: number;
  data: T[][];
  updateActivePageIndex: SetState;
};

export const Pagination = <T,>({
  activePageIndex,
  updateActivePageIndex,
  data,
}: PaginationProps<T>) => {
  const { paginationArr, nextPage, previousPage, changePage } = usePagination(
    activePageIndex,
    data,
    updateActivePageIndex
  );

  if (data.length === 0) {
    return null;
  }

  return (
    <div className='pagination__container'>
      <div className='pagination'>
        <button
          onClick={() => previousPage(3)}
          className='pagination-nav__btn pagination-nav__btn--left'
        >
          <ChevronDoubleLeftIcon className='pagination-nav__icon' />
        </button>
        <button
          className='pagination-nav__btn pagination-nav__btn--left'
          onClick={() => previousPage(1)}
        >
          <ChevronLeftIcon className='pagination-nav__icon ' />
        </button>
        <div className='pagination__buttons'>
          {paginationArr.map((num) => (
            <button
              onClick={() => changePage(num - 1)}
              key={num}
              className={`pagination__btn ${
                num === activePageIndex + 1 ? 'active' : ''
              } `}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          className='pagination-nav__btn pagination-nav__btn--right'
          onClick={() => nextPage(1)}
        >
          <ChevronRightIcon className='pagination-nav__icon' />
        </button>
        <button
          className='pagination-nav__btn pagination-nav__btn--right'
          onClick={() => nextPage(3)}
        >
          <ChevronDoubleRightIcon className='pagination-nav__icon' />
        </button>
      </div>
    </div>
  );
};
