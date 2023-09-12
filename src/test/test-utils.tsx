import type { ReactElement } from 'react';
import React from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { AppProvider } from '@/app/providers';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AppProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
