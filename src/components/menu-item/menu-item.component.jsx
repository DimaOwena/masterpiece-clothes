import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss'
//using functional component since I don't need state

// const HatsPage
const MenuItem = ({ title, imgUrl, size}) => {
   const navigate = useNavigate();
   return  <div 
        className={`menu-item ${size}`}
        onClick={() => navigate('shop')}
    > 
        <div className='background-image' style={{backgroundImage:`url(${imgUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
}


export default MenuItem;