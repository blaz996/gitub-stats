import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import './ToggleDropdown.scss';

type ToggleDropdownProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const ToggleDropdown = ({ toggle, isOpen }: ToggleDropdownProps) => {
  return (
    <button onClick={toggle} className='toggle-dropdown'>
      {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </button>
  );
};
