import React from 'react';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useFavouriteProfiles } from '../hooks/useFavouriteProfiles';
import { Spinner } from '@/components/Elements';
import { ProfilePreviewResponse } from '../types';

export const FavouriteProfiles = () => {
  const { currentUser } = useAuth();
  const { data: favouriteProfiles, isLoading } = useFavouriteProfiles(
    currentUser!.uid
  );

  if (isLoading) {
    <Spinner />;
  }
};
