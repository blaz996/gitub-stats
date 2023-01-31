import { Route, Routes, useParams } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { useProfile } from '../hooks/useProfile';
import { ProfileSharedLayout } from './ProfileSharedLayout';
import { Spinner } from '@/components/Elements';

const { ProfileDetails } = lazyImport(
  () => import('../components'),
  'ProfileDetails'
);

const { ProfileStats } = lazyImport(
  () => import('../components'),
  'ProfileStats'
);

const { ProfileRepos } = lazyImport(
  () => import('../components'),
  'ProfileRepos'
);

export const ProfileRoutes = () => {
  const { profileName } = useParams() as { profileName: string };
  const {
    data: profile,
    isLoading,
    isError,
  } = useProfile(profileName, {
    refetchOnMount: false,
  });

  if (isLoading) {
    return <Spinner size='large' />;
  }

  if (!profile) {
    return null;
  }

  return (
    <Routes>
      <Route element={<ProfileSharedLayout />}>
        <Route index element={<ProfileDetails profile={profile} />} />
        <Route path='stats' element={<ProfileStats repos={profile.repos} />} />
        <Route path='repos' element={<ProfileRepos repos={profile.repos} />} />
      </Route>
    </Routes>
  );
};
