import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { useAuth } from '@/features/auth/hooks/useAuth';

import { AuthRoutes } from './AuthRoutes';
import { FavouriteProfiles, ProfileRoutes } from '@/features/profiles/routes';
import { NavBar } from '@/components/layout';
import { Login } from '@/features/auth/routes/Login';
import { Register } from '@/features/auth/routes/Register';

const { HomePage } = lazyImport(
  () => import('@/components/layout'),
  'HomePage'
);
const { SearchProfiles } = lazyImport(
  () => import('@/features/profiles/routes'),
  'SearchProfiles'
);
const { Trending } = lazyImport(
  () => import('@/features/trending/routes'),
  'Trending'
);

export const AppRoutes = () => {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path='search' element={<SearchProfiles />} />
        <Route path='trending' element={<Trending />} />
        <Route path='profiles/:profileName/*' element={<ProfileRoutes />} />
        <Route
          path=':profile/favourites'
          element={!currentUser ? <Navigate to='/' /> : <FavouriteProfiles />}
        />

        <Route element={<AuthRoutes currentUser={currentUser} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
};
