import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import DogList from './App/Features/Dogs/DogList.tsx';
import DogDetail from './App/Features/Dogs/DogDetail.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import FormCreateDog from './App/Features/Dogs/FormCreateDog.tsx';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator>
      <RouterProvider router={router} />
    </Authenticator>
  </React.StrictMode>
);
