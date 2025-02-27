import React from 'react'
import { Link } from 'react-router-dom';

export default function My_Orders() {
  const ordersArray = [
    {
      orderId: "#12345",
      date: "01/02/25",
      restaurant: "Pizza Hut",
      items: "2 Pizzas",
      amount: "₹500",
      status: "Delivered",
    },
    {
      orderId: "#12346",
      date: "02/02/25",
      restaurant: "Burger King",
      items: "Burger, Fries",
      amount: "₹250",
      status: "Out for Delivery",
    },
    {
      orderId: "#12347",
      date: "05/02/25",
      restaurant: "Subway",
      items: "1 Sub & Coke",
      amount: "₹300",
      status: "Pending",
    },
  ];
  return (
    <>
      <h4>My order history</h4>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order date</th>
              <th>Restaurant</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              ordersArray.map((elem, ind) => {
                return (
                  <tr key={ind}>
                    <td>{elem.orderId}</td>
                    <td>{elem.date}</td>
                    <td>{elem.restaurant}</td>
                    <td>{elem.items}</td>
                    <td>{elem.amount}</td>
                    <td className={elem.status === 'Delivered' ? "text-success" : "text-warning"}>{elem.status}</td>
                    <td>
                      <Link to="" className='text-primary text-decoration-none'>View </Link>
                      {
                        elem.status === 'Pending' && (<Link to="" className='text-decoration-none text-danger'>Cancel</Link>)
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
