import React from 'react';

import { Link } from 'react-router-dom';

const Item = (props) => {
    const item = props.value;
    return (
        <div className='w-[350px] hover:scale-105 transform duration-500'>
            <Link to={`/product/${item.id}`}><img onClick={()=>{window.scrollTo(0,0)}} src={item.image} alt="" /></Link>
            <p className='my-1.5 mx-0'>{item.name}</p>
            <div className="flex gap-5">
                <div className="text-[#374151] text-lg font-semibold">
                    ${item.new_price}
                </div>
                <div className="text-[#8c8c8c] text-lg font-medium line-through">
                    ${item.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;