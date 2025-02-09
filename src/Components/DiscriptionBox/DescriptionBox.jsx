import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[170px]'>
      <div className='flex'>
        <div className='flex items-center justify-center text-base font-semibold w-[171px] h-[70px] border border-[#d0d0d0]'>Description</div>
        <div className='flex items-center justify-center text-base font-semibold w-[171px] h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>Reviews</div>
      </div>
      <div className='flex flex-col gap-6 border border-[#D0D0D0] p-12 pb-[70px]'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur nam asperiores eveniet, saepe commodi provident sit. Facere, ullam commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi fugit at saepe necessitatibus ea possimus consectetur ullam illum reiciendis!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox