import { useMutation } from 'react-query';
import { ProfilePreviewResponse } from '../types';
import { addFavouriteProfileData } from '@/lib/firebase/favouriteProfies';

export const useAddFavouriteProfile = (
  authId: string,
  profile: ProfilePreviewResponse
) => {
  return useMutation({
    mutationFn: () => addFavouriteProfileData(authId, profile),
  });
};
