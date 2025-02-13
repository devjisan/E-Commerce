import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(Context);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-md bg-white">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2.5">
        <img src={logo} alt="Shopper Logo" className="w-10 h-10 md:w-12 md:h-12" />
        <span className="text-2xl md:text-3xl font-semibold text-[#171717]">SHOPPER</span>
      </Link>

      {/* Navigation Menu */}
      <ul className="hidden md:flex items-center gap-8 list-none text-lg font-medium text-[#626262]">
        {['shop', 'mens', 'womans', 'kids'].map((item) => (
          <li key={item} className="relative">
            <Link 
              to={`/${item === 'shop' ? '' : item}`} 
              onClick={() => setMenu(item)} 
              className={`hover:text-black ${menu === item ? 'text-black' : 'text-[#626262]'}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3/4 h-[3px] bg-[#ff4141] rounded"></div>}
          </li>
        ))}
      </ul>

      {/* Login & Cart Section */}
      <div className="flex items-center gap-6">
        <Link to="/login">
          <button className="hidden md:block w-32 h-10 border border-[#515151] rounded-full text-base font-medium bg-white hover:bg-gray-100 transition">
            Login
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center text-xs text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
            {getTotalCartItems()}
          </span>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
