import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/Elements';

import './ProfilePreview.scss';

export type ProfilePreviewProps = {
  login: string;
  avatar_url: string;
};

export const ProfilePreview = ({
  login: profileName,
  avatar_url,
}: ProfilePreviewProps) => {
  return (
    <div className='profile-preview'>
      <img className='profile-preview__avatar' src={avatar_url} alt='' />
      <h3 className='profile-preview__name'>{profileName}</h3>
      <Link to={`/profiles/${profileName}`}>
        <Button size='small'>View Profile</Button>
      </Link>
    </div>
  );
};
