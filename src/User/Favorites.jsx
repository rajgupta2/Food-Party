import React, { useEffect, useState } from 'react'
import { Mongo_API_URL } from '../api';
import { Link } from 'react-router-dom';
export default function Favorites() {
  const [alertData, setalertData] = useState();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const fetchfavoriteDish = async () => {
    fetch(`${Mongo_API_URL}/favorite/${localStorage.getItem('Email')}/all-description`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(response => response.json())
      .then(data => {
        setFavoriteItems(data.favorites);
      }).catch(error => {
        setalertData("An error occured, failed to load favorite dish.");
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
          setFavoriteItems((prevItems) => prevItems.filter((item) => item._id !== id));
        }
      }).catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchfavoriteDish();
  }, []);
  return (
    <>
      <h2>Favorite dishes</h2>
      {
        alertData && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <b>{alertData}</b>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{
              setalertData();
            }}></button>
          </div>
        )
      }
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          favoriteItems.map((elem, ind) => {
            return (
              <div className="col" key={ind}>
                <div className="card shadow">
                  <img className="card-img-top" src="/image.png" alt={elem._MenuItem.Name} />
                  <div className="row m-2">
                    <div className="col h5">{elem._MenuItem.Name}</div>
                    <div className="col text-end">Price: &#8377;{elem._MenuItem.Price}</div>
                    <p className="mb-0"><b>Restaurant: {elem._MenuItem._Restaurant.Name}</b></p>
                    <p className="mb-0">{elem._MenuItem.Description}</p>
                    <Link to=""  className="btn btn-primary btn-small" onClick={() => { removeFromFavorite(elem._id) }}>Remove</Link>
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
