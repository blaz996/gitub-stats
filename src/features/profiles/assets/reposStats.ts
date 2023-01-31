import { stat } from 'fs';
import { Profile, RepoResponse } from '../types';
export const getRepoStatTotal = (
  repos: RepoResponse[],
  repoStat: 'stargazers_count' | 'watchers' | 'forks'
) => {
  return repos.reduce((acc, repo) => (acc += repo[repoStat]), 0);
};

export type ChartStat = {
  label: string;
  value: number;
};

export const getReposPerLanguage = (repos: RepoResponse[]) => {
  return repos.reduce((acc, currRepo) => {
    const currLanguage = currRepo['language'];
    if (currLanguage === 'Unknown') return acc;
    if (!acc.hasOwnProperty(currLanguage)) acc[currLanguage] = 1;
    else acc[currLanguage] += 1;
    return acc;
  }, {} as { [key: string]: number });
};

export const getRepoStatsPerLanguage = (
  repos: RepoResponse[],
  repoStat: 'stargazers_count' | 'watchers' | 'forks'
) => {
  return repos.reduce((acc, currRepo) => {
    const currLanguage = currRepo.language;
    const currStat = currRepo[repoStat] as number;
    if (currLanguage === 'Unknown') return acc;
    if (!acc.hasOwnProperty(currLanguage)) acc[currLanguage] = currStat;
    else acc[currLanguage] += currStat;
    return acc;
  }, {} as { [key: string]: number });
};

export const formatDataForChart = (
  stats: {
    [key: string]: number;
  },
  sortByLabel: boolean = false
): ChartStat[] => {
  const result = [];
  for (let key in stats) {
    const statObj: ChartStat = {} as ChartStat;
    statObj.label = key;
    statObj.value = stats[key];
    result.push(statObj);
  }
  if (sortByLabel) {
    return result.sort((a, b) => Number(a.label) - Number(b.label));
  }
  return result.sort((a, b) => b.value - a.value);
};
export const getProfileActivityPerYear = (repos: RepoResponse[]) => {
  return repos.reduce((acc, currRepo) => {
    const { created_at } = currRepo;
    const creationYear = new Date(created_at).getFullYear();

    if (!acc.hasOwnProperty(creationYear)) acc[creationYear] = 1;
    else acc[creationYear] += 1;

    return acc;
  }, {} as { [key: string]: number });
};
