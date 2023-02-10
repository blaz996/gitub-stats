import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

import { User } from 'firebase/auth';
import { useFavouriteProfiles } from '../../hooks/useFavouriteProfiles';
import { useAddFavouriteProfile } from '../../api/addFavouriteProfile';
import { FaStar } from 'react-icons/fa';
import { ProfileData } from '../../types';

import './AddFavouriteProfile.scss';

type AddFavouriteProfileProps = {
  currUser: User;
  profile: ProfileData;
};

export const AddFavouriteProfile = ({
  currUser,
  profile,
}: AddFavouriteProfileProps) => {
  const { data: favouriteProfiles, isLoading } = useFavouriteProfiles(
    currUser.uid
  );
  const { mutateAsync, isIdle } = useAddFavouriteProfile();

  if (isLoading) {
    return null;
  }

  if (favouriteProfiles?.some((favProfile) => favProfile.id === profile.id)) {
    return (
      <button className='profile__favourite-btn profile__favourite-btn--checked'>
        <IoMdCheckmarkCircle />
      </button>
    );
  }

  return (
    <button
      disabled={!isIdle}
      className='profile__favourite-btn'
      onClick={() =>
        mutateAsync({
          currentUserId: currUser.uid,
          profile: {
            id: profile.id,
            login: profile.login,
            avatar_url: profile.avatar_url,
          },
        })
      }
    >
      <FaStar />
    </button>
  );
};
