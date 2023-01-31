import React from 'react';
import { ProfileHead } from '../ProfileHead';
import { Button } from '@/components/Elements';
import { ProfilePreviewResponse } from '../../types';

import './ProfileFollowingList.scss';

type ProfileFollowingListProps = {
  data: ProfilePreviewResponse[];
  type: 'followers' | 'following';
};

export const ProfileFollowingList = ({
  data,
  type,
}: ProfileFollowingListProps) => {
  if (data.length === 0) {
    return (
      <h3 className='profile-following__list--empty'>
        {type === 'followers'
          ? 'This profile has no followers'
          : 'This profile is not following anyone'}
      </h3>
    );
  }

  return (
    <div className='profile-following__list'>
      <h1 className='profile-following__list-title'>{type}</h1>
      {data.map((profile) => (
        <div className='profile'>
          <ProfileHead
            avatar_url={profile.avatar_url}
            key={profile.id}
            userName={profile.login}
          />
          <a className='profile__link' href={profile.html_url}>
            View on GitHub
          </a>
        </div>
      ))}
      {data.length === 30 && <Button size={'medium'}>View all{type}</Button>}
    </div>
  );
};
