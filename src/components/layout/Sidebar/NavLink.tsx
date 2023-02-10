import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.scss';

type SidebarLinkProps = {
  link?: string;
  linkPath?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  className?: string;
};

export const NavLink = ({
  link,
  linkPath,
  icon,
  handleClick,
  className,
}: SidebarLinkProps) => {
  return (
    <>
      {link && linkPath ? (
        <Link
          onClick={handleClick}
          to={linkPath}
          className={`nav__link ${className}`}
        >
          {icon}
          <span className='nav__link-text'>{link}</span>
        </Link>
      ) : (
        <div onClick={handleClick} className='nav__link'>
          {icon}
          <span className='nav__link-text'>{link}</span>
        </div>
      )}
    </>
  );
};
