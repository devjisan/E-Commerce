import React from 'react';
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} value={item} />
                })}
            </div>
        </div>
    );
};

export default NewCollections;