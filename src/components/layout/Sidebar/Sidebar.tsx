import React, { useRef } from 'react';

import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { Overlay } from '../NavBar/Overlay';

import './Sidebar.scss';

export type SidebarProps = {
  shown: boolean;
  closeProfileSidebar: () => void;
  children: React.ReactNode;
};

export const Sidebar = ({
  shown,
  closeProfileSidebar,
  children,
}: SidebarProps) => {
  const sidebarRef = useRef(null);
  useOutsideAlerter(sidebarRef, closeProfileSidebar);
  return (
    <Overlay shown={shown}>
      <div
        ref={sidebarRef}
        className={`sidebar ${shown ? 'sidebar--active' : ''}`}
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
