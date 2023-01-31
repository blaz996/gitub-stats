import React from 'react';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { logOutUser } from '@/lib/firebase/auth';
import { Sidebar, SidebarProps } from './Sidebar';
import { Link } from 'react-router-dom';

import './ProfileSidebar.scss';

type ProfileSidebarProps = Omit<SidebarProps, 'children'>;

export const ProfileSidebar = ({
  shown,
  closeProfileSidebar,
}: ProfileSidebarProps) => {
  const { currentUser } = useAuth();

  return (
    <Sidebar shown={shown} closeProfileSidebar={closeProfileSidebar}>
      <h3 className='profile-sidebar__title'>
        Hello {currentUser?.displayName}
      </h3>
      <p className='profile-sidebar__email'>{currentUser?.email}</p>
      <ul className='profile-sidebar__links'>
        <li>
          <Link
            to={`/${currentUser?.displayName}/favourites`}
            className='profile-sidebar__link'
          >
            Favourites list
          </Link>
        </li>
        <li>
          <span
            onClick={() => {
              logOutUser();
              closeProfileSidebar();
            }}
            className='profile-sidebar__link'
          >
            Logout
          </span>
        </li>
      </ul>
    </Sidebar>
  );
};
