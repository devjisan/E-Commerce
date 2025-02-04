import React from 'react'
import Context from './Context'
import all_product from '../Components/Assets/all_product'

const ContextProvider = ({children}) => {
  return (
    <Context.Provider value= {all_product}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider