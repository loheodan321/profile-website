import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SApp } from './app-style';
import ErrorPage from './components/ErrPage/ErrorPage';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Fotter from './components/Fotter/fotter';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SApp>
        <Header />
        <Home />
        <Fotter />
      </SApp>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: (
      <SApp>
        <Header />
        <Home />
      </SApp>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
