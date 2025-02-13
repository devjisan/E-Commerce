import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 py-10">
      <h1 className="text-[#171717] text-3xl md:text-[50px] font-semibold text-center">Related Products</h1>
      <hr className="w-32 md:w-[200px] h-1.5 rounded-md bg-[#252525]" />
      
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px] px-5">
        {data_product.map((item, i) => (
          <Item key={i} value={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
