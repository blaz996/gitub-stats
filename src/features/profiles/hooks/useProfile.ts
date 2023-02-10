import { useQueries, useQuery } from 'react-query';

import { fetchProfile } from '../api/getProfile';
import { fetchProfileRepos } from '../api/getProfile';
import { formatRepoData } from '../assets/formatData';
import { fetchProfileFollowers } from '../api/getProfile';
import { fetchProfileFollowing } from '../api/getProfile';
import { ProfileData, ProfilePreviewData } from '../types';
import { RepoData } from '../types';

export const useProfile = (profileName: string, config?: {}) => {
  return useQueries([
    {
      ...config,
      queryKey: ['profile', profileName],
      queryFn: () => fetchProfile(profileName),
    },
    {
      ...config,
      queryKey: ['profileRepos', profileName],
      queryFn: async () => {
        const repos = await fetchProfileRepos(profileName);
        return formatRepoData(repos);
      },
    },
    {
      ...config,
      queryKey: ['useProfileFollowers', profileName],
      queryFn: () => fetchProfileFollowers(profileName),
    },
    {
      ...config,
      queryKey: ['profileFollowing', profileName],
      queryFn: () => fetchProfileFollowing(profileName),
    },
  ]);
};
