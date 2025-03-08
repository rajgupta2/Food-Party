import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mongo_API_URL } from '../api';
export default function Register() {
  const [registerData, setregisterData] = useState({ Email: '', Password: '', Type: '' });
  const [alertData, setalertData] = useState('');
  const signup = async () => {
    if(!registerData.Email || !registerData.Password || !registerData.Type)
    {
      setalertData("Please enter whole details");
      return;
    }
    await fetch(`${Mongo_API_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(registerData),
    }).then(response => response.json())
      .then(data => {
        if (data.statusCode === 201) {
          setalertData("You are successfully registered.");
          setregisterData({Email: '', Password: '', Type:''});
        } else if (data.statusCode === 500) {
          setalertData("The Email is already registered or something gone wrong.");
          console.log(data.ErrorMessage);
          setregisterData({Email: '', Password: '', Type:''});
        }
      }).catch(error => {
        setalertData("An error occurred server side.");
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
            <h1 className='text-success'>Register Now.</h1>
          </div>
          <div className="col-sm-6">
            <select className="form-select" id="userType" name="UserType" onChange={(e) => { setregisterData({ ...registerData, Type: e.target.value }) }}>
              <option value="">User Type</option>
              <option value="restaurant owner">Restaurant Owner</option>
              <option value="user">User</option>
              <option value="delivery agent" disabled>Delivery Agent</option>
            </select>
            <br />
            <input className="form-control" id="Email" type="email" name="email" placeholder="example@gmail.com" value={registerData.Email} onChange={(e) => { setregisterData({ ...registerData, Email: e.target.value }) }} /> <br />
            <input className="form-control" type="password" id="password" name="password" placeholder="Enter Password..." value={registerData.Password} onChange={(e) => { setregisterData({ ...registerData, Password: e.target.value }) }} /><br />
            <input type="button" className="btn btn-block btn-success" id="signup" value="Sign up" onClick={signup} /><br />
            <h6 className="text-dark text-end">
              Already have an account? &nbsp;
              <Link className="text-decoration-none text-end"
                to="/Home/login">Login here.</Link>
            </h6>
          </div>
        </div>
      </div>

    </>
  )
}
