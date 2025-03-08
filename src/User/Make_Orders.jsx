import React, { useState, useEffect } from 'react'
import { Mongo_API_URL } from '../api';
import { Link } from 'react-router-dom';

export default function Make_Orders() {
    const [dishesData, setdishesData] = useState([]);
    const [cartItems, setCartItems] = useState(new Set());
    const [favoriteItems, setFavoriteItems] = useState(new Set());
    const [alertData, setalertData] = useState();
    const getItems = async () => {
        await fetch(`${Mongo_API_URL}/menuItems/all`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                setdishesData(data.menuItems);
            }).catch(error => {
                setalertData("An error occured, failed to load.");
                console.log(error);
            });
    };

    const addToCart = async (target) => {
        await fetch(`${Mongo_API_URL}/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ Email: localStorage.getItem('Email'), Item_id: target.id }),
        }).then(response => response.json())
            .then(data => {
                setalertData(data.message)
                if (data.statusCode === 200) {
                    setCartItems(prevCartItems => {
                        const newCartItems = new Set(prevCartItems);
                        newCartItems.add(target.id);
                        return newCartItems;
                    });
                }
            }).catch(error => {
                console.log(error);
            });
    };
    const getCart = async () => {
        await fetch(`${Mongo_API_URL}/cart/${localStorage.getItem('Email')}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                const cartSet = new Set(data.cart.map(item => item._MenuItem));
                setCartItems(cartSet);
            }).catch(error => {
                setalertData("An error occured, failed to load cart items.");
                console.log(error);
            });
    }
        const fetchfavoriteDish = async () => {
            fetch(`${Mongo_API_URL}/favorite/${localStorage.getItem('Email')}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            }).then(response => response.json())
            .then(data => {
                const favSet = new Set(data.favorites.map(item => item._MenuItem));
                setFavoriteItems(favSet);
            }).catch(error => {
                setalertData("An error occured, failed to load favorite dish.");
                console.log(error);
            });
        };
    const addToFavorite = async (id) => {
        await fetch(`${Mongo_API_URL}/favorite`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ Email: localStorage.getItem('Email'), Item_id: id }),
        }).then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setalertData(data.message);
                    setFavoriteItems(prevFavorites => {
                        const newFavorites = new Set(prevFavorites);
                        newFavorites.add(id);
                        return newFavorites;
                    });
                }
            }).catch(error => {
                console.log(error);
            });
    };
    const removeFromFavorite = async (id) => {
        await fetch(`${Mongo_API_URL}/favorite/${localStorage.getItem('Email')}/${id}`, {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setalertData(data.message);
                    setFavoriteItems(prevFavorites => {
                        const newFavorites = new Set(prevFavorites);
                        newFavorites.delete(id);
                        return newFavorites;
                    });
                }
            }).catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        getItems();
        getCart();
        fetchfavoriteDish();
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-sm-12" style={{ height: '90vh', paddingBottom: '8vh', overflowY: 'auto' }}>
                    {
                        alertData && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <b>{alertData}</b>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )
                    }
                    <h4>Make an Order</h4>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            dishesData.map((elem, ind) => {
                                const isAdded = cartItems.has(elem._id);
                                const isFavorite = favoriteItems.has(elem._id);
                                return (
                                    <div className="col" key={ind}>
                                        <div className="card shadow">
                                            <img className="card-img-top" src="/image.png" alt={elem.Name} />
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-10">
                                                        <h5 className='card-title mb-0'>{elem.Name}</h5>
                                                    </div>
                                                    <div className="col-2 text-end">
                                                        {
                                                            isFavorite?
                                                            <Link to=""  className="text-decoration-none" onClick={() => { removeFromFavorite(elem._id) }}><i className="bi bi-heart-fill text-danger"></i></Link>
                                                            :
                                                            <Link to=""  className="text-decoration-none" onClick={() => { addToFavorite(elem._id) }}><i className="bi bi-heart"></i></Link>
                                                        }
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-justify">{elem.Description}</p>
                                                <p className='mb-0' id={elem._Restaurant._id}>Restaurant: <b>{elem._Restaurant.Name}</b></p>
                                                <p>Price: &#8377;{elem.Price}</p>
                                                <button
                                                    className={`btn ${isAdded ? 'btn-success' : 'btn-dark'}`}
                                                    id={elem._id}
                                                    onClick={(e) => addToCart(e.target)}
                                                    disabled={isAdded}
                                                >
                                                    {isAdded ? "Already Added to Cart" : "Add to Cart"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>


        </>
    )
}
