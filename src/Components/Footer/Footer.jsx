import React from 'react';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsup_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[50px] '>
            <div className="flex items-center gap-5">
                <img src={footer_logo} alt="" />
                <p className='text-[#383838] text-[46px] font-bold'>SHOPPER</p>
            </div>
            <ul className="flex list-none gap-[50px] text-xl ">
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className="flex gap-5">
                <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
                    <img src={whatsup_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-[30px] mb-[30px] text-[#1a1a1a] text-xl'>
                <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]"/>
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;