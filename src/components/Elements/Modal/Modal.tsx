import React from 'react';

import { Overlay } from '@/components/layout/NavBar/Overlay';

import './Modal.scss';

type ModalProps = {
  show: boolean;
  children: React.ReactNode;
  handleClose: () => void;
  modalHeading?: string;
};

export const Modal = ({
  show,
  children,
  handleClose,
  modalHeading,
}: ModalProps) => {
  return (
    <Overlay shown={show}>
      <div className='modal'>
        <div className='modal__header'>
          <h2>{modalHeading}</h2>
        </div>
        <div className='modal__content'>{children}</div>
        <span onClick={handleClose} className='modal__close'>
          &#10005;
        </span>
      </div>
    </Overlay>
  );
};
