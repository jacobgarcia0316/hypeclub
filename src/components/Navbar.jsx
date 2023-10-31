import React from 'react';
import '../scss/css/navbar.css';
import { FiSearch } from 'react-icons/fi'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className='nav-left'>
        <label htmlFor='searchbar-input' className='searchbar'> <FiSearch className='searchbar-input' />
          <input className='searchbar-input' placeholder='Search'></input>
        </label>
      </div>
      <div className='nav-middle'>
      <h2 className='nav-header'>Hype Club</h2>
      </div>
      <div className='nav-right'>
        <li className="nav-item">inventory</li>
        <li className="nav-item">faq</li>
        <li className="nav-item">contact</li>
      </div>
    </nav>
    </>
  )
}
