import { Button } from '@/components/ui/Button';
import { store } from './store';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">
        Houston, we&apos;ve got a problem!
      </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <React.Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            loading...
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>{children}</HelmetProvider>
        </ErrorBoundary>
      </React.Suspense>
    </Provider>
  );
};
