import React, { useRef } from 'react';

import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { Overlay } from '../NavBar/Overlay';

import './Sidebar.scss';

export type SidebarProps = {
  shown: boolean;
  closeSidebar: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Sidebar = ({
  shown,
  closeSidebar,
  children,
  className = '',
}: SidebarProps) => {
  const sidebarRef = useRef(null);
  useOutsideAlerter(sidebarRef, closeSidebar);
  return (
    <Overlay shown={shown}>
      <div
        ref={sidebarRef}
        className={`sidebar ${shown ? 'sidebar--active' : ''} ${className}`}
      >
        {children}
      </div>
    </Overlay>
  );
};

/*

  <div
        ref={sidebarRef}
        className={`sidebar ${shown ? 'sidebar--active' : ''}`}
      >
        <h3 className='profile-sidebar__title'>
          Hello {currProfile?.displayName}
        </h3>
        <p className='profile-sidebar__email'>{currProfile?.email}</p>
        <ul className='profile-sibear__links'>
          <li>
            <Link
              to={`/${currProfile?.displayName}/favourites`}
              className='profile-sidebar__link'
            >
              Favourites list
            </Link>
          </li>
          <li>
            <span onClick={logOutUser} className='profile-sidebar__link'>
              Logout
            </span>
          </li>
        </ul>
      </div>
      */
