import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './Index';
import About_us from './About_us';
import Login from './Login';
import Register from './Register';
import Restaurants from './Components/Restaurants';

const Home_Route_Handler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about-us" element={<About_us />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="restaurants/:howmuchtoPrint" element={<Restaurants />} />
        </Route>
      </Routes>
    </>
  )
}

export default Home_Route_Handler;