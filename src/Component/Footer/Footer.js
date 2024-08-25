import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-left'>
            <img src={assets.logo} alt='' className='footer-logo'></img>
            <p>I assure you all that, it is the unique website to sell the most tasty and best food for the hungry people so please give a chance to show our taste.
            </p>
            <div className='footer-icons'>
                <img src={assets.linkedin_icon} alt=''></img>
                <img src={assets.twitter_icon} alt=''></img>
                <img src={assets.facebook_icon} alt=''></img>
            </div>
        </div>
        <div className='footer-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About-Us</li>
                <li>Delivery</li>
                <li>Privacy-Policy</li>
            </ul>
        </div>
        <div className='footer-right'>
            <h2>Give Us A Chance TO Serve You.</h2>
            <ul>
                <li>63-96-377-875</li>
                <li>6396dhruv@gmail.com</li>
            </ul>
        </div>
    </div>
      <hr />
      <p className='copyright'>Copyright 2024 @ Hungryhub.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
