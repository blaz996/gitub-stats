import React from 'react';

import { logInWithEmailAndPassword } from '@/lib/firebase/auth';
import { handleLogInErrors } from '@/lib/firebase/authErrors';
import { SetState } from '@/types';

import { LoginForm } from '../components/AuthForm';
import { ContentLayout } from '@/components/layout';

export const Login = () => {
  const onSuccess = async (
    email: string,
    password: string,
    setLoginError: SetState
  ) => {
    try {
      const response = await logInWithEmailAndPassword(email, password);
    } catch (err: any) {
      setLoginError(handleLogInErrors(err.code));
    }
  };
  return (
    <ContentLayout>
      <div className='signup'>
        <LoginForm onSuccess={onSuccess} />
      </div>
    </ContentLayout>
  );
};
