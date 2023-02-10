import React from 'react';

import { ProfileFollowingList } from '../ProfileFollowingList';
import { ProfileData } from '../../types';
import { useProfile } from '../../hooks/useProfile';

import './ProfileFollowing.scss';

type ProfileFollowingProps = {
  following: ProfileData[];
  followers: ProfileData[];
  url: string;
};

export const ProfileFollowing = ({
  following,
  followers,
  url,
}: ProfileFollowingProps) => {
  return (
    <div className='profile-following'>
      <ProfileFollowingList data={followers} type='followers' url={url} />
      <ProfileFollowingList data={following} type='following' url={url} />
    </div>
  );
};
