import React, { useState } from 'react';
import { animated } from 'react-spring';

import { useFadeInAnimation } from '@/hooks/useAnimation';
import { useTrendingRepos } from '@/features/profiles/hooks/useTrendingRepos';

import { ContentLayout } from '@/components/layout';
import { Spinner } from '@/components/Elements';
import { TrendingHeader } from '../TrendingHeader';
import { TrendingRepo } from '../TrendingRepo/TrendingRepo';

import { RepoData } from '@/features/profiles/types';

import './TrendingRepos.scss';

const SELECT_LANGUAGE_FILTERS = [
  'c',
  'c++',
  'css',
  'java',
  'javascript',
  'python',
  'r',
  'ruby',
  'rust',
  'perl',
  'php',
  'sql',
];

export const TrendingRepos = () => {
  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const { data: trendingRepos, isLoading } = useTrendingRepos(activeLanguage);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('called');
    setActiveLanguage(e.target.value);
  };
  const animatedRepos = useFadeInAnimation<RepoData>(
    trendingRepos as RepoData[]
  );
  return (
    <ContentLayout>
      <TrendingHeader
        selectEnabled={true}
        selectOptions={SELECT_LANGUAGE_FILTERS}
        title='trending repos'
        onChange={handleChange}
        isLoading={isLoading}
      />
      {isLoading ? (
        <Spinner size='medium' />
      ) : (
        <div className='trending-repos'>
          {animatedRepos((styles, value, {}, i) => (
            <animated.div key={value.id} style={styles}>
              <TrendingRepo key={value.id} index={i} {...value} />
            </animated.div>
          ))}
        </div>
      )}
    </ContentLayout>
  );
};
