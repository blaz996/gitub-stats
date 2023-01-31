import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import './FormError.scss';

export const FormError = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <div className='form-error'>
      <HiOutlineExclamationCircle />
      <p className='form-error__message'>{errorMsg}</p>
    </div>
  );
};
