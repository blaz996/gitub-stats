import React from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { Overlay } from '@/components/layout/NavBar/Overlay';

import './Modal.scss';

type ModalProps = {
  show: boolean;
  children: React.ReactNode;
  handleClose: () => void;
};

export const Modal = ({ show, children, handleClose }: ModalProps) => {
  return (
    <Overlay shown={show}>
      <div className='modal'>
        <div className='modal__content'>{children}</div>
        <span onClick={handleClose} className='modal__close'>
          <AiFillCloseCircle />
        </span>
      </div>
    </Overlay>
  );
};
