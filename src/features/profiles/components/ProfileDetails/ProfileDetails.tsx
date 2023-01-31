import React from 'react';
import { useQuery } from 'react-query';

import { useMedia } from '@/hooks/useMedia';
import {
  PROFILE_ATRIBUTES_DATA,
  PROFILE_DETAILS_DATA,
} from '../../assets/data';
import { Profile } from '../../types';

import { ProfileFollowing } from '../ProfileFollowing/ProfileFollowing';
import { ProfileInfo } from '../ProfileInfo';
import { AtributeCard } from '@/components/Elements/Card';

import './ProfileDetails.scss';

export const ProfileDetails = ({ profile }: { profile: Profile }) => {
  const matchesLargeScreen = useMedia('(min-width:71.875em');

  return (
    <div className='profile-details'>
      <ProfileInfo profile={profile} />
      <div className='profile-atributes'>
        {PROFILE_ATRIBUTES_DATA.map((profileAtrArr, i) => {
          return (
            <div key={i} className='profile-atributes__col'>
              {profileAtrArr.map((profileAtr) => (
                <div className='profile-atribute'>
                  <AtributeCard
                    atributeLabel={profileAtr.label}
                    atributeValue={profile[profileAtr.value] as number}
                    color={profileAtr.color}
                    icon={profileAtr.icon}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {matchesLargeScreen && <ProfileFollowing profile={profile} />}
    </div>
  );
};
