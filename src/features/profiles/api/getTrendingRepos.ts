import { RepoData } from '../types';
import { axios } from '@/lib/axios';
import { getPrevMonthDate } from '@/utils/date';

type ResponseData = {
  items: RepoData[];
};

export const getTrendingRepos = async (
  language: string
): Promise<RepoData[]> => {
  const { items } = await axios.get<never, ResponseData>(
    `search/repositories?q=language:${language}+created:>${getPrevMonthDate()}&sort=stars&order=desc&per_page=${10}`
  );
  return items;
};
