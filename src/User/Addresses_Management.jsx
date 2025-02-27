import React, { useState } from 'react'

export default function Addresses_Management() {
  const [useFormvisible, setFormvisible] = useState('hidden');
  const [useFormData,setFormData]=useState({name:'',street:'',city:'',pincode:''});
  const initialAddresses = [
    {
      id: 'A101',
      name: 'Home',
      street: '123 Main Street',
      city: 'Chitrakoot',
      pincode: '210204',
      isDefault: true,
    },
    {
      id: 'A102',
      name: 'Office',
      street: '456 Business Park',
      city: 'Allahabad',
      pincode: '211002',
      isDefault: false,
    }
  ];
  return (
    <>
      <h4 className='text-primary'>
        <span className='p-2' onClick={()=>{setFormvisible('hidden')}}>Manage Address</span>
        <span className='border-start border-dark p-2' onClick={() => { setFormvisible('visible'); }}>Add a new address</span>
      </h4>
      {
        useFormvisible === 'hidden' && (
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
            {
              initialAddresses.map((elem, ind) => {
                return (
                  <div className="col" key={ind}>
                    <div className="card shadow">
                      <div className="card-body">
                        <h3>{elem.name}</h3>
                        <p className='mb-0'>{elem.street}</p>
                        <p className='mb-0'>{elem.city}, {elem.pincode}</p>
                        <button className='btn btn-primary m-2'>Edit</button>
                        <a className='btn btn-danger m-2'>Remove</a>
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
            (e)=>{setFormData({...useFormData,name:e.target.value});}
          } />
          <input type="text" className="form-control mb-2" value={useFormData.street} placeholder='Street'
          onChange={
            (e)=>{ setFormData({...useFormData,street:e.target.value});}
          }/>
          <input type="text" className="form-control mb-2" value={useFormData.city} placeholder='City'
           onChange={
            (e)=>{ setFormData({...useFormData,city:e.target.value});}
           } />
          <input type="text" className="form-control mb-2" value={useFormData.pincode} placeholder='Pincode'
            onChange={
              (e)=>{setFormData({...useFormData, pincode:e.target.value});}
            } />
          <input type="button" className='btn btn-success' value='Add an address' />
        </div>
      </div>
    </>

  )
}
