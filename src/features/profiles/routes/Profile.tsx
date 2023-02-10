import { Route, Routes, useParams } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { useProfile } from '../hooks/useProfile';
/*
import { useProfileRepos } from '../hooks/useProfile';
import { useProfileFollowers } from '../hooks/useProfile';
import { useProfileFollowing } from '../hooks/useProfile';
*/
import { ProfileNav } from '../components/ProfileNav';
import { Spinner } from '@/components/Elements';
import { ProfileData, RepoData } from '../types';
import { ProfileDetails } from '../components';
import { ProfileStats } from '../components';
import { ProfileRepos } from '../components';
export const ProfileRoutes = () => {
  const { profileName } = useParams() as { profileName: string };
  const profileData = useProfile(profileName, { refetchOnMount: false });

  const [profile, profileRepos, profileFollowers, profileFollowing] =
    profileData;

  if (profileData.some((data) => data.isLoading)) {
    return <Spinner size='large' />;
  }

  if (profileData.some((data) => data.isError)) {
    return null;
  }

  return (
    <Routes>
      <Route element={<ProfileNav />}>
        <Route
          index
          element={
            <ProfileDetails
              profile={profile.data as ProfileData}
              repos={profileRepos.data as RepoData[]}
              followers={profileFollowers.data as ProfileData[]}
              following={profileFollowing.data as ProfileData[]}
            />
          }
        />
        <Route
          path='stats'
          element={
            <ProfileStats
              profile={profile.data as ProfileData}
              repos={profileRepos.data as RepoData[]}
            />
          }
        />
        <Route
          path='repos'
          element={<ProfileRepos repos={profileRepos.data as RepoData[]} />}
        />
      </Route>
    </Routes>
  );
};
