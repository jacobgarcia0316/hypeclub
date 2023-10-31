import React from 'react';
import '../scss/css/page3.css';

import { active } from '../assets/active';

export const Page3 = () => {

  return (
    <div className='page3'>
    <h2 className='page3-header'>Active</h2>
    <div className='page3-container'>
        {active.slice(4, 10).map(activeItem => 
            <div className='active-card'>
                <img src={activeItem.imageURL} className='active-image' alt='Active'></img>
                <h2 className='active-name'>{activeItem.name}</h2>
                <h3 className='active-price'>${activeItem.price}</h3>
                <button className='shoe-btn'>Shop Now</button>
            </div>
            
            )}
    </div>
    <button className='active-btn'>Shop all active</button>

    </div>
  )
}
