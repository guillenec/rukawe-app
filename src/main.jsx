import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx';
import "./index.css";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Materiales from './pages/Materiales/Materiales.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/materiales",
    element: <Materiales />,
  },
  {
    path: "/usuario",
    element: <div>Seccion Usuario</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </StrictMode>,
)
