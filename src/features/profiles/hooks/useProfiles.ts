import React, { useState, useMemo, useCallback } from 'react';

import { getProfiles } from '../api/getProfiles';
import { ProfilePreviewData } from '../types';
import { paginate } from '@/utils/pagination';

export const useProfiles = () => {
  const [profilesData, setProfilesData] = useState<ProfilePreviewData[][]>([]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const searchProfiles = useCallback(async (searchedProfile: string) => {
    setIsSuccess(false);
    setIsLoading(true);
    try {
      const fetchedProfiles = await getProfiles(searchedProfile);
      setProfilesData(paginate(fetchedProfiles));
      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    activePageIndex,
    profilesData,
    setActivePageIndex,
    searchProfiles,
    isLoading,
    isSuccess,
  };
};
