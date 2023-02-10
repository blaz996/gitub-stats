import React from 'react';

import { AiFillGithub } from 'react-icons/ai';

import { ProfileHead } from '../ProfileHead';
import { Button } from '@/components/Elements';
import { ProfilePreviewData } from '../../types';

import './ProfileFollowingList.scss';
import { profile } from 'console';

type ProfileFollowingListProps = {
  data: ProfilePreviewData[];
  type: 'followers' | 'following';
  url: string;
};

export const ProfileFollowingList = ({
  data,
  type,
  url,
}: ProfileFollowingListProps) => {
  if (data.length === 0) {
    return (
      <div className='profile-following__list profile-following__list--empty '>
        <h1 className='profile-following__list-title'>{type}</h1>
        <h3 className='profile-following__list-empty-text'>
          {type === 'followers'
            ? 'This profile has no followers'
            : 'This profile is not following  anyone'}
        </h3>
      </div>
    );
  }

  return (
    <div className='profile-following__list'>
      <h1 className='profile-following__list-title'>{type}</h1>
      {data.map((profile) => (
        <div key={profile.id} className='profile'>
          <ProfileHead profile={profile} link={true} />

          <a className='profile__link' href={profile.html_url}>
            <AiFillGithub />
          </a>
        </div>
      ))}
      {data.length === 30 && (
        <a className='profile-following__view-all' href={`${url}?tab=${type}`}>
          <Button size={'medium'}>View all {type}</Button>
        </a>
      )}
    </div>
  );
};
