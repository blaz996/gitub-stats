export const paginate = (arr: any[], itemsPerPage: number = 10) => {
  const pagesNum = Math.ceil(arr.length / itemsPerPage);
  const paginatedArr = Array.from({ length: pagesNum }, (_, i) => {
    const start = i * itemsPerPage;
    return arr.slice(start, start + itemsPerPage);
  });
  return paginatedArr;
};

export const getPaginationDownStep = (
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

export const getPaginationUpStep = <T>(
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
