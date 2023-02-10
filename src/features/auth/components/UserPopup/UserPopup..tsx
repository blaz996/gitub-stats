import React, { forwardRef } from 'react';
import { FaUsers } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
import { logOutUser } from '@/lib/firebase/auth';

import { useAuth } from '../../hooks/useAuth';

import { UserIcon } from '../UserIcon';
import { NavLink } from '@/components/layout/Sidebar';

import './UserPopup.scss';

type UserPopupProps = {
  closePopup: () => void;
};

export const UserPopup = forwardRef<HTMLDivElement, UserPopupProps>(
  ({ closePopup }, ref) => {
    const { currentUser } = useAuth();

    const handleLogout = () => {
      logOutUser();
    };
    const navigate = useNavigate();

    return (
      <div className='user-popup' ref={ref}>
        <div className='user-popup__header'>
          <UserIcon />
          <p className='user-popup__header-name'>{currentUser?.displayName}</p>
          <p className='user-popup__header-email'>{currentUser?.email}</p>
        </div>
        <div className='user-popup__body'>
          <ul className='user-popup__links'>
            <NavLink
              linkPath={`/${currentUser?.displayName}/favourites`}
              link='favourite profiles'
              handleClick={closePopup}
              icon={<FaUsers />}
            />
            <NavLink
              handleClick={() => {
                handleLogout();
                closePopup();
                navigate('/');
              }}
              link='logout'
              icon={<BiLogOut />}
            />
          </ul>
        </div>
      </div>
    );
  }
);
