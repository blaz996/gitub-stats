import React from 'react';
import { BarChart, PieChart, LineChart } from '@/components/Chart/Charts';

import { ContentLayout } from '@/components/layout';
import {
  getReposPerLanguage,
  getRepoStatsPerLanguage,
  getProfileActivityPerYear,
} from '../../assets/reposStats';
import { formatDataForChart } from '../../assets/reposStats';
import { RepoData, ProfileData } from '../../types';

import './ProfileStats.scss';

type ProfileStats = {
  repos: RepoData[];
  profile: ProfileData;
};

export const ProfileStats = ({ repos, profile }: ProfileStats) => {
  const reposPerLanguage = getReposPerLanguage(repos);
  const starsPerLanuage = getRepoStatsPerLanguage(repos, 'stargazers_count');
  const forksPerLanguage = getRepoStatsPerLanguage(repos, 'forks');
  const profileActivityPerYear = getProfileActivityPerYear(repos);

  return (
    <ContentLayout bgColor='grey'>
      <div className='profile-charts'>
        <PieChart
          chartTitle='Repos per language'
          data={formatDataForChart(reposPerLanguage)}
        />
        <BarChart
          chartTitle='Stars per language'
          className='chart-wrapper--bar'
          data={formatDataForChart(starsPerLanuage)}
        />
        <BarChart
          chartTitle='Forks per language'
          className='chart-wrapper--bar'
          data={formatDataForChart(forksPerLanguage)}
        />
        <LineChart
          chartTitle='Repos per year'
          data={formatDataForChart(profileActivityPerYear, true)}
        />
      </div>
    </ContentLayout>
  );
};
