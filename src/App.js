import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/globals/layout';
import Home from './components/pages/home';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
