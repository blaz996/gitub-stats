import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileHead } from '../ProfileHead';

import { Button } from '@/components/Elements';

import './ProfilePreview.scss';
import { ProfilePreviewData } from '../../types';

export const ProfilePreview = ({
  profile,
}: {
  profile: ProfilePreviewData;
}) => {
  return (
    <div className='profile-preview'>
      <ProfileHead profile={profile} />
      <Link to={`/profiles/${profile.login}`}>
        <Button size='small'>View Profile</Button>
      </Link>
    </div>
  );
};
