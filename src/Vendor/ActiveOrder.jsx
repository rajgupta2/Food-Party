import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mongo_API_URL } from '../api';


export default function Order_History() {
    const [ordersArray, setOrdersArray] = useState([]);
    const [alertData, setalertData] = useState();
    const getOrder = async () => {
        await fetch(`${Mongo_API_URL}/order/active-order/${localStorage.getItem('Email')}`, {
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
    const updateOrder = async (id, status) => {
        await fetch(`${Mongo_API_URL}/order/update-order/${id}/${status}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                setOrdersArray(prevOrders =>
                    prevOrders.map(elem =>
                        elem._id === id ? { ...elem, Status: status } : elem
                    )
                );
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
            <h4>Active Order Dashboard</h4>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead>
                        <tr className='bg-secondary'>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Delivery Address</th>
                            <th>Items</th>
                            <th>Total-Amount</th>
                            <th>Status</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordersArray.map((elem, ind) => {
                                const totalAmount = elem.Items.reduce((sum, item) => sum + (item.Quantity * (item.item?.Price || 0)), 0);
                                return (
                                    <tr key={ind}>
                                        <td>{elem._id}</td>
                                        <td>
                                            <p className='mb-0'><b>{elem.Customer.Name}</b> </p>
                                            <p className='mb-0'>Contact:{elem.Customer.Phone}</p>
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
                                        <td className='text-center'>
                                            {
                                                elem.Status === 'Pending' && (
                                                    <>
                                                        <Link className='p-2 btn btn-primary btn-sm' onClick={() => {
                                                            updateOrder(elem._id, 'Accept');
                                                        }}>Accept</Link> &nbsp;
                                                        <Link className='p-2 btn btn-danger btn-sm' onClick={() => {
                                                            updateOrder(elem._id, 'Cancelled');
                                                        }}>Cancel</Link>
                                                    </>
                                                )
                                            }
                                            {
                                                elem.Status === "Accept" && (
                                                    <Link className='btn btn-success btn-sm p-2 ' onClick={() => {
                                                        updateOrder(elem._id, 'Ready');
                                                    }}>Mark as Ready</Link>
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
