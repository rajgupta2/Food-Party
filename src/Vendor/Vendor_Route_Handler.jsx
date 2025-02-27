import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Menu_Management from './Menu_Management';
import Order_History from './Order_History';
import Restaurant_Management from './Restaurant_Management';
import Promotion from './Promotion';
import ActiveOrder from './ActiveOrder';
import Earnings from './Earnings';
const Vendor_Route_Handler = () => {
  return (
    <Routes>
      <Route path="/vendor" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='active-orders' element={<ActiveOrder />} />
        <Route path="menu-management" element={<Menu_Management/>} />
        <Route path="restaurant-management" element={<Restaurant_Management/>} />
        <Route path="create-promotion" element={<Promotion/>} />
        <Route path='order-history' element={<Order_History/>} />
        <Route path='earnings' element={<Earnings/> } />
      </Route>
    </Routes>
  )
}

export default Vendor_Route_Handler