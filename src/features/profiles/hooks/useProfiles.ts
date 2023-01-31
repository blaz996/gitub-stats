import React, { useState, useMemo, useCallback } from 'react';

import { getProfiles } from '../api/getProfiles';
import { ProfilePreviewResponse } from '../types';
import { paginate } from '@/utils/pagination';

export const useProfiles = () => {
  const [profilesData, setData] = useState<ProfilePreviewResponse[][]>([]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const searchProfiles = useCallback(async (searchedProfile: string) => {
    setIsSuccess(false);
    setIsLoading(true);
    try {
      const fetchedProfiles = await getProfiles(searchedProfile);
      setData(paginate(fetchedProfiles));
      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(false);
      console.log(err);
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
