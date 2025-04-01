import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Navbar from './navbar.tsx';
import Footer from './Footer.tsx';
import { Free } from './free.tsx';
import { Premium } from './premium.tsx';
import { TOS } from './TOS.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tos",
    element: <TOS />,
  },
  {
    path: "/free",
    element: <Free />,
  },
  {
    path: "/premium",
    element: <Premium />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
