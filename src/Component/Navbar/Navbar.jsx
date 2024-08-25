import React, { useState } from 'react'
import './Navbar.css'
import {assets,} from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setLogin}) => {

    const [menu, setMenu]  = useState("Home")

  return (
    <div className='navbar'>
        <Link to={"/home"}><img src={assets.logo} alt='logo' className='logo'></img></Link>
            <ul className='menu'>
            <li onClick={() =>setMenu("Home")} className={menu === "Home"? "active":""}>Home</li>
            <li onClick={() =>setMenu("Menu")} className={menu === "Menu"? "active":""}>Menu</li>
            <li onClick={() =>setMenu("Mobile-App")} className={menu === "Mobile-App"? "active":""}>Mobile-App</li>
            <li onClick={() =>setMenu("Contact-Us")} className={menu === "Contact-Us"? "active":""}>Contact-Us</li>
            </ul>
            <div className='right'>
                <img src={assets.search_icon} alt='search'></img>
                <div className='search'>
                    <Link to={"/cart"}> <img  src={assets.basket_icon} alt='bascet'></img></Link>
                    <div className='dot'></div> 
                </div>
                <button onClick={()=>setLogin(true)} className='btn'>Sign In</button>
            </div>
    </div>
  )
}

export default Navbar
