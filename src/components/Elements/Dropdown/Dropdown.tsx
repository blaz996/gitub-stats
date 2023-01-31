import React from 'react';
import { useDisclosure } from '@/hooks/useDisclosure';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import './Dropdown.scss';

type DropDownProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Dropdown = ({ children, isOpen }: DropDownProps) => {
  return (
    <div
      className={`dropdown__content ${
        isOpen ? 'dropdown__content--active' : ''
      }`}
    >
      {children}
    </div>
  );
};
