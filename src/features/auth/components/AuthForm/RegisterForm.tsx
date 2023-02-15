import React, { useState, useRef } from 'react';
import z from 'zod';

import { Form } from '@/components/Form';
import { InputField } from '@/components/Form';
import { Button } from '@/components/Elements';

import './AuthForm.scss';

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

export const RegisterForm = ({
  onSuccess,
}: {
  onSuccess: (...args: any) => void;
}) => {
  const [signupFormError, setSignupFormError] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSignIn = async (values: RegisterFormValues) => {
    setIsSubmiting(true);
    setSignupFormError('');
    if (values['password'] !== values['repeatPassword']) {
      setSignupFormError('Passwords do not match');
      setIsSubmiting(false);
      return;
    }
    await onSuccess(
      values['email'],
      values['password'],
      values['userName'],
      setSignupFormError
    );
    setIsSubmiting(false);
  };
  return (
    <div className='auth-form register-form'>
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
                type='email'
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
                type='password'
                registration={register('password')}
                error={formState.errors['password']}
                label='password'
                placeholder='Password'
              />
              <InputField
                type='password'
                registration={register('repeatPassword')}
                error={formState.errors['repeatPassword']}
                label='confrim password'
                placeholder='Confirm Password'
              />
              <Button disabled={isSubmiting} size='large'>
                Sign up
              </Button>
            </>
          );
        }}
      </Form>
    </div>
  );
};
