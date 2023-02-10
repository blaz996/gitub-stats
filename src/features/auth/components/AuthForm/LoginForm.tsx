import React, { useState } from 'react';
import z from 'zod';
import { Link } from 'react-router-dom';

import { handleLogInErrors } from '@/lib/firebase/authErrors';
import { Form } from '@/components/Form';
import { InputField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { logInWithEmailAndPassword } from '@/lib/firebase/auth';

import './AuthForm.scss';

type LoginFormValues = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, 'Please enter your email'),
  password: z.string().min(1, 'Please enter your password'),
});

export const LoginForm = ({
  onSuccess,
}: {
  onSuccess: (...args: any) => void;
}) => {
  const [loginError, setLoginError] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const handleSubmit = async (values: LoginFormValues) => {
    setIsSubmiting(true);
    setLoginError('');
    await onSuccess(values['email'], values['password'], setLoginError);
    setIsSubmiting(false);
  };

  return (
    <div className='auth-form login-form'>
      <Form<LoginFormValues, typeof schema>
        onSubmit={handleSubmit}
        options={{ mode: 'onBlur' }}
        schema={schema}
        formTitle='login'
        formError={loginError}
      >
        {({ register, formState }) => {
          return (
            <>
              <InputField
                type='email'
                placeholder='Email'
                registration={register('email')}
                label={'email'}
                error={formState.errors['email']}
              />
              <InputField
                type='password'
                placeholder='Password'
                registration={register('password')}
                label={'password'}
                error={formState.errors['password']}
              />
              <Button disabled={isSubmiting} size='large'>
                Login
              </Button>
              <p className='login-form__link'>
                Dont have an account? <Link to='/signup'>Sign up</Link>
              </p>
            </>
          );
        }}
      </Form>
    </div>
  );
};
