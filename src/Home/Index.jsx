import React from 'react';
import ProductImageList from './Components/ProductImageList';
import { Carousals } from './Components/Carousal';
import Restaurants from './Components/Restaurants';
export default function Index() {
  return (
    <>
            <ProductImageList />
            <Carousals/>
            <Restaurants/>
    </>
  )
}
