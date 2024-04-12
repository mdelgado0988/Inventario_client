import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './componentes/security/login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './layout';
import RequireAuth from './componentes/requireAuth';
import Home from './componentes/home';
import NoAutorizado from './componentes/noAutorizado';
import Usuarios from './componentes/Usuario';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>

          {/* publics */}
          <Route path='/login' element={<Login />} />
          <Route path='/noAutorizado' element={<NoAutorizado />} />
          {/* <Route path='register' element={<Register />}></Route> */}

          {/* privates */}
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/register' element={<Home />}></Route>
            <Route path='/usuario' element={<Usuarios />}></Route>
          </Route>

        </Route>
    </Routes>
  );
  
}

export default App;
