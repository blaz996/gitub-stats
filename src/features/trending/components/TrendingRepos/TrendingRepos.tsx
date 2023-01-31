import React, { useState } from 'react';
import { animated } from 'react-spring';
import { TrendingHeader } from '../TrendingHeader';
import { useFadeInAnimation } from '@/hooks/useAnimation';
import { useTrendingRepos } from '@/features/profiles/hooks/useTrendingRepos';
import { RepoResponse } from '@/features/profiles/types';
import { Spinner } from '@/components/Elements';
import { TrendingRepo } from '../TrendingRepo/TrendingRepo';

import './TrendingRepos.scss';

const SELECT_LANGUAGE_FILTERS = [
  'c',
  'c#',
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
  'swift',
];

export const TrendingRepos = () => {
  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const { data: trendingRepos, isLoading } = useTrendingRepos(activeLanguage);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('called');
    setActiveLanguage(e.target.value);
  };
  const animatedRepos = useFadeInAnimation<RepoResponse>(
    trendingRepos as RepoResponse[]
  );
  return (
    <div>
      <TrendingHeader
        selectEnabled={true}
        selectOptions={SELECT_LANGUAGE_FILTERS}
        title='trending repos'
        onChange={handleChange}
      />
      {isLoading ? (
        <Spinner size='medium' />
      ) : (
        <div>
          {animatedRepos((styles, value, {}, i) => (
            <animated.div style={styles}>
              <TrendingRepo key={value.id} index={i} {...value} />
            </animated.div>
          ))}
        </div>
      )}
    </div>
  );
};
