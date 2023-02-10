import { useMutation } from 'react-query';
import { queryClient } from '@/lib/react-query';

import { useAppDispatch } from '@/store/hooks';
import { addNotification } from '@/store/notification/notificationSlice';
import { addFavouriteProfileData } from '@/lib/firebase/favouriteProfiles';
import { AddFavouriteProfileDataParams } from '@/lib/firebase/favouriteProfiles';
import { ProfileData } from '../types';

export const useAddFavouriteProfile = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    onMutate: async ({
      currentUserId,
      profile,
    }: AddFavouriteProfileDataParams) => {
      await queryClient.cancelQueries('favouriteProfiles');
      const previousFavourites = queryClient.getQueryData<ProfileData[]>([
        'favouriteProfiles',
        currentUserId,
      ]);
      if (previousFavourites) {
        queryClient.setQueryData('favouriteProfiles', [
          ...previousFavourites,
          profile,
        ]);
      } else {
        queryClient.setQueryData('favourite_profiles', [{ profile }]);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('favouriteProfiles');
      dispatch(
        addNotification({
          status: 'success',
          message: 'Profile added to favourites',
          shown: true,
        })
      );
    },
    onError: () => {
      dispatch(
        addNotification({
          status: 'fail',
          message: 'Something went wrong',
          shown: true,
        })
      );
    },
    mutationFn: addFavouriteProfileData,
  });
};
