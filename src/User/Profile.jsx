import React, { useEffect, useState } from 'react';
import { Mongo_API_URL } from '../api.js';

export default function Profile() {
  const [useWanttoEdit, setWanttoEdit] = useState(false);
  const [alertData,setalertData] = useState();
  const [haveEntityAlready,sethaveEntityAlready] = useState(false);
  const [profile, setprofile] = useState({
    Name: "",
    Phone: "",
    Email: localStorage.getItem('Email')
  });
  const getProfile = async () => {
    await fetch(`${Mongo_API_URL}/userDetails`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
                  'Accept': 'application/json',
                   Email: localStorage.getItem('Email')
               },
    }).then(response => response.json())
      .then(data => {
        //data={ statusCode: 200, data:user }
        if(data.statusCode===200 && data.data){
          setprofile({ ...profile, Name: data.data.Name, Phone: data.data.Phone });
          sethaveEntityAlready(true);
        }
      }).catch(error => {
        setalertData("An error occurred at server side.");
        console.log(error);
      });
  }
  const postProfile = async () => {
    await fetch(`${Mongo_API_URL}/userDetails`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(profile),
    }).then(response => response.json())
      .then(data => {
        if(data.statusCode===201)
        setalertData('Profile saved successfully.');
      }).catch(error => {
        setalertData("An error occurred at server side.");
        console.log(error);
      });
  }
  const putProfile = async () => {
    await fetch(`${Mongo_API_URL}/userDetails`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(profile),
    }).then(response => response.json())
      .then(data => {
        setalertData(data.message);
      }).catch(error => {
        setalertData("An error occurred at server side.");
        console.log(error);
      });
  }
  useEffect(() => {
      getProfile();
  }, [])
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
          <input type="text" id="name" className='form-control mb-2' value={profile.Name}
            disabled={!useWanttoEdit} onChange={(e) => { setprofile({ ...profile, Name: e.target.value }) }} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className='form-control mb-2' value={profile.Email}
            disabled={!useWanttoEdit} />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" className='form-control mb-4' value={profile.Phone}
            disabled={!useWanttoEdit} onChange={(e) => { setprofile({ ...profile, Phone: e.target.value }) }} />
          {
            useWanttoEdit === true &&
            <input type="button" className='form-control btn btn-success' value="Save" onClick={() => {
              setWanttoEdit(false);
              (haveEntityAlready)?putProfile():postProfile();
            }} />
          }
        </div>
      </div>
    </>
  )
}
