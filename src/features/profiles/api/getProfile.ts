import { axios } from '@/lib/axios';
import { profile } from 'console';
import {
  ProfileResponse,
  RepoResponse,
  ProfilePreviewResponse,
  Profile,
} from '../types';

const fetchProfileData = async (
  profileName: string
): Promise<ProfileResponse> => {
  const profile = await axios.get<unknown, ProfileResponse>(
    `users/${profileName}`
  );
  return profile;
};

const fetchUserFollowers = async (
  profileName: string
): Promise<ProfilePreviewResponse[]> => {
  return axios.get<unknown, ProfilePreviewResponse[]>(
    `users/${profileName}/followers`
  );
};

const fetchProfileFollowing = async (
  profileName: string
): Promise<ProfilePreviewResponse[]> => {
  return axios.get<unknown, ProfilePreviewResponse[]>(
    `users/${profileName}/following`
  );
};

const fetchProfileRepos = async (
  profileName: string
): Promise<RepoResponse[]> => {
  return axios.get<unknown, RepoResponse[]>(`users/${profileName}/repos`);
};

export const fetchProfile = async (profileName: string): Promise<Profile> => {
  const [profile, profileFollowers, profileFollowing, profileRepos] =
    await Promise.all([
      fetchProfileData(profileName),
      fetchUserFollowers(profileName),
      fetchProfileFollowing(profileName),
      fetchProfileRepos(profileName),
    ]);
  console.log(profile);
  console.log(profileFollowers);
  console.log(profileFollowers);
  console.log(profileRepos);

  return {
    ...profile,
    followers_num: profile.followers,
    following_num: profile.following,
    followers: profileFollowers,
    following: profileFollowing,
    repos: profileRepos,
    totalStars: 0,
  };
};
