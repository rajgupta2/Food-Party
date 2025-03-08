import React, { useEffect, useState } from 'react'
import { Mongo_API_URL } from '../api';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [alertData, setalertData] = useState();
  const [useTotalAmount, setTotalAmount] = useState(0);
  const [initialAddresses, setInitialAddress] = useState([]);
  const [deliveryAddressId, setDeliveryAddressId] = useState();
  const [paymentOption, setPaymentOption] = useState();
  const getCart = async () => {
    await fetch(`${Mongo_API_URL}/cart/${localStorage.getItem('Email')}/all-description`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(response => response.json())
      .then(data => {
        if (data.cart) {
          setCartItems(data.cart);
          calculateTotalAmount(data.cart);
        }
      }).catch(error => {
        setalertData("An error occured, failed to load cart items.");
        console.log(error);
      });
  }
  const removeCart = async (id) => {
    await fetch(`${Mongo_API_URL}/cart/${id}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(response => response.json())
      .then(data => {
        setalertData("Item removed from cart successfully.");
        setCartItems((prevCarts) => prevCarts.filter((elem) => elem._id !== id));
      }).catch(error => {
        setalertData("An error occured, failed to delete cart item.");
        console.log(error);
      });
  }
  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1

    await fetch(`${Mongo_API_URL}/cart`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ cartItemId: id, quantity: newQuantity }),
    }).then(response => response.json())
      .then(() => {
        setCartItems(prevCartItems => {
          const updatedCart = prevCartItems.map(item =>
            item._id === id ? { ...item, Quantity: newQuantity } : item
          );
          calculateTotalAmount(updatedCart);
          return updatedCart;
        });
      }).catch(error => {
        setalertData("An error occurred, failed to update quantity.");
        console.log(error);
      });
  };
  const calculateTotalAmount = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.Quantity * item._MenuItem.Price, 0);
    setTotalAmount(total);
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
  useEffect(() => {
    getCart();
    getAddress();
  }, [])
  return (
    <>
      <h4>My Cart</h4>
      <div className="row">
        <div className="col-sm-9" style={{ height: '90vh', overflowY: 'scroll', paddingBottom: '10vh' }}>
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
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              cartItems !== undefined &&
              cartItems.map((elem, ind) => {
                return (
                  <div className="col" key={ind}>
                    <div className="card shadow">
                      <img className="card-img-top" src="/image.png" alt={elem._MenuItem.Name} />
                      <div className="card-body">
                        <div className="card-title row h6">
                          <div className="col">{elem._MenuItem.Name}</div>
                          <div className="col text-end">Price: &#8377;{elem._MenuItem.Price}</div>
                        </div>
                        <p className='mb-0'>Restaurant: {elem._MenuItem._Restaurant.Name}</p>
                        <button className='btn h4' onClick={() => updateQuantity(elem._id, elem.Quantity - 1)}>&#8722;</button>
                        <span>{elem.Quantity} </span>
                        <button className='btn h4' onClick={() => updateQuantity(elem._id, elem.Quantity + 1)}>&#43;</button>
                        <p>Total Amount: {elem.Quantity * elem._MenuItem.Price}</p>
                        <a className='btn btn-danger'
                          onClick={() => {
                            removeCart(elem._id);
                          }}>Remove</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-sm-3 border-start">
          <h4>Order Summary</h4>
          <h4>Total Amount: {useTotalAmount}</h4>
          <select className="form-select mb-3" onChange={(e) => {
            setDeliveryAddressId(e.target.value);
          }}>
            <option value="">Delivery Address</option>
            {
              initialAddresses.map((elem, ind) => {
                return <option value={elem._id} key={ind}>{elem.Name}, {elem.Street}, {elem.City}, {elem.PinCode}</option>
              })
            }
          </select>
          <select className="form-select mb-3" onChange={(e) => {
            setPaymentOption(e.target.value);
          }}>
            <option value="">Select Payment Options</option>
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Credit/Debit Card" disabled className='bg-muted'>Credit/Debit Card</option>
            <option value="UPI Payments" disabled >UPI Payments</option>
          </select>
          <button className="btn btn-primary" onClick={()=>{

          }}>Place Order</button>
        </div>
      </div>
    </>
  )
}
