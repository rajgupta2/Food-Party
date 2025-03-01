import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css';
import { Link } from 'react-router-dom';
import { Mongo_API_URL } from '../api';
export default function Login() {
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({ Email: '', Password: '', Type: '' });
    const [alertData, setalertData] = useState('');
    const login = async () => {
        if (!loginData.Email || !loginData.Password || !loginData.Type) {
            setalertData("Please enter whole details");
            return;
        }
        const response = await fetch(`${Mongo_API_URL}/user`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', data: JSON.stringify(loginData) },
        }).then(response => response.json())
            .then(data => {
                //data={ statusCode: 500,isValidate:false, message: err.message (only when error occured) }
                if (data.isValidate) {
                    setalertData("You are redirected.");
                    if (loginData.Type === 'user')
                        navigate("/user");
                    else if (loginData.Type === 'restaurant owner')
                        navigate("/vendor");
                    localStorage.setItem("Email:",loginData.Email);
                    localStorage.setItem("Type",loginData.Type);
                    setloginData({ Email: '', Password: '', Type: '' });
                } else if (data.statusCode === 404) {
                    setalertData("No valid credentials.");
                }
            }).catch(error => {
                setalertData("An error occurred at server side.");
                console.log(error);
            });
    }
    return (
        <>
            {
                alertData && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <b>{alertData}</b>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )
            }
            <div className="container login-form">
                <div className="row">
                    <div className="col-sm-6 login-text">
                        <h1 className='text-primary'>Food Party</h1>
                        <h1 className='text-success'>Welcone back.</h1>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-select" id="userType" name="UserType" onChange={(e) => { setloginData({ ...loginData, Type: e.target.value }) }}>
                            <option value="">User Type</option>
                            <option value="restaurant owner">Restaurant Owner</option>
                            <option value="user">User</option>
                            <option value="delivery agent">Delivery Agent</option>
                        </select>
                        <br />
                        <input className="form-control" id="Email" type="email" name="email" placeholder="example@gmail.com" value={loginData.Email} onChange={(e) => { setloginData({ ...loginData, Email: e.target.value }) }} /> <br />
                        <input className="form-control" type="password" id="password" name="password" placeholder="Enter Password..." value={loginData.Password} onChange={(e) => { setloginData({ ...loginData, Password: e.target.value }) }} /><br />
                        <input type="button" className="btn btn-block btn-success" id="login" value="Login" onClick={login} /><br />
                        <h6 className='text-end'>
                            <a href="#" className='text-decoration-none'>
                                Forgot Password?
                            </a>
                        </h6>
                        <h6 className="text-dark text-end">
                            Have no Account? &nbsp;
                            <Link className="text-decoration-none text-end"
                                to="/Home/register">Sign Up</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </>

    )
}
