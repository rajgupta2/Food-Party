import React from 'react';
import { Link } from 'react-router-dom';
export default function Vendor_Navbar() {
    const Vendor_routes = [
        {
            path: '/dashboard',
            name: "Dashboard",
        },
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

    ];
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">Food Party</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbarList text-primary navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                Vendor_routes.map((elem, ind) => {
                                    return (
                                        <li className="nav-item" key={ind}>
                                            <Link to={'/vendor'+elem.path} className='nav-link' aria-current="page">{elem.name}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
