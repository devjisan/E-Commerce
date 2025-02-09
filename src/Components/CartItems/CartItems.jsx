import React, { useContext } from 'react'
import remove_icon from '../Assets/icons/cart_cross_icon.png'
import Context from '../../Context/Context'

const CartItems = () => {
    const { cartItems, removeFromCart } = useContext(Context);

    const totalAmount = () =>{
        return cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);
    }

    

    console.log(cartItems)
  return (
    <div className='my-[100px] mx-[170px] '>
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 px-0 text-[#454545] text-lg font-semibold'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p >Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-[0]' />
        {cartItems.map((item)=>{
                    if (item.quantity>0) {
                        return (
                            <div key={item.id}>
                                <div className='grid  grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 px-0 text-[#454545] text-lg font-medium'>
                                    <img className='h-[62px]' src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.new_price}</p>
                                    <button className='w-[64px] h-[50px] border-[2px] border-[#ebebeb] bg-white'>{item.quantity}</button>
                                    <p>${item.new_price*item.quantity}</p>
                                    <img className='w-[15px] h-[50px] cursor-pointer' src={remove_icon} onClick={()=>{removeFromCart(item)}} alt="" />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                    
                })}
            <div className="flex  my-[100px] mx-0">
                <div className="flex  flex-1 flex-col mr-[200px] gap-10">
                    <h1 className='font-semibold'>cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-[15px] px-0">
                            <p>Subtotal</p>
                            <p>${totalAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] px-0">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] px-0">
                            <h3>Total</h3>
                            <h3>${totalAmount()}</h3>
                        </div>
                    </div>
                    <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-base font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>
                <div className="flex-1 text-base font-medium">
                    <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                    <div className="w-[504px] mt-3.5 pl-5 h-[58px] bg-[#eaeaea]">
                        <input className='border-none outline-none bg-transparent text-base w-[330px] h-[50px]' type="text" placeholder='promo code' />
                        <button className='w-[170] h-[58px] text-base bg-black text-white cursor-pointer'>Submit</button>
                    </div>
                </div>
            </div>    
    </div>
  )
}

export default CartItems;