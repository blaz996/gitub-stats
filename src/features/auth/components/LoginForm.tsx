import React, { useState } from 'react';
import z from 'zod';
import { Link } from 'react-router-dom';

import { handleLogInErrors } from '@/lib/firebase/authErrors';
import { Form } from '@/components/Form';
import { InputField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { logInWithEmailAndPassword } from '@/lib/firebase/auth';

import './LoginForm.scss';

type LoginFormValues = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, 'Please enter your email'),
  password: z.string().min(1, 'Please enter your password'),
});

export const LoginForm = () => {
  const [loginError, setLoginError] = useState('');
  const handleSubmit = async (values: LoginFormValues) => {
    setLoginError('');
    try {
      const response = await logInWithEmailAndPassword(
        values['email'],
        values['password']
      );
    } catch (err: any) {
      console.log(err.code);
      setLoginError(handleLogInErrors(err.code));
    }
  };

  return (
    <div className='login-form'>
      <Form<LoginFormValues, typeof schema>
        onSubmit={handleSubmit}
        options={{ mode: 'onBlur' }}
        schema={schema}
        formTitle='log in'
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
              <Button size='large'>Log in</Button>
              <p className='login-form__link'>
                Dont have an account? <Link to='/register'>Sign up</Link>
              </p>
            </>
          );
        }}
      </Form>
    </div>
  );
};
