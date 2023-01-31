import React from 'react';

import './Radio.scss';

type RadioProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({
  name = '',
  value,
  id = '',
  label,
  ...props
}: RadioProps) => {
  return (
    <div className='radio__container'>
      {label && (
        <label className='radio__label' htmlFor={id}>
          {label}
        </label>
      )}
      <label className='radio'>
        <input type='radio' {...props} />
        <span className='radio__check'></span>
      </label>
    </div>
  );
};
