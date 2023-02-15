import { axios } from '@/lib/axios';

import { ProfileData, RepoData, ProfilePreviewData } from '../types';

export const fetchProfile = async (
  profileName: string
): Promise<ProfileData> => {
  return axios.get<unknown, ProfileData>(`users/${profileName}`);
};

export const fetchProfileFollowers = async (
  profileName: string
): Promise<ProfilePreviewData[]> => {
  return axios.get<unknown, ProfilePreviewData[]>(
    `users/${profileName}/followers`
  );
};

export const fetchProfileFollowing = async (
  profileName: string
): Promise<ProfilePreviewData[]> => {
  return axios.get<unknown, ProfilePreviewData[]>(
    `users/${profileName}/following`
  );
};

export const fetchProfileRepos = async (
  profileName: string
): Promise<RepoData[]> => {
  return axios.get<unknown, RepoData[]>(
    `users/${profileName}/repos?q=&per_page=${100}`
  );
};
