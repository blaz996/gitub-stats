import { axios } from '@/lib/axios';
import { profile } from 'console';
import { ProfileData, RepoData, ProfilePreviewData } from '../types';

export const fetchProfile = async (
  profileName: string
): Promise<ProfileData> => {
  console.log('Running 1');
  const profile = await axios.get<unknown, ProfileData>(`users/${profileName}`);
  return profile;
};

export const fetchProfileFollowers = async (
  profileName: string
): Promise<ProfilePreviewData[]> => {
  console.log('Running 2');
  return axios.get<unknown, ProfilePreviewData[]>(
    `users/${profileName}/followers`
  );
};

export const fetchProfileFollowing = async (
  profileName: string
): Promise<ProfilePreviewData[]> => {
  console.log('Running 3');
  return axios.get<unknown, ProfilePreviewData[]>(
    `users/${profileName}/following`
  );
};

export const fetchProfileRepos = async (
  profileName: string
): Promise<RepoData[]> => {
  console.log('Running 4');
  return axios.get<unknown, RepoData[]>(
    `users/${profileName}/repos?q=&per_page=${100}`
  );
};
