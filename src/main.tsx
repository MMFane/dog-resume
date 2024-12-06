import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import DogList from './App/Features/Dogs/DogList.tsx';
import DogDetail from './App/Features/Dogs/DogDetail.tsx';
import ErrorPage from './App/components/ErrorPage.tsx';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import FormCreateDog from './App/Features/Dogs/FormCreateDog.tsx';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/store';

Amplify.configure(outputs);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/add-dog',
        element: <FormCreateDog />,
      },
      {
        path: '/dogs',
        element: <DogList />,
      },
      {
        path: '/dogs/:dogId',
        element: <DogDetail />,
      },
    ],
  },
]);

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Authenticator>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Authenticator>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
