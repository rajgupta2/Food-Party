import React from 'react'
import { Link } from 'react-router-dom';

export default function Restaurants() {
  const restaurants = [
    {
      id: 'R101',
      name: 'Pizza Palace',
      description: 'Authentic Italian pizza with fresh ingredients.',
      address: '123 Main Street, Chitrakoot',
      contact: '123-456-7890',
      operatingHours: '10:00 AM - 11:00 PM',
      rating: 4.5,
      coverImage: 'https://images.unsplash.com/photo-1600891964073-2d24b7c9a4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'R102',
      name: 'Burger Barn',
      description: 'Juicy burgers and crispy fries.',
      address: '456 Market Road, Chitrakoot',
      contact: '098-765-4321',
      operatingHours: '11:00 AM - 10:00 PM',
      rating: 4.2,
      coverImage: 'https://images.unsplash.com/photo-1601933471184-1a4d7ace8a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'R103',
      name: 'Curry House',
      description: 'Delicious North Indian curries and breads.',
      address: '789 Spice Avenue, Chitrakoot',
      contact: '111-222-3333',
      operatingHours: '12:00 PM - 11:00 PM',
      rating: 4.7,
      coverImage: 'https://images.unsplash.com/photo-1598511726885-5b0a1e8c91f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'R103',
      name: 'Curry House',
      description: 'Delicious North Indian curries and breads.',
      address: '789 Spice Avenue, Chitrakoot',
      contact: '111-222-3333',
      operatingHours: '12:00 PM - 11:00 PM',
      rating: 4.7,
      coverImage: 'https://images.unsplash.com/photo-1598511726885-5b0a1e8c91f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }, {
      id: 'R103',
      name: 'Curry House',
      description: 'Delicious North Indian curries and breads.',
      address: '789 Spice Avenue, Chitrakoot',
      contact: '111-222-3333',
      operatingHours: '12:00 PM - 11:00 PM',
      rating: 4.7,
      coverImage: 'https://images.unsplash.com/photo-1598511726885-5b0a1e8c91f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          restaurants.map((elem, ind) => {
            return (
              <div className="col" key={ind}>
                <div className="card shadow">
                  <img className="card-img-top" src="/image.png" alt={elem.coverImage} />
                  <div className="card-body">
                    <h3 className="card-title">{elem.name}</h3>
                    <h6 className='card-sub-heading'>{elem.description}</h6>
                    <p className='mb-0'>Address: {elem.address}</p>
                    <p className='mb-0'>Contact: {elem.contact}</p>
                    <div className="row">
                      <div className="col">
                        <p className='mb-0'>Rating: <i className="bi bi-star text-warning"></i> {elem.rating}/5</p>
                      </div>
                      <div className="col text-end">
                        <Link to={'/user/restaurants/' + elem.id} className='text-primary text-decoration-none' >View More</Link>
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
