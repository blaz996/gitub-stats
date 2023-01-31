import React from 'react';

import { ProfileFollowingList } from '../ProfileFollowingList';
import { Profile } from '../../types';
import { useProfile } from '../../hooks/useProfile';

import './ProfileFollowing.scss';

export const ProfileFollowing = ({ profile }: { profile: Profile }) => {
  return (
    <div className='profile-following'>
      <ProfileFollowingList data={profile.followers} type='followers' />
      <ProfileFollowingList data={profile.following} type='following' />
    </div>
  );
};
