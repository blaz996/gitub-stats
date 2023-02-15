import React, { RefObject, useEffect } from 'react';

export const useOutsideAlerter = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void,
  ignooreRef?: RefObject<any>
) => {
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !ignooreRef?.current.contains(e.target)
      ) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
