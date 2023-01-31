export type ProfilePreviewResponse = {
  avatar_url: string;
  login: string;
  id: number;
  html_url: string;
};

export type ProfileResponse = {
  email?: string;
  followers: number;
  following: number;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  company: string;
} & ProfilePreviewResponse;

export type RepoResponse = {
  forks: number;
  language: string;
  description?: string;
  html_url: string;
  id: number;
  name: string;
  stargazers_count: number;
  watchers: number;
  topics?: string[];
  commits_url: string;
  created_at: string;
  owner: ProfileResponse;
};

export type Profile = Omit<ProfileResponse, 'followers' | 'following'> & {
  repos: RepoResponse[];
  followers_num: number;
  following_num: number;
  followers: ProfilePreviewResponse[];
  following: ProfilePreviewResponse[];
  totalStars: number;
};
