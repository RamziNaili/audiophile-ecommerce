import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../../components/UI/Layout';
import { Home } from '../../pages/Home';
import { Earphones } from '../../pages/Earphones';
import { Headphones } from '../../pages/Headphones';
import { Speakers } from '../../pages/Speakers';
import { ProductDetails } from '../../pages/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'earphones',
        element: <Earphones />,
      },
      {
        path: 'headphones',
        element: <Headphones />,
      },
      {
        path: 'speakers',
        element: <Speakers />,
      },
      {
        path: ':productSlug',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
