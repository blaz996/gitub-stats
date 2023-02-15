import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  NextOrObserver,
  updateProfile,
} from 'firebase/auth';
import { app as firebaseApp } from './utils';

export const auth = getAuth(firebaseApp);

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const updateCreatedUserName = (username: string) => {
  updateProfile(auth.currentUser as User, {
    displayName: username,
  });
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOutUser = () => signOut(auth);

export const handleAuthStateChange = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
