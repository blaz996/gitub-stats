import React from 'react';

import { Link, Outlet } from 'react-router-dom';

export const ProfileSharedLayout = () => {
  return (
    <>
      <div className='profile-links'>
        <ul className=''>
          <li>
            <Link to=''>Info</Link>
            <Link to='stats'>Stats</Link>
            <Link to='repos'>Repos</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
