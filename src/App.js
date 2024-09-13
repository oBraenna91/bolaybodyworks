import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/globals/layout';
import Home from './components/pages/home';
import ReturnPage from './components/pages/returns';
import ContactPage from './components/pages/contact';
import TermsPage from './components/pages/terms&conditions';
import PrivacyPage from './components/pages/privacy';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="returns" element={<ReturnPage />}/>
          <Route path="contact" element={<ContactPage />}/>
          <Route path="terms&conditions" element={<TermsPage />}/>
          <Route path="privacy" element={<PrivacyPage />}/>
        </Route>
      </Routes>
  );
}

export default App;
