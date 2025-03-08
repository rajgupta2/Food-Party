import React from 'react'
import { Outlet } from "react-router-dom";

import Vendor_Navbar from './Component/Vendor_Navbar';
import Footer from '../Home/Components/Footer';

export default function Layout() {
  return (
    <>
      <div className="container-fluid">
        <Vendor_Navbar />
        <div className="container" style={{minHeight:'89vh'}} >
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
