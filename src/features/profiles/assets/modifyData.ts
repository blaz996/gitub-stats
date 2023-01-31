import { RepoResponse, Profile } from '../types';
import { getRepoStatTotal } from './reposStats';

const modifyRepoData = (data: RepoResponse[]) =>
  data.map((repo) =>
    repo.language ? { ...repo } : { ...repo, language: 'Unknown' }
  );

export const modifyPorfileData = (data: Profile): Profile => {
  const totalStars = getRepoStatTotal(data.repos, 'stargazers_count');
  const modifiedRepos = modifyRepoData(data.repos);

  return {
    ...data,
    repos: modifiedRepos,
    totalStars,
  };
};
