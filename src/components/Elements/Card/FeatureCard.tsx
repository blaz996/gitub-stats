import React from 'react';

import './FeatureCard.scss';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  animation?: string;
};

export const FeatureCard = ({ icon, title, animation }: FeatureCardProps) => {
  return (
    <div className={`feature-card ${animation ? animation : ''}`}>
      <div className='feature-card__head'>{icon}</div>
      <div className='feature-card__body'>
        <h4 className='feature-card__title'>{title}</h4>
        <p className='feature-card__text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint placeat
          ipsum impedit vel quos eveniet.
        </p>
      </div>
    </div>
  );
};
