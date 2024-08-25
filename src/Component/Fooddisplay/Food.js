import React, { useContext } from 'react'
import './Food.css'
import { Storecontext } from '../../Context/Storecontext'
// import { food_list } from '../../assets/assets'
import Fooditem from '../Footitem/Fooditem'
const Food = ({category}) => {

    const {food_list} = useContext(Storecontext)
 
  return (
    <div className='food' id='food'>
        <h2>Top dishes for you.</h2>
        <div className='display-list'>
        {food_list.map((item, index) =>{

          if(category==="All" || category===item.category){
            return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}

        </div>
      
    </div>
  )
}

export default Food
