import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import { useDisclosure } from '@/hooks/useDisclosure';
import { ProfileSidebar } from '../Sidebar';
import { UserCircleIcon } from '@heroicons/react/24/solid';

import './NavBar.scss';

export const NavBar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useDisclosure();
  const {
    isOpen: isProfileSidebarOpen,
    toggle: toggleProfileSidebar,
    close: closeProfileSidebar,
  } = useDisclosure();
  return (
    <>
      <nav className='nav'>
        <h1 className='nav__logo'>
          <FaGithub />
          Github Stats
        </h1>
        <ul className='nav__links'>
          <li>
            <Link className='nav__link' to=''>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav__link' to='search'>
              Search
            </Link>
          </li>
          <li>
            <Link className='nav__link' to='trending'>
              Trending Repos
            </Link>
          </li>
          <li>
            <span className='nav__profile'>
              <UserCircleIcon onClick={toggleProfileSidebar} />
            </span>
          </li>
        </ul>
      </nav>
      <ProfileSidebar
        shown={isProfileSidebarOpen}
        closeProfileSidebar={closeProfileSidebar}
      />

      <Outlet />
    </>
  );
};
