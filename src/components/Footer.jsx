import React from 'react';
import '../scss/css/footer.css';

import {AiOutlineCopyrightCircle} from 'react-icons/ai'

export const Footer = () => {
  return (
    <>
    <header className='footer-title'>Hype Club</header>
      <div className='footer-main'>
        <section className='footer-section'>
          <h3 className='footer-header'>Trending</h3>
          <li className='footer-list'>Air Jordans</li>
          <li className='footer-list'>Nike Dunks</li>
          <li className='footer-list'>Toddler/Children</li>
          <li className='footer-list'>New Balance</li>
        </section>
        <section className='footer-section'>
          <h3 className='footer-header'>New Releases</h3>
          <li className='footer-list'>'Cherry' Jordan 12</li>
          <li className='footer-list'>'Royal Reimagined' Jordan 1</li>
          <li className='footer-list'>Jordan 5 'Midnight Navy'</li>
          <li className='footer-list'>Travis Scott Low 'Olive'</li>
        </section>
        <section className='footer-section'>
          <h3 className='footer-header'>Support</h3>
          <li className='footer-list'>My Account</li>
          <li className='footer-list'>Track My Order</li>
          <li className='footer-list'>Shippings & Returns</li>
          <li className='footer-list'>Sell Your Shoes</li>
        </section>
        <section className='footer-section'>
          <h3 className='footer-header'>About Us</h3>
          <li className='footer-list'>Locations</li>
          <li className='footer-list'>Media</li>
          <li className='footer-list'>Jobs</li>
          <li className='footer-list'>Instagram</li>
          <li className='footer-list'>TikTok</li>
        </section>
        <section className='footer-section'>
          <h3 className='footer-header'>Become a VIP Member</h3>
          <label htmlFor='email' className='email-label'>Enter Your Email Address
            <input name='email' className='email'></input>
          </label>
        </section>
      </div>
      <footer className='footer-bottom'>
        <section className='bottom-section'>
          <h3 className='bottom-header'><AiOutlineCopyrightCircle/>Hype Club Inc. 
          <span className='trademark'> All Rights Reserved</span>
          </h3>
        </section>
        <section className='bottom-section'>
          <li className='bottom-list'>Terms</li>
          <li className='bottom-list'>Privacy</li>
          <li className='bottom-list'>Privacy Options</li>
        </section>
      </footer>
    </>
  )
}
