import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-2.5 h-[90vh] '>
        <h1 className='text-[#171717] text-[50px] font-semibold'>Related Products</h1>
        <hr  className='w-[200px] h-1.5 rounded-[10px] bg-[#252525]'/>
        <div className='mt-[50px] flex  gap-[30px]'>
            {data_product.map((item, i)=>{
                return <Item key={i} value={item}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts