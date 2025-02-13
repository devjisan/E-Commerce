import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className="flex flex-col items-center gap-3 h-[90vh]">
            <h1 className="text-[#171717] text-4xl sm:text-5xl font-semibold">POPULAR IN WOMEN</h1>
            <hr className="w-48 h-1.5 rounded-lg bg-[#252525]" />
            <div className="mt-12 flex flex-wrap justify-center gap-8">
                {data_product.map((item, i) => (
                    <Item key={i} value={item} />
                ))}
            </div>
        </div>
    );
};

export default Popular;
