import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Mongo_API_URL } from '../api';

export default function Menu_Management() {
    const [useFormvisible, setFormvisible] = useState('hidden');
    const [useFormData, setFormData] = useState({ Name: '', Description: '', Price: '', Category: '', ImageUrl: '', RestaurantEmail: localStorage.getItem('Email') });
    const [alertData,setalertData]=useState();
    const [initialMenuItems, setinitialMenuItems] = useState([]);
    const getMenuItems = async () => {
        await fetch(`${Mongo_API_URL}/menuItems`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'email': localStorage.getItem('Email')
            },
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setinitialMenuItems(data.menuItems);
            }
            ).catch(error => {
                setalertData("An error occurred at server side.");
                console.log(error);
            });
    }
    const postMenuItem = async () => {
        await fetch(`${Mongo_API_URL}/menuItems`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(useFormData)
        }).then(response => response.json())
            .then(data => {
                setalertData(data.message);
                setFormData({});
            }).catch(error => {
                setalertData("An error occurred at server side.");
                console.log(error);
            });
    };
    const removeItem=async (id)=>{
        await fetch(`${Mongo_API_URL}/menuItems/${id}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {
                setalertData(data.message);
                setinitialMenuItems(prevItems => prevItems.filter(item => item._id !== id));
            }
            ).catch(error => {
                setalertData("An error occurred at server side.");
                console.log(error);
            });
    }
    useEffect(() => { getMenuItems() }, []);
    return (
        <>

            <h4 className='text-primary'>
                <Link className='p-2 text-decoration-none' onClick={() => { setFormvisible("hidden") }}>Menu Management</Link>
                <Link className='border-start border-dark p-2 text-decoration-none' onClick={() => { setFormvisible('visible') }}>Add a new dish</Link>
            </h4>
            {
                alertData && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <b>{alertData}</b>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )
            }
            {
                useFormvisible === 'hidden' && (
                    <div className="row row-cols-1 row-cols-md-4 g-4 pt-4">
                        {
                            initialMenuItems.map((elem, ind) => {
                                return (
                                    <div className="col" key={ind}>
                                        <div className="card shadow" style={{ minHeight: '335px' }}>
                                            <img className="card-img-top" src="/image.png" alt={elem.Name} />
                                            <div className="row m-2">
                                                <b className="col">{elem.Name}</b>
                                                <div className="col text-end">Price: {elem.Price}</div>
                                                <p className='mb-0'>{elem.Description} <span className="badge bg-secondary">{elem.Category}</span></p>
                                            </div>
                                            <div className="row">
                                                <div className="col text-end m-2">
                                                    <button type="button" className='btn btn-sm btn-outline-danger' id={elem._id} onClick={(e)=>{
                                                   removeItem(e.target.id) }}>Remove</button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }

            <div className="row pt-4" style={{ visibility: useFormvisible }}>
                <div className="col" style={{ maxWidth: "425px" }}>
                    <input className='form-control mb-3' type="text"  placeholder="Item name" value={useFormData.Name}
                        onChange={(e) => { setFormData({ ...useFormData, Name: e.target.value }) }}
                    />
                    <input className='form-control mb-3' type="text"  value={useFormData.Description} placeholder='Description..'
                        onChange={(e) => { setFormData({ ...useFormData, Description: e.target.value }) }}
                    />
                    <input className='form-control mb-3' type="number" value={useFormData.Price} placeholder='Price'
                        onChange={(e) => { setFormData({ ...useFormData, Price: e.target.value }) }}
                    />
                    <input className='form-control mb-3' type="text"  value={useFormData.Category} placeholder='Category'
                        onChange={(e) => { setFormData({ ...useFormData, Category: e.target.value }) }}
                    />
                    <input type="button" value="Add a dish" className='btn btn-success' onClick={()=>{
                        postMenuItem();
                    }}/>
                </div>
            </div>
        </>
    )
}
