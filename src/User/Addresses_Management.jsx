import React, { useEffect, useState } from 'react'
import { Mongo_API_URL } from '../api';
export default function Addresses_Management() {
  const [useFormvisible, setFormvisible] = useState('hidden');
  const [useFormData, setFormData] = useState({ name: '', street: '', city: '', pincode: '', Email: localStorage.getItem('Email') });
  const [alertData, setalertData] = useState();
  // const initialAddresses = [
  //   {
  //     id: 'A101',
  //     name: 'Home',
  //     street: '123 Main Street',
  //     city: 'Chitrakoot',
  //     pincode: '210204',
  //     isDefault: true,
  //   },
  //   {
  //     id: 'A102',
  //     name: 'Office',
  //     street: '456 Business Park',
  //     city: 'Allahabad',
  //     pincode: '211002',
  //     isDefault: false,
  //   }
  // ];
  const [initialAddresses, setInitialAddress] = useState([]);
  const postAddress = () => {
    fetch(`${Mongo_API_URL}/address`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(useFormData)
    }).then(response => response.json())
      .then(data => {
        setalertData(data.message);
        setFormData({ Email: localStorage.getItem('Email') });
      }).catch(error => {
        setalertData("An error occured, failed to save.");
        console.log(error);
      });
  };
  const getAddress = () => {
    fetch(`${Mongo_API_URL}/address`, {
      method: 'Get',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', email: localStorage.getItem('Email') },
    }).then(response => response.json())
      .then(data => {
        setInitialAddress(data.address);
      }).catch(error => {
        setalertData("An error occured, failed to save.");
        console.log(error);
      });
  };
  const removeAddress = (id) => {
    fetch(`${Mongo_API_URL}/address/${id}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', email: localStorage.getItem('Email') },
    }).then(response => response.json())
      .then(data => {
        setInitialAddress(data.address);
      }).catch(error => {
        setalertData("An error occured, failed to delete.");
        console.log(error);
      });
  };
  useEffect(() => {
    getAddress();
  }, []);
  return (
    <>
      <h4 className='text-primary'>
        <span className='p-2' onClick={() => { setFormvisible('hidden') }}>Manage Address</span>
        <span className='border-start border-dark p-2' onClick={() => { setFormvisible('visible'); }}>Add a new address</span>
      </h4>
      {
        alertData && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <b>{alertData}</b>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {
              setalertData();
            }}></button>
          </div>
        )
      }
      {
        useFormvisible === 'hidden' && (
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
            {
              initialAddresses.map((elem, ind) => {
                return (
                  <div className="col" key={ind}>
                    <div className="card shadow">
                      <div className="card-body">
                        <h3>{elem.Name}</h3>
                        <p className='mb-0'>{elem.Street}</p>
                        <p className='mb-0'>{elem.city}, {elem.PinCode}</p>
                        <a className='btn btn-danger m-2' onClick={() => {
                          removeAddress(elem._id);
                          setInitialAddress((prevAddress) => prevAddress.filter((item) => item._id !== id));
                        }}>Remove</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
      <div className="row" style={{ visibility: useFormvisible }}>
        <div className="col-sm-4 pt-4">
          <input type="text" className="form-control mb-2" value={useFormData.name} placeholder='Name of the address'
            onChange={
              (e) => { setFormData({ ...useFormData, name: e.target.value }); }
            } />
          <input type="text" className="form-control mb-2" value={useFormData.street} placeholder='Street'
            onChange={
              (e) => { setFormData({ ...useFormData, street: e.target.value }); }
            } />
          <input type="text" className="form-control mb-2" value={useFormData.city} placeholder='City'
            onChange={
              (e) => { setFormData({ ...useFormData, city: e.target.value }); }
            } />
          <input type="text" className="form-control mb-2" value={useFormData.pincode} placeholder='Pincode'
            onChange={
              (e) => { setFormData({ ...useFormData, pincode: e.target.value }); }
            } />
          <input type="button" className='btn btn-success' value='Add an address' onClick={() => {
            postAddress();
          }} />
        </div>
      </div>
    </>

  )
}
