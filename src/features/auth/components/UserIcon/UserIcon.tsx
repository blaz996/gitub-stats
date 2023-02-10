import React from 'react';

import { useAuth } from '../../hooks/useAuth';

import './UserIcon.scss';

export const UserIcon = () => {
  const { currentUser } = useAuth();
  return (
    <div className='user-icon'>
      <span className='user-icon__letter'>
        {currentUser?.displayName?.slice(0, 1)}
      </span>
    </div>
  );
};
