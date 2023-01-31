import React from 'react';

import './ProfileHead.scss';

export type ProfileHeadProps = {
  avatar_url: string;
  userName: string;
  name?: string;
};

export const ProfileHead = ({
  avatar_url,
  userName,
  name,
}: ProfileHeadProps) => {
  return (
    <div className='profile-head'>
      <div className='profile-head__avatar-wrapper'>
        <img src={avatar_url} className='profile-head__avatar' />
      </div>
      <p className='profile-head__username'>{userName}</p>
      <p className='profile-head__name'>{name}</p>
    </div>
  );
};
