import React from 'react';
import { useQuery } from 'react-query';
import { ProfilePreviewResponse } from '../types';

import { getFavouriteProfiles } from '@/lib/firebase/favouriteProfies';

export const useFavouriteProfiles = (profileId: string, config?: {}) => {
  return useQuery({
    ...config,
    queryKey: ['favouriteProfiles', profileId],
    queryFn: () => getFavouriteProfiles(profileId),
  });
};
