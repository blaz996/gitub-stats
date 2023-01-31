import React from 'react';
import { FieldError } from 'react-hook-form';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import './FieldWrapper.scss';

type FieldWrapperProps = {
  error?: FieldError | undefined;
  label?: string;
  className?: string;
  children: React.ReactNode;
  description?: string;
  Icon?: React.ReactElement;
};

export type FieldWrappersPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label,
  className = '',

  error,
  children,
  description,
}: FieldWrapperProps) => {
  return (
    <div className={`field-wrapper ${className}`}>
      {error?.message && (
        <div className='field-wrapper__error'>
          <HiOutlineExclamationCircle className='error__icon' />
          <p className='error__message'>{error.message}</p>
        </div>
      )}
      {children}
      {label && <p className='field-wrapper__label'>{label}</p>}
    </div>
  );
};
