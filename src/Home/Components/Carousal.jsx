import React from 'react';
import { CarousalData } from './CarousalData';
import '../css/Carousel.css';
function Carousal({ objective, p }) {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h1 className='text-primary text-center'>
            {objective}
          </h1>
        </div>
        <div className="col-sm-6">
          <p className='text-justify'>
            {p}
          </p>
        </div>
      </div>
    </>
  )
}

export const Carousals = () => {
  return (
    <>
      <style>

      </style>
      <div id="carouselExampleControls" className="carousel slider" data-bs-ride="carousel">
        <div className="carousel-inner border-top border-bottom">
          {
            CarousalData.map((elem, ind) => {
              return (
                <div className={`carousel-item ${ind === 0 ? 'active' : ''}`} key={ind}>
                  <Carousal key={ind} objective={elem.objective} p={elem.p} className="d-block w-100" />
                </div>
              );
            })
          }
        </div>
        <button className="carousel-control-prev text-success" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};