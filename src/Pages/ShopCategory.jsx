import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import Context from '../Context/Context';

const ShopCategory = (props) => {
    const data = useContext(Context)
    console.log(props)

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {data.map((item, i) => {
                    console.log(item.category)
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