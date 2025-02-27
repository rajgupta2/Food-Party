import React from 'react';
import { productImageData } from  '../Models/productImageData.js';

export default function ProductImageList() {
  return (
    <>
       {
        productImageData.map((elem,ind)=>{
          return <img key={ind} src={elem.item_img} width={142} height={155} />
        })
      }
    </>
  )
}
