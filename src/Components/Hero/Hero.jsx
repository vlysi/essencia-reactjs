import React from 'react';
import './Hero.css';
import arrow_icon from '../../assets/arrow.png';
import hero_image from '../../assets/hero_image3.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS</h2>
        <div>
          <p>Spring</p>
          <p>Summer</p>
          <p>24-25</p>
        </div>
        <button className="hero-latest-btn">
          Shop Now
          <img src={arrow_icon} alt="" />
        </button>
      </div>
  
      <img className="hero-image" src={hero_image} alt="" />
      
    </div>
  )
}

export default Hero