import React, { useEffect } from 'react';

import '@/global/styles/style.scss';
import { AppProvider } from './providers/app';
import { AppRoutes } from '@/routes';

import { useAppSelector, useAppDispatch } from './store/hooks';
import { handleAuthStateChange } from './lib/firebase/auth';
import { setCurrentAuthUser } from './store/auth/authSlice';
import { setIsLoading } from './store/auth/authSlice';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
