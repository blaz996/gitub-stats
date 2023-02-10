import React from 'react';

import { store } from '@/store/store';

import { Notification } from '@/components/Elements/Notification';

import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@/lib/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from '@/components/Elements';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<Spinner size='large' />}>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          <Notification />
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </React.Suspense>
    </Provider>
  );
};
