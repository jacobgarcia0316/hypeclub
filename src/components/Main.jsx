import React from 'react';
import '../scss/css/main.css';
import { Navbar } from './Navbar';

export const Main = () => {
  return (
    <>
    <Navbar />
    <div></div>
    {/* <h2 className='header'>Hype Club</h2> */}
    <div className='main-container'>
        <div className='main-left'>
            <h3 className='main-header1'>KAWS x Jordan 4</h3>
            <h4 className='main-header2'>KAWS Black<br/> 2023</h4>
            <button className='main-btn'>Shop Now</button>
        </div>
        <div className='main-right'>
        </div>
    </div>
    </>
  )
}
