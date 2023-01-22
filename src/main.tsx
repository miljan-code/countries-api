import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { CountriesProvider } from './context/CountriesContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Browse, Countries, Country } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Browse />
            <Countries />
          </>
        ),
      },
      {
        path: 'country/:country',
        element: <Country />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
