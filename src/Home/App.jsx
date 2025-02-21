import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './Index/Index';
import About_us from './About_us/About_us';
import Contact_us from './Contact_us/Contact_us';
import Login from './Login/Login';
import Register from './Register/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about-us" element={<About_us />} />
          <Route path="contact-us" element={<Contact_us />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App