import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Addresses_Management from './Addresses_Management';
import Cart from './Cart';
import My_Orders from './My_Orders';
import Favorites from './Favorites';
import Check_Offers from './Check_Offers';
import Logout from './Logout';
import Layout from './Layout';
import Make_Orders from './Make_Orders';
import Restaurants from './Restaurants';
import NotFound from './NotFound';
import RestaurantPage from './RestaurantPage';
const User_Route_Handler = () => {
  return (
    <Routes>
      <Route path="/user" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path="my-profile" element={<Profile />} />
        <Route path="address-management" element={<Addresses_Management />} />
        <Route path="my-cart" element={<Cart />} />
        <Route path="my-orders" element={<My_Orders />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="logout" element={<Logout />} />
        <Route path="my-favorites-items" element={<Favorites/>}></Route>
        <Route path="check-offers" element={<Check_Offers />} />
        <Route path="make-orders" element={<Make_Orders />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="restaurants/:resid" element={<RestaurantPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default User_Route_Handler