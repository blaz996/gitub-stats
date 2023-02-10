import React, { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { FaHome, FaGithub, FaSearch } from 'react-icons/fa';
import { BiTrendingUp, BiLogIn } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { useDisclosure } from '@/hooks/useDisclosure';

import { NavSidebar } from '../Sidebar/NavSidebar';

import { NavLink } from '../Sidebar';

import './NavBar.scss';
import { UserPopup } from '@/features/auth/components/UserPopup';

export const navLinks = [
  { icon: <FaHome />, path: '/', link: 'home' },
  { icon: <FaSearch />, path: '/search', link: 'search' },
  { icon: <BiTrendingUp />, path: '/trending', link: 'trending' },
  { icon: <BiLogIn />, path: '/login', link: 'login' },
];

export const NavBar = () => {
  const {
    isOpen: isProfilePopupOpen,
    toggle: toggleProfilePopup,

    close: closeProfilePopup,
  } = useDisclosure();

  const {
    isOpen: isNavSidebarOpen,
    open: openNavSidebar,
    close: closeNavSidebar,
  } = useDisclosure();

  const popupRef = useRef(null);
  const popupToggleRef = useRef(null);
  useOutsideAlerter(popupRef, closeProfilePopup, popupToggleRef);

  const { currentUser } = useAuth();

  return (
    <>
      <nav className='nav'>
        <Bars3Icon onClick={openNavSidebar} className='nav__sidebar-toggle' />

        <h1 className='nav__logo'>
          <FaGithub />
          Github Stats
        </h1>
        <ul className='nav__links'>
          {navLinks.slice(0, 3).map((navLink) => (
            <li key={navLink.link}>
              <NavLink
                key={navLink.link}
                className='navbar__link'
                linkPath={navLink.path}
                link={navLink.link}
              />
            </li>
          ))}
          {currentUser ? (
            <li ref={popupToggleRef} onClick={toggleProfilePopup}>
              <CgProfile className='nav__toggle-user' />
            </li>
          ) : (
            <li>
              <Link className='nav__link' to='/login'>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {isProfilePopupOpen && (
        <UserPopup ref={popupRef} closePopup={closeProfilePopup} />
      )}
      <NavSidebar
        shown={isNavSidebarOpen}
        closeSidebar={closeNavSidebar}
        currentProfile={currentUser}
      />

      <Outlet />
    </>
  );
};
