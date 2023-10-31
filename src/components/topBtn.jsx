import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import '../scss/css/topBtn.css';


export const ToTop = () => {
  return (
    <div>
      <div/>
      <ScrollToTop 
      smooth
      top={500}
      className='toTop'
      />
    </div>
  )
}