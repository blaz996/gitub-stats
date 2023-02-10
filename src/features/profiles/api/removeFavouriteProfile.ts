import { useMutation } from 'react-query';
import { queryClient } from '@/lib/react-query';

import { useAppDispatch } from '@/store/hooks';
import { addNotification } from '@/store/notification/notificationSlice';
import { deleteFavouriteProfileData } from '@/lib/firebase/favouriteProfiles';
import { ProfileData } from '../types';
import { RemoveFavouriteProfileParams } from '@/lib/firebase/favouriteProfiles';
import { useDispatch } from 'react-redux';

export const useRemoveFavouriteProfile = () => {
  const dispatch = useDispatch();
  return useMutation({
    onMutate: async ({ authId, profile }: RemoveFavouriteProfileParams) => {
      await queryClient.cancelQueries('favouriteProfiles');
      const previousFavourites = queryClient.getQueryData<ProfileData[]>([
        'favouriteProfiles',
        authId,
      ]);
      console.log(previousFavourites);
      queryClient.setQueryData(
        'favouriteProfiles',
        previousFavourites!.filter(
          (currProfile) => currProfile.id !== profile.id
        )
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries('favouriteProfiles');
      dispatch(
        addNotification({
          status: 'success',
          message: 'Profile removed from favourites',
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
    mutationFn: deleteFavouriteProfileData,
  });
};
