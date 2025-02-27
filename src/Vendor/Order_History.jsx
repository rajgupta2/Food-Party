import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Order_History() {
    const [useSpecifiedOrder, setSpecifiedOrder] = useState();
    const [useShowDetails, setShowDetails] = useState('hidden');
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
            status: 'Delivered',
            orderDate: '2025-02-20 14:30',
            deliveryDate: '2025-02-20 15:15',
            paymentMethod: 'UPI',
            paymentStatus: 'Paid',
            totalAmount: 650
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
            deliveryDate: null,
            paymentMethod: 'Cash',
            paymentStatus: 'Pending',
            totalAmount: 400
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
            paymentMethod: 'Card',
            paymentStatus: 'Refunded',
            totalAmount: 280
        }
    ];

    const ViewDetails = ({ order}) => {
        return (
            <>
                {
                    order !== undefined && (
                        <>
                            <Link className='text-primary p-1 text-decoration-none' onClick={()=>{setShowDetails('hidden')}}>Back</Link>
                            <table className='table' style={{ maxWidth: '500px' }}>
                                <tbody>
                                    <tr>
                                        <td>Order-Id:</td>
                                        <td>{order.orderId}</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Name:</td>
                                        <td>{order.customerName}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact No.</td>
                                        <td>{order.contactInfo}</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Address:</td>
                                        <td>{order.deliveryAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Dish Items:</td>
                                        <td>
                                            {
                                                order.items.map((elem, ind) => {
                                                    return <p key={ind}>{elem.name} with quantity- {elem.quantity} having price: {elem.price}</p>
                                                })
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total Amount:</td>
                                        <td>{order.totalAmount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )
                }
            </>
        )
    };

    return (
        <>
            <h4>Order History Dashboard</h4>
            {
                useShowDetails === 'hidden' && (
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer Name</th>
                                    <th>Delivery Address</th>
                                    <th>Order date</th>
                                    <th>Total-Amount</th>
                                    <th>Delivery-Status</th>
                                    <th>Payment-Status</th>
                                    <th>Actions</th>
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
                                                <td>{elem.totalAmount}</td>
                                                <td>{elem.status}</td>
                                                <td>{elem.paymentStatus}</td>
                                                <td>
                                                    <Link className=' text-primary text-decoration-none' onClick={() => { setShowDetails('visible'); setSpecifiedOrder(elem); }}>
                                                        View Details
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }

            {
                useShowDetails === 'visible' && (
                    <ViewDetails order={useSpecifiedOrder} />
                )
            }
        </>
    )
}
