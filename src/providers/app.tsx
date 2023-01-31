import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@/lib/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from '@/components/Elements';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Suspense fallback={<Spinner size='large' />}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </React.Suspense>
  );
};
