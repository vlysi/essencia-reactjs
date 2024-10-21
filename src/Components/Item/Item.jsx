import React from 'react';
import './Item.css';


const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name} className='item-image' />
      <p>{name}</p>
      <div className="item-prices">
        <span className="item-price-new">${new_price}</span>
        <span className="item-price-old">${old_price}</span>
      </div>
    </div>
  );
};

export default Item