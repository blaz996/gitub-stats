import React from 'react';
import { BarChart, PieChart, LineChart } from '@/components/Chart/Charts';
import {
  getReposPerLanguage,
  getRepoStatsPerLanguage,
  getProfileActivityPerYear,
} from '../../assets/reposStats';
import { formatDataForChart } from '../../assets/reposStats';
import { ChartStat } from '../../assets/reposStats';
import { RepoResponse } from '../../types';

import './ProfileStats.scss';

export const ProfileStats = ({ repos }: { repos: RepoResponse[] }) => {
  const reposPerLanguage = getReposPerLanguage(repos);
  const starsPerLanuage = getRepoStatsPerLanguage(repos, 'stargazers_count');
  const forksPerLanguage = getRepoStatsPerLanguage(repos, 'forks');
  const profileActivityPerYear = getProfileActivityPerYear(repos);

  return (
    <div className='profile-charts'>
      <PieChart
        chartTitle='Repos per language'
        data={formatDataForChart(reposPerLanguage)}
      />
      <BarChart
        chartTitle='Stars per language'
        data={formatDataForChart(starsPerLanuage)}
      />
      <BarChart
        chartTitle='Forks per language'
        data={formatDataForChart(forksPerLanguage)}
      />
      <LineChart
        chartTitle='Activity per year'
        data={formatDataForChart(profileActivityPerYear, true)}
      />
    </div>
  );
};
