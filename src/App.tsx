import React, { useEffect } from 'react';

import '@/global/styles/style.scss';
import { AppProvider } from './providers/app';
import { AppRoutes } from '@/routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
