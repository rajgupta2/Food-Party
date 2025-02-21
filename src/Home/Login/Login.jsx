import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="container login-form">
            <div className="row">
                <div className="col-sm-6 login-text">
                    <h1 className='text-primary'>Food Party</h1>
                    <h1 className='text-success'>Welcone back.</h1>
                </div>
                <div className="col-sm-6">
                <form action="/Home/Login" method="post">
                        <select className="form-control" id="userType" name="UserType">
                            <option value="">User Type</option>
                            <option value="Restaurant">Restaurant Owner</option>
                            <option value="User">User</option>
                            <option value="Delivery Agent">Delivery Agent</option>
                        </select>
                        <br/>

                        <input className="form-control" id="Email" type="email" name="email" placeholder="example@gmail.com" /> <br/>
                        <input className="form-control" type="password" id="password" name="password" placeholder="Enter Password..." /><br />
                        <input className="btn btn-block btn-success" type="submit" id="login" value="Login" /><br />
                        <h6 className='text-end'>
                            <a href="#" className='text-decoration-none'>
                                Forgot Password?
                            </a>
                        </h6>
                        <h6 className="text-dark text-end">
                            Have no Account? &nbsp;
                            <a className="text-decoration-none text-end"
                            href="/register">Sign Up</a>
                        </h6>
                    </form>
                </div>
            </div>
        </div>
    )
}
