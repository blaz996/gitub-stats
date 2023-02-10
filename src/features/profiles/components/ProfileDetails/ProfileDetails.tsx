import React from 'react';
import { useQuery } from 'react-query';

import { getRepoStatTotal } from '../../assets/reposStats';
import {
  PROFILE_ATRIBUTES_DATA,
  PROFILE_DETAILS_DATA,
} from '../../assets/data';
import { ContentLayout } from '@/components/layout';
import { ProfileFollowing } from '../ProfileFollowing/ProfileFollowing';
import { ProfileInfo } from '../ProfileInfo';
import { AtributeCard } from '@/components/Elements/Card';
import { ProfileData, RepoData } from '../../types';

import './ProfileDetails.scss';

type ProfileDetailsProps = {
  profile: ProfileData;
  followers: ProfileData[];
  following: ProfileData[];
  repos: RepoData[];
};

export const ProfileDetails = ({
  profile,
  repos,
  followers,
  following,
}: ProfileDetailsProps) => {
  const profileTotalStars = getRepoStatTotal(repos, 'stargazers_count');
  const profileAtributesValues = [
    [profile.followers, profile.following],
    [profile.public_repos, profileTotalStars],
  ];

  console.log(profile.public_repos);
  console.log(profile.following);

  console.log(profileAtributesValues[1][1]);

  /*
        atributeLabel={profileAtr.label}
                    atributeValue={profileAtributesValues[i]}
                    color={profileAtr.color}
                    icon={profileAtr.icon}
  */

  return (
    <ContentLayout>
      <div className='profile-details'>
        <ProfileInfo
          profile={profile}
          followers={followers}
          following={following}
        />
        <div className='profile-atributes'>
          {PROFILE_ATRIBUTES_DATA.map((profileAtr, i) => {
            return (
              <div key={i} className='profile-atributes__col'>
                <AtributeCard
                  atributeLabel={profileAtr[0].label}
                  atributeValue={profileAtributesValues[i][0]}
                  color={profileAtr[0].color}
                  icon={profileAtr[0].icon}
                />
                <AtributeCard
                  atributeLabel={profileAtr[1].label}
                  atributeValue={profileAtributesValues[i][1]}
                  color={profileAtr[1].color}
                  icon={profileAtr[1].icon}
                />
              </div>
            );
          })}
        </div>
        <ProfileFollowing
          followers={followers}
          following={following}
          url={profile.html_url as string}
        />
      </div>
    </ContentLayout>
  );
};
