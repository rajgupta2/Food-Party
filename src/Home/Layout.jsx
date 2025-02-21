import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function Layout() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
