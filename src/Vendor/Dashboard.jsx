import React from 'react'
import { Link } from 'react-router-dom';
import './css/dashboard.css';

export default function Dashboard() {
    const vendorRoutes = [
        {
            path: '/active-orders',
            name: 'Active Orders',
        },
        {
            path: '/earnings',
            name: 'Sales & Earnings',
        },
        {
            path: '/create-promotion',
            name: 'Create Promotions',
        },
        {
            path: '/order-history',
            name: 'Order History',
        },
        {
            path: '/restaurant-management',
            name: 'Restaurant Management ',
        },
        {
            path: '/menu-management',
            name: 'Menu Management',
        },
        {
            path: '/logout',
            name: 'Logout',
        },
    ];

    return (
        <>
            <h2>Dashboard</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    vendorRoutes.map((elem, ind) => {
                        return (
                            <div className="col " key={ind}>
                                <div className="card shadow">
                                    <Link to={'/vendor'+elem.path} className='text-decoration-none dashboard_item'>{elem.name}</Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
