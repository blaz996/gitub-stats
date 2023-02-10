import { RepoData, ProfileData } from '../types';
import { getRepoStatTotal } from './reposStats';

export const formatRepoData = (data: RepoData[]) =>
  data.map((repo) =>
    repo.language ? { ...repo } : { ...repo, language: 'Unknown' }
  );
