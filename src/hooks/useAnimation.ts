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
