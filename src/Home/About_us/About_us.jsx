import React from 'react'
import { CarousalData } from '../Components/CarousalData';
import './about_us.css';
const Box = ({ objective, p }) => {
  return (
    <div className="row about">
      <div className="col-sm-6">
        <h1 className='text-success text-center'>
          {objective}
        </h1>
      </div>
      <div className="col-sm-6">
        <p className='text-justify'>
          {p}
        </p>
      </div>
    </div>
  )
}
export default function About_us() {
  return (
    <>
     <div className="container">
     {
        CarousalData.map((elem,ind)=>{
            return <Box key={ind} objective={elem.objective} p={elem.p}/>;
        })
      }
     </div>

    </>
  )
}
