import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { User } from 'firebase/auth';

import { navLinks } from '../NavBar';

import { Sidebar } from './Sidebar';
import { NavLink } from './NavLink';
import { SidebarProps } from './Sidebar';

import './NavSidebar.scss';

type NavSidebarProps = Omit<SidebarProps, 'children'> & {
  currentProfile: User | null;
};

export const NavSidebar = ({
  shown,
  closeSidebar,
  currentProfile,
}: NavSidebarProps) => {
  return (
    <Sidebar shown={shown} closeSidebar={closeSidebar} className='nav-sidebar'>
      <div className='nav-sidebar__logo'>
        <FaGithub />
        <h4>github stats</h4>
      </div>
      <ul className='nav-sidebar__links'>
        {navLinks.map((navLink) => {
          if (navLink.link === 'login' && currentProfile) {
            return;
          }
          return (
            <li key={navLink.link}>
              <NavLink
                linkPath={navLink.path}
                link={navLink.link}
                icon={navLink.icon}
                handleClick={closeSidebar}
                className='sidebar-link'
              />
            </li>
          );
        })}
      </ul>
    </Sidebar>
  );
};
