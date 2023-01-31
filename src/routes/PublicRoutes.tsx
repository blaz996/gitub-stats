import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { User } from 'firebase/auth';

export const PublicRoutes = ({ currentUser }: { currentUser: User | null }) => {
  return !currentUser ? <Outlet /> : <Navigate to='/search' />;
};
