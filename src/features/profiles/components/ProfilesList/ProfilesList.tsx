import React, { useState } from 'react';

import { ProfilePreview } from '../ProfilePreview';
import { ProfilePreviewData } from '../../types';

import './ProfilesList.scss';

type ProfilesListProps = {
  children: React.ReactNode;
  listLength: number;
  listFetched?: boolean;
  listTitle?: string;
  emptyListMsg?: string;
};

export const ProfilesList = ({
  children,
  listLength,
  listFetched,
  emptyListMsg,
  listTitle,
}: ProfilesListProps) => {
  return (
    <div className='profiles-list__container'>
      {listTitle && (
        <div className='profiles-list__header'>
          <h2 className='profiles-list__title'>{listTitle}</h2>
        </div>
      )}
      {listFetched && listLength < 1 ? (
        <h1 className='profiles-list--empty'>{emptyListMsg}</h1>
      ) : (
        <div className='profiles-list'>{children}</div>
      )}
    </div>
  );
};
