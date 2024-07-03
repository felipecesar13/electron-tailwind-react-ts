import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Teste from './pages/Teste';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Teste} path="/teste" />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
