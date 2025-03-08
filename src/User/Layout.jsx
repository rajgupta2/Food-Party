import React from 'react'
import { Outlet } from "react-router-dom";

import User_Navbar from './Component/User_Navbar';
import Footer from '../Home/Components/Footer';

export default function Layout() {
  return (
    <>
      <div className="container-fluid">
        <User_Navbar />
        <div className="container mb-5"  style={{}}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
