import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='my-8 sm:my-[120px] mx-4 sm:mx-8 md:mx-[170px]'>
      {/* Tabs */}
      <div className='flex'>
        <div className='flex items-center justify-center text-sm sm:text-base font-semibold w-[100px] sm:w-[171px] h-[50px] sm:h-[70px] border border-[#d0d0d0]'>
          Description
        </div>
        <div className='flex items-center justify-center text-sm sm:text-base font-semibold w-[100px] sm:w-[171px] h-[50px] sm:h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>
          Reviews
        </div>
      </div>

      {/* Description Content */}
      <div className='flex flex-col gap-4 sm:gap-6 border border-[#D0D0D0] p-6 sm:p-12 pb-8 sm:pb-[70px]'>
        <p className='text-sm sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur nam asperiores eveniet, saepe commodi provident sit. Facere, ullam commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, aliquam.
        </p>
        <p className='text-sm sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi fugit at saepe necessitatibus ea possimus consectetur ullam illum reiciendis!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;