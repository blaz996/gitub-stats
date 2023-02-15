export const sortData = <T>(
  data: T[],
  filterValue: keyof T,
  filterAscending: boolean = true
) => {
  return data.sort((valA, valB) => {
    if (typeof valA[filterValue] === 'string') {
      const firstValue = valA[filterValue] as string;
      const secondValue = valB[filterValue] as string;
      if (filterAscending) {
        if (firstValue > secondValue) return 1;
        if (firstValue < secondValue) return -1;
        return 0;
      } else {
        if (firstValue > secondValue) return -1;
        if (firstValue < secondValue) return 1;
        return 0;
      }
    } else {
      const firstValue = valA[filterValue] as number;
      const secondValue = valB[filterValue] as number;
      return filterAscending
        ? secondValue - firstValue
        : firstValue - secondValue;
    }
  });
};
