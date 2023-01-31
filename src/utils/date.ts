import { format, subMonths } from 'date-fns';

export const getPrevMonthDate = () => {
  return format(subMonths(new Date(), 1), 'yyyy-MM-dd');
};

export const formatDate = (date: string) => {
  return format(new Date(date), 'do MMM y');
};
