import React from 'react';
import { useQuery } from 'react-query';

import { getTrendingRepos } from '../api/getTrendingRepos';
import { RepoResponse } from '../types';

export const useTrendingRepos = (language: string, config?: {}) => {
  return useQuery<RepoResponse[]>({
    ...config,
    queryKey: ['trendingRepos', language],
    queryFn: () => getTrendingRepos(language),
  });
};
