import React, { useState } from 'react';

import { ProfilePreview } from '../ProfilePreview';
import { ProfilePreviewResponse } from '../../types';

import './ProfilesList.scss';

type ProfilesListProps = {
  data: ProfilePreviewResponse[];
  isSuccess: boolean;
};

export const ProfilesList = ({ data, isSuccess }: ProfilesListProps) => {
  if (isSuccess && data.length === 0) {
    return <h1>No users match the searched value</h1>;
  }

  return (
    <div className='profiles-list'>
      {data.map((profile) => (
        <ProfilePreview key={profile.id} {...profile} />
      ))}
    </div>
  );
};
