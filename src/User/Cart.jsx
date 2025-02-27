import React, { useState } from 'react'

export default function Cart() {
  const cartItems = [
    {
      id: "C101",
      dishName: "Margherita Pizza",
      restaurant: "Pizza Palace",
      price: 250,
      quantity: 2,
      totalPrice: 500,
      imageUrl: "https://images.unsplash.com/photo-1601924582972-26064e67c9ac?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "C102",
      dishName: "Veg Burger",
      restaurant: "Burger Hub",
      price: 150,
      quantity: 1,
      totalPrice: 150,
      imageUrl: "https://images.unsplash.com/photo-1612874743837-b7373bf7b1f6?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "C103",
      dishName: "Pasta Alfredo",
      restaurant: "Pasta Point",
      price: 300,
      quantity: 1,
      totalPrice: 300,
      imageUrl: "https://images.unsplash.com/photo-1601315374519-838d82ab9b0e?auto=format&fit=crop&w=500&q=60",
    },

    {
      id: "C104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: 350,
      quantity: 3,
      totalPrice: 1050,
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
    }, {
      id: "C104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: 350,
      quantity: 3,
      totalPrice: 1050,
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
    }, {
      id: "C104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: 350,
      quantity: 3,
      totalPrice: 1050,
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
    }, {
      id: "C104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: 350,
      quantity: 3,
      totalPrice: 1050,
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
    }, {
      id: "C104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: 350,
      quantity: 3,
      totalPrice: 1050,
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
    }, {
      id: "C104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: 350,
      quantity: 3,
      totalPrice: 1050,
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [useTotalAmount,setTotalAmount] =useState(0);

  return (
    <>
      <h4>My Cart</h4>
      <div className="row">
        <div className="col-sm-9" style={{height:'90vh',overflowY:'scroll',paddingBottom:'10vh'}}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              cartItems.map((elem, ind) => {
                return (
                  <div className="col" key={ind}>
                    <div className="card shadow">
                      <img className="card-img-top" src="/image.png" alt={elem.dishName} />
                      <div className="card-body">
                        <div className="card-title row h6">
                          <div className="col">{elem.dishName}</div>
                          <div className="col text-end">{elem.price}</div>
                        </div>
                        <p className='mb-0'>Restaurant: {elem.restaurant}</p>
                        <button className='btn h4'>-</button>
                        <span>{elem.quantity} </span>
                        <button className='btn h4'>+</button>
                        <p>Total: {elem.quantity * elem.price}</p>
                        <a className='btn btn-danger'>Remove</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-sm-3 border-start">
          <h4>Total Amount: {useTotalAmount}</h4>
          <button className='btn btn-primary'>Proceed to Checkout</button>
        </div>

      </div>
    </>
  )
}
