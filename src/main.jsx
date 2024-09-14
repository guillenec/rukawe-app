import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import Materiales from './pages/Materiales/Materiales.jsx';
import Login from './pages/Login/Login.jsx';
import ErrorPage from './error-page.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
