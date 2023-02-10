import React from 'react';

type PopupProps = {
  isOpen: boolean;
  headerChildren: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const Popup = ({
  headerChildren,
  children,
  className = '',
  isOpen = false,
}: PopupProps) => {
  return (
    <div className={`popup ${className}`}>
      <div className='popup__header'>{headerChildren}</div>
      <div className='popup__body'>{children}</div>
    </div>
  );
};
