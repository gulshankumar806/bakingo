import React from 'react';
import './Gifts.css';
import GiftItem from './GiftItem.js';

const Gift = () => {
  return (      
    
    <div className="more-gift-sec">
        <div className="container">
            <div className="more-gift-wp">
                <div className="ttl-wp">
                    <h2 className="sec-ttl text-center">More Gifts for Loved One</h2>
                    <img src="image/heart-dvdr.png" alt="" className="dvdr-img" />
                </div>
                
                    
                <GiftItem />

            </div>
        </div>
    </div>

  );
}

export default Gift;
