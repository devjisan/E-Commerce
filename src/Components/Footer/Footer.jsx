import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsup_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 sm:gap-[50px] py-8 sm:py-12'>
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3 sm:gap-5">
        <img src={footer_logo} alt="Shopper Logo" className='w-12 sm:w-16' />
        <p className='text-[#383838] text-2xl sm:text-[46px] font-bold'>SHOPPER</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex list-none gap-4 sm:gap-[50px] text-base sm:text-xl">
        <li className='cursor-pointer hover:text-[#ff5a5a]'>Company</li>
        <li className='cursor-pointer hover:text-[#ff5a5a]'>Products</li>
        <li className='cursor-pointer hover:text-[#ff5a5a]'>Offices</li>
        <li className='cursor-pointer hover:text-[#ff5a5a]'>About</li>
        <li className='cursor-pointer hover:text-[#ff5a5a]'>Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex gap-3 sm:gap-5">
        <div className="p-2 sm:p-2.5 pb-1 sm:pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] hover:bg-[#e0e0e0] cursor-pointer">
          <img src={instagram_icon} alt="Instagram" className='w-6 sm:w-8' />
        </div>
        <div className="p-2 sm:p-2.5 pb-1 sm:pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] hover:bg-[#e0e0e0] cursor-pointer">
          <img src={pintester_icon} alt="Pinterest" className='w-6 sm:w-8' />
        </div>
        <div className="p-2 sm:p-2.5 pb-1 sm:pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] hover:bg-[#e0e0e0] cursor-pointer">
          <img src={whatsup_icon} alt="WhatsApp" className='w-6 sm:w-8' />
        </div>
      </div>

      {/* Copyright Section */}
      <div className='flex flex-col items-center gap-4 sm:gap-[30px] mb-4 sm:mb-[30px] text-[#1a1a1a] text-base sm:text-xl'>
        <hr className="w-[90%] sm:w-[80%] border-none rounded-[10px] h-[2px] sm:h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;