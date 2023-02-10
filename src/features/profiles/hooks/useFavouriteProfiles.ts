import React from 'react';
import { useQuery } from 'react-query';

import { getFavouriteProfiles } from '@/lib/firebase/favouriteProfiles';
import { ProfilePreviewData } from '../types';

export const useFavouriteProfiles = (userId: string, config?: {}) => {
  return useQuery<ProfilePreviewData[]>({
    ...config,
    queryKey: ['favouriteProfiles', userId],
    queryFn: () => getFavouriteProfiles(userId),
  });
};
