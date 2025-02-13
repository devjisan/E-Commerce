import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className="w-[65%] h-[60vh] flex flex-col md:flex-row mx-auto px-4 sm:px-36 mb-36 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
            {/* Left Section */}
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-[#171717] text-4xl sm:text-6xl md:text-7xl font-semibold">Exclusive</h1>
                <h1 className="text-[#171717] text-4xl sm:text-6xl md:text-7xl font-semibold">Offers For You</h1>
                <p className="text-[#171717] text-lg sm:text-xl font-semibold mt-2">
                    ONLY ON BEST SELLERS PRODUCTS
                </p>
                <button className="w-48 sm:w-72 h-16 rounded-full bg-[#ff4141] text-white text-lg sm:text-xl font-medium mt-6">
                    Check Now
                </button>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex items-center justify-center md:justify-end pt-8 md:pt-0">
                <img src={exclusive_image} alt="Exclusive Offer" className="w-72 sm:w-96 md:w-[450px]" />
            </div>
        </div>
    );
};

export default Offers;
