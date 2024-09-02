import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './error-page.jsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/materiales",
    element: <div>Lista de Productos</div>,
  },
  {
    path: "/usuario",
    element: <div>Seccion Usuario</div>,
  },
  {
    path: "/login",
    element: <div>Inicio de secion / registro</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </StrictMode>,
)
