import React from 'react';
import './menu-item.styles.scss'
//using functional component since I don't need state

const MenuItem = ({ title, imgUrl }) => (
    <div className='menu-item' style={{backgroundImage:`url(${imgUrl})`}}>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default MenuItem;