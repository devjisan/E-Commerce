import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center mx-auto px-4 sm:px-36 mb-36 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-6 text-center">
            <h1 className="text-[#454545] text-3xl sm:text-5xl font-semibold">
                Get Exclusive Offers On Your Email
            </h1>
            <p className="text-[#454545] text-lg sm:text-xl">
                Subscribe to our newsletter and stay updated
            </p>
            <div className="flex items-center justify-between bg-white w-full max-w-2xl sm:max-w-3xl h-16 rounded-full border border-gray-300 px-6">
                <input 
                    type="email" 
                    placeholder="Your Email id" 
                    className="flex-1 bg-transparent outline-none text-gray-600 text-base sm:text-lg px-2"
                />
                <button className="w-32 sm:w-52 h-16 rounded-full bg-black text-white text-base sm:text-lg cursor-pointer">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;
