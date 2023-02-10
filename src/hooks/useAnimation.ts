import { useTransition } from 'react-spring';

export const useFadeInAnimation = <T extends { id: number }>(data: T[]) => {
  return useTransition(data, {
    keys: (val) => val.id,
    from: {
      x: -80,
      opacity: 0,
    },
    enter: { x: 0, opacity: 1 },
    trail: 400,
  });
};

export const usePopInAnimation = (data: any) => {
  return useTransition(data, {
    key: (data: any) => data,
    from: {
      y: -100,
      opacity: 0,
    },
    enter: { opacity: 1, y: 80, transform: 'translate(-50%)' },
    leave: { opacity: 0, y: -100 },
  });
};
