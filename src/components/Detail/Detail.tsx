import React from 'react';

import './Detail.scss';

type InfoProps = {
  icon: React.ReactElement;
  detail: string;
};

export const Detail = ({ icon, detail }: InfoProps) => {
  return (
    <div className='detail'>
      {icon}
      <p className='detail__text'>{detail}</p>
    </div>
  );
};
