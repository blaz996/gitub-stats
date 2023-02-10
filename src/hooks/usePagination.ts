import React, { useState, useEffect, useCallback } from 'react';
import { SetState } from '@/types';

import { generateRange } from '@/utils/generateRange';

const getPaginationDownStep = (
  activePageIndex: number,
  step: number = 2
): any => {
  if (step === 0) {
    return null;
  }

  if (activePageIndex - step < 0) {
    return getPaginationDownStep(activePageIndex, step - 1);
  } else {
    return step;
  }
};

const getPaginationUpStep = <T>(
  activePageIndex: number,
  data: T[][],
  step: number = 3
): any => {
  if (step === 0) {
    return null;
  }

  if (activePageIndex + step >= data.length) {
    return getPaginationUpStep(activePageIndex, data, step - 1);
  } else {
    return step;
  }
};

export const usePagination = <T>(
  activePageIndex: number,
  data: T[][],
  updateActivePageIndex: SetState
) => {
  const [paginationArr, setPaginationArr] = useState<number[]>([]);

  useEffect(() => {
    setPaginationArr(updatePaginationArr());
  }, [activePageIndex, data]);

  const updatePaginationArr = () => {
    const currPaginationIndex = activePageIndex + 1;
    const paginationStepDown = getPaginationDownStep(activePageIndex);
    const paginationStepUp = getPaginationUpStep<T>(activePageIndex, data);

    let result = [currPaginationIndex];

    if (paginationStepDown) {
      result = [
        ...generateRange(
          currPaginationIndex + paginationStepDown,
          currPaginationIndex
        ),
        ...result,
      ];
    }
    if (paginationStepUp) {
      result = [
        ...result,
        ...generateRange(
          currPaginationIndex,
          currPaginationIndex + paginationStepUp
        ),
      ];
    }
    return result;
  };

  const nextPage = (step: number) => {
    console.log('called');
    const paginationStepUp = getPaginationUpStep<T>(
      activePageIndex,
      data,
      step
    );
    if (paginationStepUp) {
      updateActivePageIndex(
        (oldIndex: number) =>
          oldIndex + (step > paginationStepUp ? paginationStepUp : step)
      );
    }
  };

  const previousPage = (step: number) => {
    console.log('called');
    const paginationStepDown = getPaginationDownStep(activePageIndex, step);
    if (paginationStepDown) {
      updateActivePageIndex(
        (oldIndex: number) =>
          oldIndex - (step > paginationStepDown ? paginationStepDown : step)
      );
    }
  };

  const changePage = useCallback((num: number) => {
    console.log('called');
    updateActivePageIndex(num);
  }, []);

  return { paginationArr, nextPage, previousPage, changePage };
};
