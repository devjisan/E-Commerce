import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import { Route, Routes } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSiginup from './Pages/LoginSiginup'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
       <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womans' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSiginup />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App