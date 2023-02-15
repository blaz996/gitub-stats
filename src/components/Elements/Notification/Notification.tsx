import React, { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { animated } from 'react-spring';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { hideNotification } from '@/store/notification/notificationSlice';

import { usePopInAnimation } from '@/hooks/useAnimation';

import './Notification.scss';

export const Notification = () => {
  const dispatch = useAppDispatch();

  const notification = useAppSelector(
    (state) => state.notification.notification
  );

  const notificationTransition = usePopInAnimation(notification);

  useEffect(() => {
    if (notification.shown) {
      const timeOutId = setTimeout(() => {
        dispatch(hideNotification());
      }, 4000);
      return () => clearTimeout(timeOutId);
    }
    return;
  }, [notification]);

  return (
    <>
      {notificationTransition((style, item) =>
        item.shown ? (
          <animated.div style={style} className='notification__container'>
            <div
              className={`notification ${
                item.status === 'success'
                  ? 'notification--success'
                  : 'notification--fail'
              }`}
            >
              <div className='notification__message-wrapper'>
                <p className='notification__message'>{item.message}</p>
                <XMarkIcon
                  onClick={() => dispatch(hideNotification())}
                  className='notification__close'
                />
              </div>
            </div>
          </animated.div>
        ) : (
          ''
        )
      )}
    </>
  );
};
