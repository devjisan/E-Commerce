import React, { useContext } from 'react'
import star_icon from "../Assets/icons/star_icon.png"
import star_dull_icon from "../Assets/icons/star_dull_icon.png"
import Context from '../../Context/Context'


const ProductDisplay = ({product}) => {
    const {addToCart} = useContext(Context)
  return (
    <div className='flex mx-[170px]  mb-10'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
            </div>
            <div className='flex flex-col my-0 mx-[70px]'>
                <img className='w-[586px] h-[700px]' src={product.image} alt="" />
            </div>
            <div>
                <h1 className='text-[#3d3d3d] text-[40px] font-bold '>{product.name}</h1>
                <div className='flex items-center mt-3 gap-[5px] text-[#1c1c1c] text-base'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='flex my-10 mx-0 gap-[30px] text-2xl font-bold'>
                    <div className='text-[#818181] line-through'>${product.old_price}</div>
                    <div className='text-[#ff4141]'>${product.new_price}</div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis beatae optio, labore atque assumenda.
                </div>
                <div>
                    <h1 className='mt-14 text-[#656565] text-[20px] font-semibold'>Select Size</h1>
                    <div className='flex my-[30px] mx-0 gap-5'>
                        <div className='py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                        <div className='py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                        <div className='py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                        <div className='py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                        <div className='py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product)}} className='py-5 px-10 w-[200px] text-base font-semibold text-white bg-[#FF4141] mb-10 border-none outline-none cursor-pointer'>ADD TO CART</button>
                <p className='mt-2.5'><span className='font-semibold'>Category :</span>Women , T-Shirt, Crop Top</p>
                <p className='mt-2.5'><span className='font-semibold'>Tags :</span>Modern , Latest</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay