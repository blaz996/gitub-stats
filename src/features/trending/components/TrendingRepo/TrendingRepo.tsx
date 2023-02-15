import React from 'react';

import { FaStar, FaTrophy } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';

import { ProfilePreviewData } from '@/features/profiles/types';
import { ProfileHead } from '@/features/profiles/components';
import { formatDate } from '@/utils/date';

import './TrendingRepo.scss';

export type TrendingRepoProps = {
  name: string;
  owner: ProfilePreviewData;
  stargazers_count: number;
  forks: number;
  index: number;
  created_at: string;
  html_url: string;
};

export const TrendingRepo = ({
  name,
  owner,
  stargazers_count,
  forks,
  index,
  created_at,
  html_url,
}: TrendingRepoProps) => {
  return (
    <div className='trending-repo'>
      <div className='trending-repo__ranking'>
        <span>{index + 1}</span>
      </div>
      {index === 0 && <FaTrophy className='trending-repo__icon-trophy' />}
      <ProfileHead profile={owner} link={true} />
      <div className='trending-repo__info'>
        <a href={html_url} className='trending-repo__name'>
          {name}
        </a>

        <p className='trending-repo__date'>
          Created at: {formatDate(created_at)}
        </p>
      </div>

      <div className='trending-repo__stats'>
        <div className='trending-repo__stat'>
          <FaStar className='trending-repo__icon trending-repo__icon-star' />
          <p className='trending-repo__stat-value '>{stargazers_count}</p>
        </div>
        <div className='trending-repo__stat'>
          <BiGitRepoForked className='trending-repo__icon trending-repo__icon-fork' />
          <p className='trending-repo__stat-value'>{forks}</p>
        </div>
      </div>
    </div>
  );
};
