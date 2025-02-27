import React from 'react'
import { Link } from 'react-router-dom';
import './css/dashboard.css';

export default function Dashboard() {
    const routes = [
        {
            path: '/my-profile',
            name: 'My Profile',
        },
        {
            path: '/my-cart',
            name: 'My Cart',
        },
        {
            path: '/my-orders',
            name: 'My Orders'
        },
        {
            path: '/my-favorites-items',
            name: 'Favorite Items',
        },
        {
            path: '/make-orders',
            name: 'Make Orders',
        },
        {
            path: '/check-offers',
            name: 'Check Offers & Discount',
        },
        {
            path: '/logout',
            name: 'Logout',
        }
    ];
    return (
        <>
            <h2>Dashboard</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    routes.map((elem, ind) => {
                        return (
                            <div className="col " key={ind}>
                                <div className="card shadow">
                                    <Link to={'/user'+elem.path} className='text-decoration-none dashboard_item'>{elem.name}</Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
