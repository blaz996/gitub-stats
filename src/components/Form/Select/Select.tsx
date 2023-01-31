import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

import './Select.scss';

type SelectProps = {
  defaultOption: string;
  options: string[];
  label?: string;
  registration?: UseFormRegisterReturn;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  defaultOption,
  label,
  options,
  registration,
  ...selectProps
}: SelectProps) => {
  return (
    <div className='select__container'>
      {label && <label className='select__label'>{label}</label>}
      <div className='select__wrapper'>
        <select
          {...registration}
          name='languages'
          id='languages'
          className='select'
          {...selectProps}
        >
          {options.map((option) => {
            if (option === defaultOption) {
              return <option selected={true}>{option.toUpperCase()}</option>;
            }
            return <option value={option}>{option.toUpperCase()}</option>;
          })}
        </select>

        <span className='select__toggle'>
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
};
