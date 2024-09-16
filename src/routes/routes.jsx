import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../error-page';
import Materiales from '../pages/Materiales/Materiales';
import Login from '../pages/Login/Login';
import Carga from '../pages/carga/Carga';


const RoutesApp = () => {
  const logged = false // luego lo traemos desde un estado

  return (
    <Routes>
      <Route
        path="/"
        loader={() => {
          something.that.throws.an.error();
        }}
        element={<Home />}
        errorElement={<ErrorPage />}
      />
      <Route path="/materiales" element={<Materiales />} />
      <Route path="/usuario" element={<div>Seccion Usuario</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/carga" element={<Carga />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default RoutesApp