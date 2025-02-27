import React, { useState } from 'react'

export default function Restaurant_Management() {
  const [useFormData, setFormData] = useState();
  const [useEditAsBoolean, setEditAsBoolean] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h4>Restaurant Details</h4>
        </div>
        <div className="col-sm-6 text-end">
          {
            useFormData!=undefined && useEditAsBoolean === false && (
              <span className='btn btn-danger' onClick={() => {
                setEditAsBoolean(true);
              }}> Edit</span>
            )
          }
        </div>
      </div>
      {
        useFormData === undefined && (
          <h4 className='btn btn-primary' onClick={() => { setEditAsBoolean(true);
            setFormData({ name: '', description: '', contact: '', address: '', operatingHours: '', restaurantImage: '' });
           }}>Add Restaurant Details</h4>
        )
      }
      {
        useFormData != undefined && (
          <div className=" border border-primary mt-2 p-4 rounded">
            <div className="row mb-4">
              <div className="col-sm-6">
                <label htmlFor="name" className="mb-2">Restaurant Name:</label>
                <input type="text" id='name' className="form-control" placeholder="Restaurant Name" value={useFormData.name} onChange={(e) => {
                  setFormData({ ...useFormData, name: e.target.value });
                }}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="Description" className="mb-2">Restaurant description:</label>
                <textarea className='form-control' id="description" placeholder="Description" value={useFormData.description} onChange={(e) => {
                  setFormData({ ...useFormData, description: e.target.value })
                }}></textarea>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-sm-6">
                <label htmlFor="Address" className="mb-2">Address:</label>
                <textarea className="form-control" id="Address" placeholder="Address" value={useFormData.address} onChange={(e) => {
                  setFormData({ ...useFormData, address: e.target.value })
                }} ></textarea>
              </div>
              <div className="col-sm-6">
                <label htmlFor="contact" className="mb-2">Contact:</label>
                <input type='tel' className="form-control" id="contact" placeholder="Contact Number" value={useFormData.contact} onChange={(e) => {
                  setFormData({ ...useFormData, contact: e.target.value })
                }} />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-6">
                <label htmlFor='operatingHours' className='mb-2'>Operating Hours: </label>
                <input type="text" className="form-control" id="operatingHours" placeholder="09:00 AM - 09:00 PM" value={useFormData.operatingHours} onChange={(e) => {
                  setFormData({ ...useFormData, operatingHours: e.target.value })
                }} />
              </div>
              <div className="col-sm-6">
                {
                  useEditAsBoolean && (
                    <>
                      <label htmlFor='restaurantImage' className='mb-2'>Restaurant Image</label>
                      <input type="file" className='form-control' id="restaurantImage" onChange={(e) => {
                        setFormData({ ...useFormData, restaurantImage: e.target.value })
                      }} />
                    </>
                  )
                }

              </div>
            </div>
            {
              useEditAsBoolean && (
                <div className='row mb-4'>
                  <div className="col-sm-6">
                    <input type="submit" value="Submit" className='form-control btn btn-success' />
                  </div>
                  <div className="col-sm-6">
                    <span className="btn btn-primary form-control" onClick={() => { setEditAsBoolean(false) }}>Go Back</span>
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </>
  )
}
