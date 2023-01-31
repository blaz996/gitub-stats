import React from 'react';
import { useQuery } from 'react-query';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { useMedia } from '@/hooks/useMedia';
import { ProfileHead } from '../ProfileHead';
import { ProfileFollowing } from '../ProfileFollowing/ProfileFollowing';
import { Profile } from '../../types';
import { Detail } from '@/components/Detail';
import { Dropdown, ToggleDropdown } from '@/components/Elements/Dropdown';
import { PROFILE_DETAILS_DATA } from '../../assets/data';
import { useDisclosure } from '@/hooks/useDisclosure';

import './ProfileInfo.scss';

export const ProfileInfo = ({ profile }: { profile: Profile }) => {
  const matchesMediumScreen = useMedia('(max-width:71.8125em)');
  const matchesSmallScreen = useMedia('(max-width:39.9375em)');
  const { isOpen, toggle } = useDisclosure();

  const renderProfileDetails = PROFILE_DETAILS_DATA.map((detail) => {
    const profileDetail = detail?.detail;
    return (
      <Detail icon={detail.icon} detail={profile![profileDetail] as string} />
    );
  });

  if (matchesMediumScreen && !matchesSmallScreen) {
    return (
      <div className='profile-info'>
        <div className='profile-info__top'>
          <ProfileHead
            avatar_url={profile.avatar_url}
            userName={profile.login}
            name={profile.name}
          />
        </div>
        <div className='profile-info__bottom'>
          <Dropdown isOpen={isOpen}>
            <ProfileFollowing profile={profile} />
          </Dropdown>
          <button className='profile-info__toogle-dropdown'>
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='profile-info'>
      <ProfileHead
        avatar_url={profile.avatar_url}
        userName={profile.login}
        name={profile.name}
      />
      <div className='profile-info__bottom'>
        <Dropdown isOpen={isOpen}>
          <div className='profile-info__details'>{renderProfileDetails}</div>
        </Dropdown>
      </div>
      <ToggleDropdown isOpen={isOpen} toggle={toggle} />
    </div>
  );
};
