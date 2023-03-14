import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SApp } from './app-style';
import ErrorPage from './components/ErrPage/ErrorPage';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Fotter from './components/Fotter/fotter';
import { About } from './components/About/about';
import Product from './components/Product/product';

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
        <About />
        <Fotter />
      </SApp>
    ),
  },
  {
    path: '/products',
    element: (
      <SApp>
        <Header />
        <Product />
        <Fotter />
      </SApp>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
