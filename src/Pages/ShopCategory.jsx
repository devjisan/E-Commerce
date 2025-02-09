import React, { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import Context from '../Context/Context';

const ShopCategory = (props) => {
    const {all_product} = useContext(Context)

    return (
        <div className='shop-category'>
            <img className='block my-[30px] mx-auto w-[82%]' src={props.banner} alt="" />
            <div className="flex my-0 mx-[170px] justify-between items-center">
                <p>
                    <span className='text-xl rounded-[40px]'>Showing 1-12</span> out of 36 products
                </p>
                <div className="py-2.5 px-5 border border-[#888]">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="my-5 mx-[170px] grid grid-cols-[1fr_1fr_1fr] gap-y-[80px]">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} value={item} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default ShopCategory;