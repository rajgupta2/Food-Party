import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import Home_Route_Handler from './Home/Home_Route_Handler.jsx'
import User_Route_Handler from './User/User_Route_Handler.jsx';
import Vendor_Route_Handler from './Vendor/Vendor_Route_Handler.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Home_Route_Handler/>
       <User_Route_Handler />
       <Vendor_Route_Handler/>
    </BrowserRouter>
  </React.StrictMode>,
)
