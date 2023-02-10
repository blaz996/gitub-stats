import React, { ReactText } from 'react';
import { useDisclosure } from '@/hooks/useDisclosure';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import './Dropdown.scss';

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
};

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className = '' }, ref) => {
    const { isOpen, toggle } = useDisclosure();
    return (
      <div className={`${className}`}>
        <div
          className={`dropdown__content ${
            isOpen ? 'dropdown__content--active' : ''
          }`}
        >
          {children}
        </div>
        <button onClick={toggle} className='dropdown__toggle'>
          {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </button>
      </div>
    );
  }
);
