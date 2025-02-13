import React from 'react';

const LoginSignup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#fce3fe] px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
                <div className="flex flex-col gap-5 mt-6">
                    <input 
                        className="h-12 w-full px-4 border border-gray-300 rounded-md outline-none text-gray-700 text-lg" 
                        type="text" 
                        placeholder="Your name" 
                    />
                    <input 
                        className="h-12 w-full px-4 border border-gray-300 rounded-md outline-none text-gray-700 text-lg" 
                        type="email" 
                        placeholder="Email Address" 
                    />
                    <input 
                        className="h-12 w-full px-4 border border-gray-300 rounded-md outline-none text-gray-700 text-lg" 
                        type="password" 
                        placeholder="Password" 
                    />
                </div>
                <button className="w-full h-12 text-white bg-[#ff4141] mt-6 rounded-md text-xl font-medium cursor-pointer transition duration-300 hover:bg-[#e03a3a]">
                    Continue
                </button>
                <p className="mt-4 text-gray-600 text-center text-lg">
                    Already have an account? 
                    <span className="text-[#ff4141] font-semibold cursor-pointer ml-1 hover:underline">Login here</span>
                </p>
                <div className="flex items-start mt-4 gap-3 text-gray-600 text-lg">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-sm">By continuing, I agree to the <span className="font-semibold">terms of use</span> & <span className="font-semibold">privacy policy</span></p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
