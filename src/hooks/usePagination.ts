import React, { useState, useEffect, useCallback } from 'react';
import { SetState } from '@/types';

import { getPaginationUpStep, getPaginationDownStep } from '@/utils/pagination';
import { generateRange } from '@/utils/generateRange';

export const usePagination = <T>(
  activePageIndex: number,
  data: T[][],
  updateActivePageIndex: SetState
) => {
  const [paginationArr, setPaginationArr] = useState<number[]>([]);

  useEffect(() => {
    setPaginationArr(updatePaginationArr());
  }, [activePageIndex, data]);

  const updatePaginationArr = useCallback(() => {
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
  }, [activePageIndex, data]);

  const nextPage = useCallback(
    (step: number) => {
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
    },
    [activePageIndex, data]
  );

  const previousPage = useCallback(
    (step: number) => {
      const paginationStepDown = getPaginationDownStep(activePageIndex, step);
      if (paginationStepDown) {
        updateActivePageIndex(
          (oldIndex: number) =>
            oldIndex - (step > paginationStepDown ? paginationStepDown : step)
        );
      }
    },
    [activePageIndex, data]
  );

  const changePage = useCallback((num: number) => {
    updateActivePageIndex(num);
  }, []);

  return { paginationArr, nextPage, previousPage, changePage };
};
