import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { useAuth } from '@/features/auth/hooks/useAuth';

import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';
import { ProfileRoutes } from '@/features/profiles/routes';
import { Spinner } from '@/components/Elements';
import { NavBar } from '@/components/layout';
import { Login } from '@/features/auth/routes/Login';
import { Register } from '@/features/auth/routes/Register';

/*
import { SearchProfiles } from '@/features/profile/routes/SearchProfiles';
import { HomePage } from '@/components/layout/HomePage';
import { Trending } from '@/features/trending/routes/Trending';
*/

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
        <Route element={<ProtectedRoutes currentUser={currentUser} />}>
          <Route index element={<HomePage />} />
          <Route path='search' element={<SearchProfiles />} />
          <Route path='trending' element={<Trending />} />
          <Route path='profiles/:profileName/*' element={<ProfileRoutes />} />
        </Route>
        <Route element={<PublicRoutes currentUser={currentUser} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
};
