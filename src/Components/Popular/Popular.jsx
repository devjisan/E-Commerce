import React from 'react';
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item';
const Popular = () => {
    console.log(data_product)
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} value={item} />
                })}
            </div>
        </div>
    );
};

export default Popular;