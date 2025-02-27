import React, { useState } from 'react'

export default function Profile() {
  const [useWanttoEdit, setWanttoEdit] = useState(false);
  const profile = {
    id: 'U123',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
  };
  return (
    <>
      <div className="row">
        <div className="col" style={{ maxWidth: '550px' }}>
          <div className="row">
            <div className="col-sm-6">
              <h4 className='text-primary'>My Profile</h4>
            </div>
            <div className="col-sm-6 text-end">
              {
                useWanttoEdit === false &&
                <span className="btn btn-danger" onClick={() => { setWanttoEdit(true) }}>Edit</span>
              }
            </div>
          </div>
          <hr />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className='form-control mb-2' value={profile.name} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className='form-control mb-2' value={profile.email} />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" className='form-control mb-4' value={profile.phone} />
          {
            useWanttoEdit === true &&
            <input type="button" className='form-control btn btn-success' value="Save" onClick={() => { setWanttoEdit(false) }} />
          }
        </div>
      </div>
    </>
  )
}
