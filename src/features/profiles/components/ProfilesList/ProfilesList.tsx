import React, { useState } from 'react';

import { ProfilePreview } from '../ProfilePreview';
import { ProfilePreviewData } from '../../types';

import './ProfilesList.scss';

type ProfilesListProps = {
  children: React.ReactNode;
  listLength: number;
  listFetched?: boolean;
  noProfilesMessage?: string;
  emptyListMsg?: string;
};

export const ProfilesList = ({
  children,
  listLength,
  listFetched,
  emptyListMsg,
}: ProfilesListProps) => {
  if (listFetched && listLength === 0) {
    return <h1 className='profiles-list--empty'>{emptyListMsg}</h1>;
  }

  return <div className='profiles-list'>{children}</div>;
};
