import React from 'react';
import '../css/navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/Home/">Food Party</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbarList text-primary navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/Home/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Home/about-us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Home/register">Sign-up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Home/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
