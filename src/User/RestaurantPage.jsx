import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Mongo_API_URL } from '../api';

export default function RestaurantPage() {
    const [restaurantData, setrestaurantData] = useState({});
    const [menuItems, setMenuItems] = useState([]);
    const { resid } = useParams();
    const getRestaurants = async () => {
        await fetch(`${Mongo_API_URL}/restaurant/${resid}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                setrestaurantData(data.restaurant);
            }).catch(error => {
                console.log(error);
            });
    }
    const getItems = async () => {
        await fetch(`${Mongo_API_URL}/menuItems/${resid}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                setMenuItems(data.menuItems);
            }).catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRestaurants();
        getItems();
    }, []);
    return (
        <>
            <div className="row">
                <div className=" col-sm-4">
                    <img src="/image.png" alt={restaurantData.CoverImage} style={{ height: '35vh' }} />
                    <h3 className="card-title">{restaurantData.Name}</h3>
                    <h6 className='card-sub-heading'>{restaurantData.Description}</h6>
                    <p className='mb-0'>Address: {restaurantData.Address}</p>
                    <p className='mb-0'>Contact: {restaurantData.Contact}</p>
                    <p className="mb-0">Opening Hours: {restaurantData.OperatingHours}</p>
                    <p className='mb-0'>Rating: <i className="bi bi-star text-warning"></i> {restaurantData.Rating}/5</p>
                </div>
            </div>
            <br />
            <h3>Menu</h3>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    menuItems.map((elem, ind) => {
                        return (
                            <div className="col" key={ind}>
                                <div className="card shadow" style={{ minHeight: '300px' }}>
                                    <img className="card-img-top" src="/image.png" alt={elem.Name} />
                                    <div className="row m-2">
                                        <b className="col">{elem.Name}</b>
                                        <div className="col text-end">Price: {elem.Price}</div>
                                        <p className='mb-0'>{elem.Description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
