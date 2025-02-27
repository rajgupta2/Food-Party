import React from 'react'

export default function Check_Offers() {
  const offersData = [
    {
      id: 'O101',
      title: 'Flat 20% off on all Pizzas',
      restaurant: 'Pizza Palace',
      discount: '20%',
      validity: 'Valid until 29th Feb 2025',
      imageUrl: 'https://images.unsplash.com/photo-1601924582972-26064e67c9ac?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'O102',
      title: 'Buy 1 Get 1 Free on Burgers',
      restaurant: 'Burger Hub',
      discount: 'BOGO',
      validity: 'Valid until 15th Mar 2025',
      imageUrl: 'https://images.unsplash.com/photo-1612874743837-b7373bf7b1f6?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'O103',
      title: '30% off on Pasta',
      restaurant: 'Pasta Point',
      discount: '30%',
      validity: 'Valid until 10th Mar 2025',
      imageUrl: 'https://images.unsplash.com/photo-1601315374519-838d82ab9b0e?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'O103',
      title: '30% off on Pasta',
      restaurant: 'Pasta Point',
      discount: '30%',
      validity: 'Valid until 10th Mar 2025',
      imageUrl: 'https://images.unsplash.com/photo-1601315374519-838d82ab9b0e?auto=format&fit=crop&w=500&q=60'
    }
  ];
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          offersData.map((elem, ind) => {
            return (
              <div className="col" key={ind}>
                <div className="card shadow">
                  <img className="card-img-top" src="/image.png" alt={elem.title} />
                  <div className="card-body">
                    <p className="card-title h6">{elem.title}</p>
                    <div className="col">{elem.restaurant}</div>
                    <p className='mb-0'>Discount: {elem.discount}</p>
                    <p>{elem.validity}</p>
                    <a className='btn btn-dark'>Avail Offer</a>
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
