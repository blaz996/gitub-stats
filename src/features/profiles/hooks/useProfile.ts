import { useQuery } from 'react-query';

import { fetchProfile } from '../api/getProfile';
import { Profile } from '../types';

import { modifyPorfileData } from '../assets/modifyData';

export const useProfile = (profileName: string = '', config?: {}) => {
  return useQuery<Profile>({
    ...config,
    queryKey: ['profile', profileName],
    queryFn: async () => {
      const data = await fetchProfile(profileName);
      return modifyPorfileData(data);
    },
  });
};
