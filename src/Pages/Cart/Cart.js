import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../Context/Storecontext'
const Cart = () => {

  const {cartitem, food_list, removefromCart} = useContext(Storecontext);

  return (
    <div className='cart'>
    <div className='cart-items'>
      <div className='cart-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) =>{
        if(cartitem[item._id]>0)
        {
          return(
            <div className='cart-title cart-item'>
            <img src={item.image} alt=''></img>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartitem[item._id]}</p>
              <p>{item.price*cartitem[item._id]}</p>
              <p onClick={()=>removefromCart(item._id)} className='cross'>-</p>
            </div>
          )
        }
      })}
    </div> 
    </div>
  )
}

export default Cart
