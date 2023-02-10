import React from 'react';

import './AtributeCard.scss';

export const ATRIBUTE_CARD_COLORS = {
  blue: 'atribute-card--blue',
  green: 'atribute-card--green',
  purple: 'atribute-card--purple',
  yellow: 'atribute-card--yellow',
};

type AtributeCardProps = {
  color: keyof typeof ATRIBUTE_CARD_COLORS;
  className?: string;
  icon: React.ReactElement;
  atributeLabel: string;
  atributeValue: number;
};

export const AtributeCard = ({
  color,
  className = '',
  icon,
  atributeLabel,
  atributeValue,
}: AtributeCardProps) => {
  return (
    <div className={`atribute-card atribute-card--${color} ${className}`}>
      <div className='atribute__icon-wrapper'>{icon}</div>
      <div className='atribute__value-wrapper'>
        <span className='atribute__label'>{atributeLabel}</span>
        <p className='atribute__value'>{atributeValue}</p>
      </div>
    </div>
  );
};
