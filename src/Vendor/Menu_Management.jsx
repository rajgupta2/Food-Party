import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Menu_Management() {
    const [useFormvisible, setFormvisible] = useState('hidden');
    const [useFormData, setFormData] = useState({ name: '', description: '', price: '', category: '', });
    const initialMenuItems = [
        {
            id: 'M101',
            name: 'Margherita Pizza',
            description: 'Classic pizza with fresh mozzarella and basil.',
            price: 250,
            category: 'Pizza',
            available: true,
            imageUrl: 'https://images.unsplash.com/photo-1601924928284-266fd218fa8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        },
        {
            id: 'M102',
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with Caesar dressing and croutons.',
            price: 150,
            category: 'Salad',
            available: true,
            imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        }
    ];
    return (
        <>
            <h4 className='text-primary'>
                <Link className='p-2 text-decoration-none' onClick={()=>{setFormvisible("hidden")}}>Menu Management</Link>
                <Link className='border-start border-dark p-2 text-decoration-none' onClick={()=>{ setFormvisible('visible')}}>Add a new dish</Link>
            </h4>
            {
                useFormvisible === 'hidden' && (
                    <div className="row row-cols-1 row-cols-md-4 g-4 pt-4">
                        {
                            initialMenuItems.map((elem, ind) => {
                                return (
                                    <div className="col" key={ind}>
                                        <div className="card shadow" style={{ minHeight: '335px' }}>
                                            <img className="card-img-top" src="/image.png" alt={elem.name} />
                                            <div className="row m-2">
                                                <b className="col">{elem.name}</b>
                                                <div className="col text-end">Price: {elem.price}</div>
                                                <p className='mb-0'>{elem.description} <span className="badge bg-secondary">{elem.category}</span></p>
                                            </div>
                                            <div className="row">
                                                <div className="col text-end m-2">
                                                    <button type="button" className='btn btn-sm btn-outline-success'>Edit</button>
                                                    &emsp;
                                                    <button type="button" className='btn btn-sm btn-outline-danger'>Remove</button>

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
                <div className="col" style={{maxWidth:"425px"}}>
                    <input className='form-control mb-3' type="text" name="name" placeholder="Item name" value={useFormData.name}
                      onChange={(e)=>{setFormData({...useFormData,name:e.target.value})}}
                    />
                    <input className='form-control mb-3' type="text" name="description" value={useFormData.description} placeholder='Description..'
                      onChange={(e)=>{setFormData({...useFormData,description:e.target.value})}}
                    />
                    <input className='form-control mb-3' type="number" name="price" value={useFormData.price} placeholder='Price'
                      onChange={(e)=>{setFormData({...useFormData,price:e.target.value})}}
                    />
                    <input className='form-control mb-3' type="text" name="category" value={useFormData.category} placeholder='Category'
                      onChange={(e)=>{setFormData({...useFormData,category:e.target.value})}}
                    />
                    <input type="button" value="Add a dish" className='btn btn-success'  />
                </div>
            </div>
        </>
    )
}
