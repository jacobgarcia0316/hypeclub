import React from 'react';
import '../scss/css/page2.css';

import { products } from '../assets/shoes';

export const Page2 = () => {

  return (
    <div className='page2'>
    <h2 className='page2-header'>Popular</h2>
    <div className='page2-container'>
        {products.slice(10, 18).map(product => 
        <div className='shoe-card'>
          <h4 className='id' style={{display:'none'}}>{product.id}</h4>
            <img src={product.grid_picture_url} alt='Shoe' className='shoe-image'></img>
            <h2 className='shoe-name'>{product.name}</h2>
            <h3 className='shoe-price'>${product.price}</h3>
            <button className='shoe-btn'>Buy Now</button>
        </div>
        )}
    </div>
        <button className='footwear-btn'>Shop new releases</button>
    </div>
  )

}
