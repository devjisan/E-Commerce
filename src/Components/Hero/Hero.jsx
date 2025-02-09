import React from 'react';

import './Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="flex-1 flex flex-col justify-center gap-5 pl-44 leading-[1.1] pt-9">
                <h2 className='text-[#090909] text-[26px] font-semibold'>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex items-center gap-5">
                        <p className='text-[#171717] text-8xl font-bold'>new</p>
                        <img className='w-[105px]' src={hand_icon} alt="" />
                    </div>
                    <p className='text-[#171717] text-8xl font-bold'>collections</p>
                    <p className='text-[#171717] text-8xl font-bold'>for everyone</p>
                </div>
                <div className="flex justify-center items-center gap-3.5 w-[310px] h-[70px] rounded-[75px] mt-7 bg-[#ff4141] text-xl font-medium">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
};

export default Hero;