import { db } from './utils';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { ProfilePreviewResponse } from '@/features/profiles/types';

export const getFavouriteProfiles = async (id: string) => {
  const favouritesRef = doc(db, 'favourite_profiles', id);
  const docSnap = await getDoc(favouritesRef);

  return docSnap.data();
};

export const addFavouriteProfileData = async (
  id: string,
  profile: ProfilePreviewResponse
) => {
  const favouritesRef = doc(db, 'favourite_profiles', id);
  await updateDoc(favouritesRef, {
    favourites: arrayUnion(profile),
  });
};

export const deleteFavouriteProfileData = async (
  authId: string,
  profileId: number
) => {
  const favouritesRef = doc(db, 'favourite_profiles', authId);
  await updateDoc(favouritesRef, {
    favourites: arrayRemove(profileId),
  });
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
