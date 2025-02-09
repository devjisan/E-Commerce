import React from 'react';


const LoginSiginup = () => {
    return (
        <div className=" flex items-center justify-center min-h-screen bg-[#fce3fe] ">
            <div className=" w-xl h-[600px] bg-white m-auto py-5 px-14">
                <h1 className='mx-0 my-5 text-lg font-semibold'>Sign Up</h1>
                <div className="flex flex-col  gap-7 mt-8">
                    <input className='h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' type="text" placeholder='Your name' />
                    <input className='h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' type="email" placeholder='Email Address'/>
                    <input className='h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' type="password" placeholder='Password' />
                </div>
                <button className='w-full h-[72px] text-white bg-[#ff4141] mt-7 border-none text-2xl font-medium cursor-pointer overflow-auto'>Continue</button>
                <p className='mt-5 text-[#5c5c5c] text-lg font-medium'>Already have an account? <span className='text-[#ff4141] font-semibold'>Login hare</span></p>
                <div className="flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium">
                    <input type="checkbox"  />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSiginup;