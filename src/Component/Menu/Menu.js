import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = ({category, setCategory}) => {

   

  return (
    <div className='explore-menu' id='menu'>
    <h1>Explore Our Menu Itmes.</h1>
    <p className='menu-text'>choose from a diverse manu featuring items of dishes. our only mission is to satisfy and elevate your
    experience, delicious meal at a time.</p>
    <div className='menu-list'>
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='list-item'> 
                    <img className={category ===item.menu_name?"active-one": ""} src={item.menu_image} alt=''></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default Menu
