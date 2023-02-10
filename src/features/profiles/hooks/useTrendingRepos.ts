import React from 'react';
import { useQuery } from 'react-query';

import { getTrendingRepos } from '../api/getTrendingRepos';
import { RepoData } from '../types';

export const useTrendingRepos = (language: string, config?: {}) => {
  return useQuery<RepoData[]>({
    ...config,
    queryKey: ['trendingRepos', language],
    queryFn: () => getTrendingRepos(language),
  });
};
