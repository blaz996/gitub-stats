import React, { useRef } from 'react';
import { SetState } from '@/types';

import { handleSignUpErrors } from '@/lib/firebase/authErrors';
import {
  updateCreatedUserName,
  createAuthUserWithEmailAndPassword,
} from '@/lib/firebase/auth';
import { createFavouritesDocumentFromAuth } from '@/lib/firebase/favouriteProfiles';

import { RegisterForm } from '../components/AuthForm';

export const Register = () => {
  const signUp = async (
    email: string,
    password: string,
    userName: string,
    setSignupFormError: SetState
  ) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      updateCreatedUserName(userName);
      createFavouritesDocumentFromAuth(user);
    } catch (err: any) {
      setSignupFormError(handleSignUpErrors(err.code));
    }
  };

  return (
    <div className='register'>
      <RegisterForm onSuccess={signUp} />
    </div>
  );
};
