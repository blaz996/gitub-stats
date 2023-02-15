import React from 'react';

type PopupProps = {
  isOpen: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const Popup = ({
  header,
  children,
  className = '',
  isOpen = false,
}: PopupProps) => {
  return (
    <div className={`popup ${className}`}>
      <div className='popup__header'>{header}</div>
      <div className='popup__body'>{children}</div>
    </div>
  );
};
