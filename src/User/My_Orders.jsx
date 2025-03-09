import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Mongo_API_URL } from '../api';
export default function My_Orders() {
  const [ordersArray, setOrdersArray] = useState([]);
  const [alertData, setalertData] = useState();
 const getOrder = async () => {
    await fetch(`${Mongo_API_URL}/order/${localStorage.getItem('Email')}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(response => response.json())
      .then(data => {
        setOrdersArray(data.orders);
      }).catch(error => {
        setalertData("An error occured, failed to load cart items.");
        console.log(error);
      });
  }
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
      <h4>My order history</h4>
      <div className='table-responsive '>
        <table className='table table-hover border'>
          <thead className='border'>
            <tr>
              <th>Order ID</th>
              <th>Order date</th>
              <th>Restaurant</th>
              <th>Delivery Address</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='border'>
            {
              ordersArray.map((elem, ind) => {
                const totalAmount = elem.Items.reduce((sum, item) => sum + (item.Quantity * (item.item?.Price || 0)), 0);
                return (
                  <tr key={ind}>
                    <td>{elem._id}</td>
                    <td>{elem.OrderDate}</td>
                    <td>
                      <p className='mb-0'><b>{elem.Restaurant.Name}</b> </p>
                      <p className='mb-0'>{elem.Restaurant.Address}</p>
                      <p className='mb-0'>{elem.Restaurant.Contact}</p>
                    </td>
                    <td>
                      <p className='mb-0'> {elem.DeliveryAddress.Name},</p>
                      <p className='mb-0'>  {elem.DeliveryAddress.Street}, {elem.DeliveryAddress.City},</p>
                      <p className='mb-0'>{elem.DeliveryAddress.PinCode} </p>
                    </td>
                    <td>
                      {
                        elem.Items.map((elem, ind) => {
                          return <p className='mb-0' key={ind}>{elem.Quantity} {elem.item.Name}</p>
                        })
                      }
                    </td>
                    <td>&#8377; {parseInt(totalAmount)}</td>
                    <td className={
                                            elem.Status === 'Delivered'
                                            ? "text-success"
                                            : elem.Status === 'Cancelled'
                                              ? "text-danger"
                                              : "text-warning"
                                        }>{elem.Status}</td>
                    <td>
                      {
                        elem.Status !== 'Delivered' && (<Link to="" className='btn btn-danger btn-sm'>Cancel</Link>)
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
