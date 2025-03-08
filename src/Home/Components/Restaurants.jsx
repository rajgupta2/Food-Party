import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Mongo_API_URL } from '../../api';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const { howmuchtoPrint } = useParams();
  const print = (howmuchtoPrint === undefined) ? 4 : restaurants.length;

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
      <div className="row mt-4">
        <div className="col">
          <h4>Top Restaurants ... </h4>
        </div>
        {
          (!howmuchtoPrint) &&
          <div className="col text-end">
            <Link to={`restaurants/${restaurants.length}`} className='text-primary text-decoration-none'>View More</Link>
          </div>
        }
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 mb-4 pb-4">
        {
          restaurants.map((elem, ind) => {
            return (
              ind < print &&
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