import React from 'react';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useFavouriteProfiles } from '../hooks/useFavouriteProfiles';

import { Spinner } from '@/components/Elements';
import { ProfilesList } from '../components';
import { FavouriteProfile } from '../components';
import { ContentLayout } from '@/components/layout';

export const FavouriteProfiles = () => {
  const { currentUser } = useAuth();
  const {
    data: favouriteProfiles,
    isLoading,
    isSuccess,
  } = useFavouriteProfiles(currentUser!.uid);

  if (isLoading) {
    return <Spinner />;
  }

  if (!favouriteProfiles) {
    return null;
  }

  return (
    <ContentLayout bgColor='grey'>
      <div className='favourite-profiles'>
        <h1 className='layout-title'>Favourite Profiles</h1>
        <ProfilesList
          listLength={favouriteProfiles!.length}
          emptyListMsg='No favourite profiles'
          listFetched={isSuccess}
        >
          {favouriteProfiles.map((profile) => (
            <FavouriteProfile key={profile.id} profile={profile} />
          ))}
        </ProfilesList>
      </div>
    </ContentLayout>
  );
};
