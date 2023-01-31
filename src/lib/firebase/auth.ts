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

//const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(firebaseApp);
console.log(auth);
/*
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};
*/

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
