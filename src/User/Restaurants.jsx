import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Mongo_API_URL } from '../api';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const getRestaurants = async () => {
    await fetch(`${Mongo_API_URL}/restaurant/all`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(response => response.json())
      .then(data => {
        setRestaurants(data.restaurants);
      }).catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    getRestaurants();
  }, [])
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          restaurants.map((elem, ind) => {
            return (
              <div className="col" key={ind}>
                <div className="card shadow">
                  <img className="card-img-top" src="/image.png" alt={elem.CoverImage} />
                  <div className="card-body">
                    <h3 className="card-title">{elem.Name}</h3>
                    <h6 className='card-sub-heading'>{elem.Description}</h6>
                    <p className='mb-0'>Address: {elem.Address}</p>
                    <p className='mb-0'>Contact: {elem.Contact}</p>
                    <p className='mb-0'>Email: {elem._UserId.Email}</p>
                    <div className="row">
                      <div className="col">
                        <p className='mb-0'>Rating: <i className="bi bi-star text-warning"></i> {elem.Rating}/5</p>
                      </div>
                      <div className="col text-end">
                        <Link to={'/user/restaurants/' + elem._id} className='text-primary text-decoration-none' >View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}