import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Order_History() {
    const vendorOrderHistory = [
        {
            orderId: 'ORD12345',
            customerName: 'Amit Sharma',
            contactInfo: '9876543210',
            deliveryAddress: '123 Main St, New Delhi',
            items: [
                { name: 'Margherita Pizza', quantity: 2, price: 250 },
                { name: 'Caesar Salad', quantity: 1, price: 150 }
            ],
            status: 'Pending',
            orderDate: '2025-02-20 14:30',
            totalAmount: 650,
            isAccepted: true,
        },
        {
            orderId: 'ORD12346',
            customerName: 'Sneha Patel',
            contactInfo: '8765432109',
            deliveryAddress: '456 Oak St, Mumbai',
            items: [
                { name: 'Pasta Alfredo', quantity: 1, price: 200 },
                { name: 'Garlic Bread', quantity: 2, price: 100 }
            ],
            status: 'Preparing',
            orderDate: '2025-02-21 10:00',
            totalAmount: 400,
            isAccepted:false
        },
        {
            orderId: 'ORD12347',
            customerName: 'Rahul Verma',
            contactInfo: '7654321098',
            deliveryAddress: '789 Pine St, Kolkata',
            items: [
                { name: 'Burger Combo', quantity: 1, price: 180 },
                { name: 'Coke', quantity: 2, price: 50 }
            ],
            status: 'Cancelled',
            orderDate: '2025-02-22 13:45',
            totalAmount: 280,
            isAccepted: true,
        }
    ];
    return (
        <>
            <h4>Active Order Dashboard</h4>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead>
                        <tr className='bg-secondary'>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Delivery Address</th>
                            <th>Order Time</th>
                            <th>Items</th>
                            <th>Total-Amount</th>
                            <th>Status</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vendorOrderHistory.map((elem, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{elem.orderId}</td>
                                        <td>{elem.customerName}</td>
                                        <td>{elem.deliveryAddress}</td>
                                        <td>{elem.orderDate}</td>
                                        <td>
                                            {
                                                elem.items.map((item,key) =>{
                                                    return <p  className="mb-0" key={key}>{item.quantity}-{item.name}</p>
                                                })
                                            }
                                        </td>
                                        <td className='text-center'>{elem.totalAmount}</td>
                                        <td className={(elem.status==='Delivered')?'text-success':(elem.status=='Cancelled')?'text-danger':'text-warning'}>{elem.status}</td>
                                        <td className='text-center'>
                                            {
                                                elem.isAccepted===false && (
                                                    <Link className=' text-primary text-decoration-none p-2' >Accept</Link>
                                                )
                                            }
                                            {
                                                elem.isAccepted===true && (
                                                    <Link className=' text-primary text-decoration-none p-2 ' >Mark as Ready</Link>
                                                )
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
