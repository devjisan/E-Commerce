import React, { useState } from 'react'
import Context from './Context'
import all_product from '../Components/Assets/all_product'

const ContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (itemId) =>{

    setCartItems((prev)=>{
      const alreadyExist = prev.find((e)=> e.id === itemId.id)
      if (alreadyExist) {
        return prev.map((e)=> e.id === itemId.id? {...e, quantity: e.quantity +1} : e)
      }else{
        return [...prev, {...itemId, quantity: 1}]
      }
    })
  }

  const removeFromCart = (item) =>{
    setCartItems((prev)=>{
      return prev.map((i) => 
        i.id === item.id ? {...i, quantity:(i.quantity || 1) -1} :i)
        .filter((i) => i.quantity > 0);
    })
    
  }

  const getTotalCartItems = () =>{
    
    return cartItems.reduce((total, item) => total + item.quantity,0);
}



  const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartItems}
  return (
    <Context.Provider value= {contextValue}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider