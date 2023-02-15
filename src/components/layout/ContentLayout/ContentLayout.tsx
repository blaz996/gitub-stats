import React from 'react';

import './ContentLayout.scss';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  header?: string;
};

export const ContentLayout = ({
  children,
  header,
  bgColor,
  className = '',
}: ContainerProps) => {
  return (
    <div className={`layout ${className} layout--${bgColor}`}>
      {header && (
        <div className='layout__header'>
          <h1 className='layout__header-title'>{header}</h1>
        </div>
      )}
      {children}
    </div>
  );
};
