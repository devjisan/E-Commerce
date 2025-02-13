import React from 'react';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='flex flex-col items-center gap-2 mb-24'>
            <h1 className='text-[#171717] text-4xl sm:text-5xl font-semibold'>NEW COLLECTIONS</h1>
            <hr className='w-48 h-1.5 rounded-lg bg-[#252525]' />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {new_collection.map((item, i) => (
                    <Item key={i} value={item} />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
