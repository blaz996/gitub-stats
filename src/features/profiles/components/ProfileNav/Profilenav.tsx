import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

import './ProfileNav.scss';

const PROFILE_LINKS = ['', 'stats', 'repos'];
export const ProfileNav = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    navigate(activeLink);
  }, []);
  return (
    <>
      <div className='profile-nav'>
        <ul className='profile-nav__links'>
          {PROFILE_LINKS.map((link) => (
            <li key={link}>
              <Link
                className={`profile-nav__link ${
                  activeLink === link ? 'profile-nav__link--active' : ''
                }`}
                to={link}
                onClick={() => setActiveLink(link)}
              >
                {!link ? 'info' : link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
