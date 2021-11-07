import React from 'react';

import './collection-item.styles.scss'

//we don't need any state, so functional comp
const CollectionItem =  ({name, price, id, imageUrl}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
    </div>
)
export default CollectionItem;

//on hover show the add to cart div 
//show the price 
//show the name
