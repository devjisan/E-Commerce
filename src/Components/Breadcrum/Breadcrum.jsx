import React from 'react';
import arrow_icon from '..//Assets/icons/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='flex items-center gap-1 sm:gap-2 text-[#5e5e5e] text-sm sm:text-base font-semibold my-8 sm:my-[60px] mx-4 sm:mx-8 md:mx-[170px] capitalize'>
      HOME <img src={arrow_icon} alt="" className='w-2 h-2 sm:w-3 sm:h-3' /> SHOP
      <img src={arrow_icon} alt="" className='w-2 h-2 sm:w-3 sm:h-3' />
      {product.category} <img src={arrow_icon} alt="" className='w-2 h-2 sm:w-3 sm:h-3' />
      {product.name}
    </div>
  );
};

export default Breadcrum;