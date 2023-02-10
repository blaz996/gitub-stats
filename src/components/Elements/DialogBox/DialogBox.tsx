import React from 'react';
import { Button } from '../Button';

import './DialogBox.scss';

type DialogBoxProps = {
  message: string;
  acceptBtnText: string;
  onAccept: (...args: any) => void;
  onCancel: () => void;
};

export const DialogBox = ({
  message,
  acceptBtnText,
  onAccept,
  onCancel,
}: DialogBoxProps) => {
  return (
    <div className='dialog-box'>
      <p className='dialog-box__text'>{message}</p>
      <div className='dialog-box__buttons'>
        <Button size='small' onClick={onAccept}>
          {acceptBtnText}
        </Button>
        <Button onClick={onCancel} size='small' variant='inverse'>
          Cancel
        </Button>
      </div>
    </div>
  );
};
