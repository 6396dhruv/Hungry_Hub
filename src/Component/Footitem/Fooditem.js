import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext';
const Fooditem = ({id, name, price, description, image}) => {

  const {cartitem, addtoCart, removefromCart} = useContext(Storecontext)

  return (
    <div className='food-item'>
    <div className='food-item-container'>
        <img src={image} className='food-item-img' alt=''></img>
        {!cartitem[id]? <img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt=''></img>:
          <div className='item-counter'>
            <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt=''></img>
            <p>{cartitem[id]}</p>
            <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt=''></img>
          </div>
        }
    </div>
    <div className='food-item-info'>
        <div className='food-item-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt=''></img>
        </div>    
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
    </div>
      
    </div>
  )
}

export default Fooditem
