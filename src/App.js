import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Login from './pages/login/login.component';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
