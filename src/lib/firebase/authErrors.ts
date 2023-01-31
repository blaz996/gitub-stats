export const handleSignUpErrors = (code: string) => {
  if (code === 'auth/email-already-in-use') {
    return 'This profile already exists';
  }
  return 'Something went wrong';
};

export const handleLogInErrors = (code: string) => {
  if (code === 'auth/user-not-found') {
    return 'Invalid email';
  }
  if (code === 'auth/wrong-password') {
    return 'Invalid password';
  }
  return 'Something went wrong';
};
