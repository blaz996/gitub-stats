import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useAppSelector } from '@/store/hooks';

import { User } from 'firebase/auth';

export const ProtectedRoutes = ({
  currentUser,
}: {
  currentUser: User | null;
}) => {
  return currentUser ? <Outlet /> : <Navigate to='/login' />;
};
