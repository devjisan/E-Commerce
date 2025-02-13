import React, { useContext } from 'react';
import remove_icon from '../Assets/icons/cart_cross_icon.png';
import Context from '../../Context/Context';

const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(Context);

  const totalAmount = () => {
    return cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);
  };

  return (
    <div className='my-8 sm:my-[100px] mx-4 sm:mx-8 md:mx-[170px]'>
      {/* Cart Header */}
      <div className='grid grid-cols-2 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 sm:gap-[75px] py-5 px-0 text-[#454545] text-sm sm:text-lg font-semibold'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-[3px] bg-[#e2e2e2] border-[0]' />

      {/* Cart Items */}
      {cartItems.map((item) => {
        if (item.quantity > 0) {
          return (
            <div key={item.id}>
              <div className='grid grid-cols-2 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 sm:gap-[75px] py-5 px-0 text-[#454545] text-sm sm:text-lg font-medium'>
                <img className='h-[50px] sm:h-[62px]' src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className='w-[50px] sm:w-[64px] h-[40px] sm:h-[50px] border-[2px] border-[#ebebeb] bg-white'>
                  {item.quantity}
                </button>
                <p>${item.new_price * item.quantity}</p>
                <img
                  className='w-[12px] sm:w-[15px] h-[40px] sm:h-[50px] cursor-pointer'
                  src={remove_icon}
                  onClick={() => removeFromCart(item)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals and Promo Code */}
      <div className="flex flex-col sm:flex-row my-8 sm:my-[100px] mx-0 gap-8 sm:gap-0">
        {/* Cart Totals */}
        <div className="flex flex-1 flex-col sm:mr-[200px] gap-6 sm:gap-10">
          <h1 className='font-semibold text-lg sm:text-xl'>Cart Totals</h1>
          <div>
            <div className="flex justify-between py-3 sm:py-[15px] px-0">
              <p>Subtotal</p>
              <p>${totalAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-3 sm:py-[15px] px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-3 sm:py-[15px] px-0">
              <h3>Total</h3>
              <h3>${totalAmount()}</h3>
            </div>
          </div>
          <button className='w-full sm:w-[262px] h-[50px] sm:h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-base font-semibold cursor-pointer'>
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 text-sm sm:text-base font-medium">
          <p className='text-[#555]'>If you have a promo code, enter it here</p>
          <div className="w-full sm:w-[504px] mt-3.5 pl-5 h-[50px] sm:h-[58px] bg-[#eaeaea] flex items-center">
            <input
              className='border-none outline-none bg-transparent text-sm sm:text-base w-[70%] h-full'
              type="text"
              placeholder='Promo code'
            />
            <button className='w-[30%] sm:w-[170px] h-full text-sm sm:text-base bg-black text-white cursor-pointer'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;