import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='header-content'>
        <h2>Grab your <span className='span'>favorite food.</span></h2>
        <p>Choose from a diverse menu of items featuring a hygenic and tasty food from us. We will assure you will
        get the favorable discounts.</p>
        <button className='btn'> View More</button>
      </div>
    </div>
  )
}

export default Header
