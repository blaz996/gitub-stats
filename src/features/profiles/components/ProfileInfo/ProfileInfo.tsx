import React, { useRef } from 'react';

import { useAuth } from '@/features/auth/hooks/useAuth';

import { PROFILE_DETAILS_DATA } from '../../assets/data';

import { ProfileHead } from '../ProfileHead';
import { AddFavouriteProfile } from '../AddFavouriteProfile';
import { ProfileFollowing } from '../ProfileFollowing/ProfileFollowing';
import { ProfileData } from '../../types';
import { Detail } from '@/components/Detail';
import { Dropdown } from '@/components/Elements/Dropdown';

import './ProfileInfo.scss';

type ProfileInfoProps = {
  profile: ProfileData;
  following: ProfileData[];
  followers: ProfileData[];
};

export const ProfileInfo = ({
  profile,
  followers,
  following,
}: ProfileInfoProps) => {
  const { currentUser } = useAuth();

  console.log(profile);

  const renderProfileDetails = PROFILE_DETAILS_DATA.map((detail) => {
    const profileDetail = detail?.detail;
    return (
      <Detail
        key={detail.detail}
        icon={detail.icon}
        detail={profile![profileDetail] as string}
      />
    );
  });

  return (
    <div className='profile-info'>
      {currentUser && (
        <AddFavouriteProfile currUser={currentUser} profile={profile} />
      )}

      <div className='profile-info__top'>
        <ProfileHead profile={profile} />
        <div className='profile-info__details'>{renderProfileDetails}</div>
      </div>
      <div className='profile-info__bottom'>
        <Dropdown className='profile-following__dropdown'>
          <ProfileFollowing
            url={profile.html_url as string}
            followers={followers}
            following={following}
          />
        </Dropdown>
        <Dropdown className='profile-details__dropdown'>
          <div className='profile-info__details'>{renderProfileDetails}</div>
        </Dropdown>
      </div>
    </div>
  );
};
