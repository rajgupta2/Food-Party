import React from 'react'

export default function Make_Orders() {
    const dishesData = [
        {
            id: 'D101',
            name: 'Margherita Pizza',
            restaurant: 'Pizza Palace',
            price: 250,
            imageUrl: 'https://images.unsplash.com/photo-1601924582972-26064e67c9ac?auto=format&fit=crop&w=500&q=60',
        },
        {
            id: 'D102',
            name: 'Veg Burger',
            restaurant: 'Burger Hub',
            price: 150,
            imageUrl: 'https://images.unsplash.com/photo-1612874743837-b7373bf7b1f6?auto=format&fit=crop&w=500&q=60',
        },
        {
            id: 'D103',
            name: 'Pasta Alfredo',
            restaurant: 'Pasta Point',
            price: 300,
            imageUrl: 'https://images.unsplash.com/photo-1601315374519-838d82ab9b0e?auto=format&fit=crop&w=500&q=60',
        }
    ];
    return (
        <>
            <div className="row">
                <div className="col-sm-8" style={{ height: '90vh', paddingBottom: '8vh', overflowY: 'auto' }}>
                    <h4>Make an Order</h4>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            dishesData.map((elem, ind) => {
                                return (
                                    <div className="col" key={ind}>
                                        <div className="card shadow">
                                            <img className="card-img-top" src="/image.png" alt={elem.name} />
                                            <div className="card-body">
                                                <h5 className='card-title mb-0'>{elem.name}</h5>
                                                <p className='mb-0'>{elem.restaurant}</p>
                                                <p>Price: {elem.price}</p>
                                                <a className='btn btn-dark'>Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-sm-4 border-start">
                    <h4>Order Summary</h4>
                    <input className="form-control mb-3" type="text" placeholder='Delivery Address' />
                    <select className="form-select mb-3">
                        <option value="">Select Payment Options</option>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Credit/Debit Card" disabled>Credit/Debit Card</option>
                        <option value="UPI Payments">UPI Payments</option>
                    </select>
                    <button className="btn btn-success">Place Order</button>
                </div>
            </div>


        </>
    )
}
