import React, { useState } from 'react';
import z from 'zod';
import { getAuth, User } from 'firebase/auth';

import { createAuthUserWithEmailAndPassword } from '@/lib/firebase/auth';
import { updateCreatedUserName } from '@/lib/firebase/auth';
import { handleSignUpErrors } from '@/lib/firebase/authErrors';
import { Form } from '@/components/Form';
import { InputField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { createFavouritesDocumentFromAuth } from '@/lib/firebase/favouriteProfies';
import './RegisterForm.scss';
import userEvent from '@testing-library/user-event';

type RegisterFormValues = {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const schema = z.object({
  userName: z.string().min(1, 'Please enter your username'),
  email: z.string().min(1, 'Please enter your email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /(?=.*[A-Z])/,
      'The password must contain at least one uppercase letter'
    ),
  repeatPassword: z.string().min(1, 'Please confirm your password'),
});

export const RegisterForm = () => {
  const auth = getAuth();
  console.log(auth.currentUser?.displayName);
  const [signupFormError, setSignupFormError] = useState('');

  const handleSignIn = async (values: RegisterFormValues) => {
    setSignupFormError('');
    if (values['password'] !== values['repeatPassword']) {
      setSignupFormError('Passwords dont match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        values['email'],
        values['password']
      );
      updateCreatedUserName(values['userName']);
      createFavouritesDocumentFromAuth(user);
    } catch (err: any) {
      setSignupFormError(handleSignUpErrors(err.code));
    }
  };
  return (
    <div className='register-form'>
      <Form<RegisterFormValues, typeof schema>
        onSubmit={handleSignIn}
        options={{ mode: 'onBlur' }}
        formTitle='sign up'
        schema={schema}
        formError={signupFormError}
      >
        {({ register, formState }) => {
          return (
            <>
              <InputField
                placeholder='Email'
                registration={register('email')}
                error={formState.errors['email']}
                label='email'
              />
              <InputField
                placeholder='User name'
                registration={register('userName')}
                error={formState.errors['userName']}
                label='user Name'
              />
              <InputField
                registration={register('password')}
                error={formState.errors['password']}
                label='password'
                placeholder='Password'
              />
              <InputField
                registration={register('repeatPassword')}
                error={formState.errors['repeatPassword']}
                label='confrim password'
                placeholder='Confirm Password'
              />
              <Button size='large'>Sign up</Button>
            </>
          );
        }}
      </Form>
    </div>
  );
};
