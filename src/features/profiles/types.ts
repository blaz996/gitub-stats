export type ProfilePreviewData = {
  avatar_url: string;
  login: string;
  id: number;
  html_url?: string;
  name?: string;
  email?: string;
};

export type ProfileData = {
  followers: number;
  following: number;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  company: string;
} & ProfilePreviewData;

export type RepoData = {
  forks: number;
  language: string;
  html_url: string;
  id: number;
  name: string;
  stargazers_count: number;
  commits_url: string;
  created_at: string;
  owner: ProfileData;
};
