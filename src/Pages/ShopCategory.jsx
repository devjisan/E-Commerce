import React, { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import Context from '../Context/Context';

const ShopCategory = ({ banner, category }) => {
    const { all_product } = useContext(Context);

    return (
        <div className="shop-category">
            <img className="block my-8 mx-auto w-[90%] md:w-[82%]" src={banner} alt="Category Banner" />
            
            {/* Sorting and Product Count */}
            <div className="flex flex-col md:flex-row my-0 mx-5 md:mx-[170px] justify-between items-center gap-4">
                <p className="text-lg md:text-xl">Showing 1-12 out of 36 products</p>
                <div className="flex items-center gap-2 py-2.5 px-5 border border-gray-400 rounded-md cursor-pointer">
                    Sort by 
                    <img src={dropdown_icon} alt="Dropdown Icon" className="w-4 h-4" />
                </div>
            </div>

            {/* Products Grid */}
            <div className="my-5 mx-5 md:mx-[170px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {all_product
                    .filter(item => category === item.category)
                    .map((item, i) => <Item key={i} value={item} />)
                }
            </div>
        </div>
    );
};

export default ShopCategory;
