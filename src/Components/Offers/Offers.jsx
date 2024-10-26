import React from 'react';
import './Offers.css';
import exclusive_image from '../../assets/exclusive_image.jpg'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h2>SPECIAL PRICES</h2> 
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers