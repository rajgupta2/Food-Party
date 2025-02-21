import React from 'react'
export default function Register() {
  return (
    <>
      <div className="container login-form">
        <div className="row">
          <div className="col-sm-6 login-text">
            <h1 className='text-primary'>Food Party</h1>
            <h1 className='text-success'>Register Now.</h1>
          </div>
          <div className="col-sm-6">
            <form action="/Home/register" method="post">
              <select className="form-control" id="userType" name="UserType">
                <option value="">User Type</option>
                <option value="Restaurant">Restaurant Owner</option>
                <option value="User">User</option>
                <option value="Delivery Agent">Delivery Agent</option>
              </select>
              <br />

              <input className="form-control" id="Email" type="email" name="email" placeholder="example@gmail.com" /> <br />
              <input className="form-control" type="password" id="password" name="password" placeholder="Enter Password..." /><br />
              <input className="btn btn-block btn-success" type="submit" id="login" value="Sign up" /><br />
              <h6 className="text-dark text-end">
                Already have an account? &nbsp;
                <a className="text-decoration-none text-end"
                  href="/login">Login here.</a>
              </h6>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
