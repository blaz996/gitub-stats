import { RepoResponse } from '../types';
import { axios } from '@/lib/axios';
import { getPrevMonthDate } from '@/utils/date';

type ResponseData = {
  items: RepoResponse[];
};

export const getTrendingRepos = async (
  language: string
): Promise<RepoResponse[]> => {
  const { items } = await axios.get<never, ResponseData>(
    `search/repositories?q=language:${language}+created:>${getPrevMonthDate()}&sort=stars&order=desc`
  );
  return items;
};
