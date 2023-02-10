import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FaSearch, FaUserCheck } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { BiTrendingUp } from 'react-icons/bi';

import { Button } from '@/components/Elements';
import { FeatureCard } from '@/components/Elements/Card/FeatureCard';

import './HomePage.scss';

const HOME_PAGE_FEATURES = [
  [
    { icon: <FaSearch />, title: 'Search for profiles', animation: 'c1' },
    { icon: <ImStatsDots />, title: 'View profile stats', animation: 'c2' },
  ],
  [
    { icon: <BiTrendingUp />, title: 'View trending repos', animation: 'c3' },
    {
      icon: <FaUserCheck />,
      title: 'Add favourite profiles',
      animation: 'c4',
    },
  ],
];

export const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage__hero'>
        <div className='homepage__hero-signup'>
          <Link to='/signup'>
            <Button>Sign Up</Button>
          </Link>
        </div>

        <div className='homepage__hero-icon'>
          <AiFillGithub />
        </div>
        <div className='homepage__hero-text'>
          <h1 className='homepage__hero-title'>Welcome to github stats</h1>
          <h4 className='homepage__hero-subtext'>
            The home of GitHub profiles
          </h4>
        </div>
      </div>
      <div className='homepage__features'>
        {HOME_PAGE_FEATURES.map((feature, i) => (
          <div key={i} className='homepage__feature-col'>
            <FeatureCard
              icon={feature[0].icon}
              title={feature[0].title}
              animation={feature[0].animation}
            />
            <FeatureCard
              icon={feature[1].icon}
              title={feature[1].title}
              animation={feature[1].animation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
