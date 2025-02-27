import React from 'react'
import { useParams } from 'react-router-dom'

export default function RestaurantPage() {
    const restaurantData = {
        id: 'R101',
        name: 'Pizza Palace',
        description: 'The best place in town for authentic Italian pizza.',
        address: '123 Main Street, Chitrakoot',
        contact: '123-456-7890',
        operatingHours: '10:00 AM - 11:00 PM',
        rating: 4.5,
        coverImage: 'https://images.unsplash.com/photo-1600891964073-2d24b7c9a4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBpenphfGVufDB8fHx8MTY5ODIxNTA5Ng&ixlib=rb-1.2.1&q=80&w=1080'
    };

    const menuItems = [
        {
            id: 'D101',
            name: 'Margherita Pizza',
            description: 'Classic pizza with fresh mozzarella and basil.',
            price: 250,
            imageUrl: 'https://images.unsplash.com/photo-1601924928284-266fd218fa8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHBpenphfGVufDB8fHx8MTY5ODIxNTA5Ng&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
            id: 'D102',
            name: 'Pepperoni Pizza',
            description: 'Loaded with spicy pepperoni slices and cheese.',
            price: 300,
            imageUrl: 'https://images.unsplash.com/photo-1600417091730-8e794f0c5172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBpenphfGVufDB8fHx8MTY5ODIxNTA5Ng&ixlib=rb-1.2.1&q=80&w=1080'
        }
    ];
    const { resid } = useParams();
    return (
        <>
            <div className="row">
                <div className=" col-sm-4">
                    <img src="/image.png" alt={restaurantData.coverImage} style={{ height: '35vh' }} />
                    <h3 className="card-title">{restaurantData.name}</h3>
                    <h6 className='card-sub-heading'>{restaurantData.description}</h6>
                    <p className='mb-0'>Address: {restaurantData.address}</p>
                    <p className='mb-0'>Contact: {restaurantData.contact}</p>
                    <p className="mb-0">Opening Hours: {restaurantData.operatingHours}</p>
                    <p className='mb-0'>Rating: <i className="bi bi-star text-warning"></i> {restaurantData.rating}/5</p>
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
                                    <img className="card-img-top" src="/image.png" alt={elem.name} />
                                    <div className="row m-2">
                                        <b className="col">{elem.name}</b>
                                        <div className="col text-end">Price: {elem.price}</div>
                                        <p className='mb-0'>{elem.description}</p>

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
