import React, { useEffect, useState } from 'react'
import { Mongo_API_URL } from '../api';
export default function Check_Offers() {
  const [offersData, setOffersData] = useState([]);
  const [alertData, setalertData] = useState();
  const getOffersData = async () => {
    await fetch(`${Mongo_API_URL}/offer/all`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(response => response.json())
      .then(data => {
        setOffersData(data.offer);
      }).catch(error => {
        setalertData("An error occured, failed to load.");
        console.log(error);
      });
  };
  useEffect(() => {
    getOffersData();
  }, []);
  return (
    <>
      {
        alertData && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <b>{alertData}</b>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {
              setalertData();
            }}></button>
          </div>
        )
      }
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          offersData.map((elem, ind) => {
            return (
              <div className="col" key={ind}>
                <div className="card shadow">
                  <img className="card-img-top" src="/image.png" alt={elem.Title} />
                  <div className="card-body">
                    <p> <b className="card-title">{elem.Title}</b></p>
                    <p className=' h6'>{elem.Description}</p>
                    <div className="col" id={elem._Restaurant._id}>Restaurant: {elem._Restaurant.Name}</div>
                    <p className='mb-0'>Discount: {elem.Discount}{(elem.Dis_Type === 'percentage') && '%'}</p>
                    <p className='mb-0'>Validity: {elem.StartDate} - {elem.EndDate}</p>
                    <p>Minimum Order: {elem.Min_Order}</p>
                    <a className='btn btn-dark'>Avail Offer</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
