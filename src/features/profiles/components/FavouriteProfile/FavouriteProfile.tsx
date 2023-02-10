import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRemoveFavouriteProfile } from '../../api/removeFavouriteProfile';
import { useDisclosure } from '@/hooks/useDisclosure';

import { ProfilePreviewData } from '../../types';
import { ProfilePreview } from '../ProfilePreview';
import { Modal } from '@/components/Elements';
import { DialogBox } from '@/components/Elements';

import './FavouriteProfile.scss';

export type FavouriteProfileProps = {
  profile: ProfilePreviewData;
};

export const FavouriteProfile = ({
  profile,
}: {
  profile: ProfilePreviewData;
}) => {
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useDisclosure();
  const { mutateAsync } = useRemoveFavouriteProfile();
  const { currentUser } = useAuth();

  const handleProfileRemove = async () => {
    mutateAsync({ authId: currentUser!.uid, profile: profile });
    closeModal();
  };
  return (
    <div className='favourite-profile'>
      <Modal
        handleClose={closeModal}
        show={isModalOpen}
        modalHeading='Delete from favourites'
      >
        <DialogBox
          acceptBtnText='remove'
          message='Are you sure you want to remove this profile from your favourites?'
          onAccept={handleProfileRemove}
          onCancel={closeModal}
        />
      </Modal>
      <button onClick={openModal} className='favourite-profile__remove-btn'>
        <TrashIcon />
      </button>
      <ProfilePreview profile={profile} />
    </div>
  );
};
