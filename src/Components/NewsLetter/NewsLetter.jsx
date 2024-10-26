import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h2>Join  Our Newsletter</h2>
      <p>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives.</p>
      <div>
        <input type='email' placeholder='ENTER YOUR EMAIL ADDRESS HERE' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter