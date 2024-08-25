import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext(null);

const StorecontextProvider = (props) =>{

    const [cartitem, setCartitem] = useState({});

    const addtoCart = (itemId)=>{
        if(!cartitem[itemId]){
            setCartitem((prev) =>({...prev,[itemId]:1}))
        }else{
            setCartitem((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removefromCart = (itemId) =>{
        setCartitem((prev) =>({...prev,[itemId]:prev[itemId]-1}))
        console.log(removefromCart)
    }

    useEffect(() =>{
        console.log(cartitem);
    },[cartitem])

    const contextValue = {
        food_list,
        cartitem,
        setCartitem,
        addtoCart,
        removefromCart
    }

    return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default StorecontextProvider