import { db } from './utils';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  DocumentData,
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { ProfilePreviewData } from '@/features/profiles/types';

export type AddFavouriteProfileDataParams = {
  currentUserId: string;
  profile: ProfilePreviewData;
};

export type RemoveFavouriteProfileParams = {
  authId: string;
  profile: ProfilePreviewData;
};

export const getFavouriteProfiles = async (id: string) => {
  const favouritesRef = doc(db, 'favourite_profiles', id);

  const docSnap = await getDoc(favouritesRef);
  const favouritesObj = docSnap.data();
  if (favouritesObj) return favouritesObj['favourites'];
  return null;
};

export const addFavouriteProfileData = async ({
  currentUserId,
  profile,
}: AddFavouriteProfileDataParams) => {
  const favouritesRef = doc(db, 'favourite_profiles', currentUserId);
  await updateDoc(favouritesRef, {
    favourites: arrayUnion(profile),
  });
};

export const deleteFavouriteProfileData = async ({
  authId,
  profile,
}: RemoveFavouriteProfileParams) => {
  const favouritesRef = doc(db, 'favourite_profiles', authId);
  await updateDoc(favouritesRef, {
    favourites: arrayRemove(profile),
  });

  return favouritesRef;
};

export const createFavouritesDocumentFromAuth = async (userAuth: User) => {
  const favouritesRef = doc(db, 'favourite_profiles', userAuth.uid);
  const favouritesSnapshot = await getDoc(favouritesRef);

  if (!favouritesSnapshot.exists()) {
    setDoc(favouritesRef, {
      favourites: [],
    });
  }

  return favouritesRef;
};
