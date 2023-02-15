import React from 'react';
import { Link } from 'react-router-dom';
import { ProfilePreviewData } from '../../types';

import './ProfileHead.scss';

type ProfileHeadProps = {
  profile: ProfilePreviewData;
  link?: boolean;
};

export const ProfileHead = ({ profile, link = false }: ProfileHeadProps) => {
  const { avatar_url, login, name } = profile;
  return (
    <div className='profile-head'>
      <div className='profile-head__avatar-wrapper'>
        {link ? (
          <Link to={`/profiles/${login}`}>
            <img src={avatar_url} className='profile-head__avatar' />
          </Link>
        ) : (
          <img src={avatar_url} className='profile-head__avatar' />
        )}
      </div>
      {link ? (
        <Link
          className='profile-head__username profile-head__link'
          to={`/profiles/${login}`}
        >
          {login}
        </Link>
      ) : (
        <p className='profile-head__username'>{login}</p>
      )}
      {name && <p className='profile-head__name'>{name}</p>}
    </div>
  );
};
