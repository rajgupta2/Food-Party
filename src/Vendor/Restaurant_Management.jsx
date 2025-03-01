import React, { useEffect, useState } from 'react'
import { Mongo_API_URL } from '../api';

export default function Restaurant_Management() {
  const [haveRestaurants, sethaveRestaurants] = useState(false);
  const [alertData, setalertData] = useState();
  const [restaurantData, setrestaurantData] = useState({ Name: '', Description: '', Contact: '', Address: '', OperatingHours: '', Rating: '', CoverImage: '', Email: localStorage.getItem('Email') });
  const [wantToShowForm, setwantToShowForm] = useState(false);
  const [wantToEdit, setwantToEdit] = useState(false);
  const getRestaurantData = async () => {
    await fetch(`${Mongo_API_URL}/restaurant`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
                  'Accept': 'application/json',
                   Email: localStorage.getItem('Email')
      },
    }).then(response => response.json())
      .then(data => {
        //data= { statusCode: 200, data: data,isFound: true }
        if (data.isFound) {
          sethaveRestaurants(true);
          setrestaurantData(data.data);
        }
      }).catch(error => {
        setalertData("An error occurred at server side.");
        console.log(error);
      });
  }
  const postRestaurantData = async () => {
    await fetch(`${Mongo_API_URL}/restaurant`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(restaurantData)
    }).then(response => response.json())
      .then(data => {
        //data= { statusCode: 200, message: 'Restaurant added successfully.' }
        setalertData(data.message);
        sethaveRestaurants(true);
      }).catch(error => {
        setalertData("An error occurred at server side.");
        console.log(error);
      });
  };
  const putRestaurantData = async () => {
    await fetch(`${Mongo_API_URL}/restaurant`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(restaurantData)
    }).then(response => response.json())
      .then(data => {
        //data= { statusCode: 200, message: 'Restaurant updated successfully.' }
        setalertData(data.message);
      }).catch(error => {
        setalertData("An error occurred at server side.");
        console.log(error);
      });
  };
  useEffect(() => { getRestaurantData() }, []);
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
        <div className="col-sm-6">
          <h4>Restaurant Details</h4>
        </div>
        <div className="col-sm-6 text-end">
          {
            /*For Edit Button */
            (haveRestaurants === true && wantToEdit === false) && (
              <span className='btn btn-danger' onClick={() => {
                setwantToEdit(true);
              }}> Edit</span>
            )
          }
        </div>
      </div>

      {
        /*For Add a Restaurant button*/
        haveRestaurants === false && (
          <h4 className='btn btn-primary' onClick={() => {
            wantToShowForm(true);
          }}>Add Restaurant Details</h4>
        )
      }

      {
        (wantToShowForm || haveRestaurants) && (
          <>
            <div className=" border border-primary mt-2 p-4 rounded">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <label htmlFor="name" className="mb-2">Restaurant Name:</label>
                  <input type="text" id='name' className="form-control" placeholder="Restaurant Name" value={restaurantData.Name}
                    onChange={
                      (e) => { setrestaurantData({ ...restaurantData, Name: e.target.value }) }} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="Description" className="mb-2">Restaurant description:</label>
                  <textarea className='form-control' id="description" placeholder="Description" value={restaurantData.Description} onChange={(e) => {
                    setrestaurantData({ ...restaurantData, Description: e.target.value })
                  }}></textarea>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-6">
                  <label htmlFor="Address" className="mb-2">Address:</label>
                  <textarea className="form-control" id="Address" placeholder="Address" value={restaurantData.Address} onChange={(e) => {
                    setrestaurantData({ ...restaurantData, Address: e.target.value })
                  }} ></textarea>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="contact" className="mb-2">Contact:</label>
                  <input type='tel' className="form-control" id="contact" placeholder="Contact Number" value={restaurantData.Contact} onChange={(e) => {
                    setrestaurantData({ ...restaurantData, Contact: e.target.value })
                  }} />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-6">
                  <label htmlFor='operatingHours' className='mb-2'>Operating Hours: </label>
                  <input type="text" className="form-control" id="operatingHours" placeholder="09:00 AM - 09:00 PM" value={restaurantData.OperatingHours} onChange={(e) => {
                    setrestaurantData({ ...restaurantData, OperatingHours: e.target.value })
                  }} />
                </div>
                <div className="col-sm-6">
                  {
                    (haveRestaurants === false || wantToEdit === true) && (
                      <>
                        <label htmlFor='restaurantImage' className='mb-2'>Restaurant Image</label>
                        <input type="file" className='form-control' id="restaurantImage"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setrestaurantData({ ...restaurantData, CoverImage: file });
                            }
                          }} />
                      </>
                    )
                  }

                </div>
              </div>

              {
                (wantToEdit === true || haveRestaurants===false) && (
                  <div className='row mb-4'>
                    <div className="col-sm-6">
                      <input type="button" value="Submit" className='form-control btn btn-success'
                        onClick={() => {
                          (haveRestaurants === true) ? putRestaurantData() : postRestaurantData();
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <span className="btn btn-primary form-control" onClick={() => {
                        haveRestaurants?setwantToEdit(false):setwantToShowForm(false);
                      }}>Go Back</span>
                    </div>
                  </div>
                )}

            </div>
          </>
        )
      }
    </>
  )
}
