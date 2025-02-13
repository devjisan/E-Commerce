import React from 'react';
import './Hero.css';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      {/* Left Section - Text Content */}
      <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-5 pl-4 sm:pl-8 md:pl-44 leading-[1.1] pt-4 sm:pt-9">
        <h2 className='text-[#090909] text-lg sm:text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-3 sm:gap-5">
            <p className='text-[#171717] text-4xl sm:text-6xl md:text-8xl font-bold'>new</p>
            <img className='w-[50px] sm:w-[80px] md:w-[105px]' src={hand_icon} alt="Hand Icon" />
          </div>
          <p className='text-[#171717] text-4xl sm:text-6xl md:text-8xl font-bold'>collections</p>
          <p className='text-[#171717] text-4xl sm:text-6xl md:text-8xl font-bold'>for everyone</p>
        </div>
        <div className="flex justify-center items-center gap-2 sm:gap-3.5 w-[200px] sm:w-[310px] h-[50px] sm:h-[70px] rounded-[50px] sm:rounded-[75px] mt-4 sm:mt-7 bg-[#ff4141] text-base sm:text-xl font-medium cursor-pointer hover:bg-[#e63939] transition-colors duration-300">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="Arrow Icon" className='w-4 sm:w-6' />
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="flex-1 flex items-center justify-center">
        <img src={hero_image} alt="Hero" className='w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]' />
      </div>
    </div>
  );
};

export default Hero;