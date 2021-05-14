import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Gifts from '../gifts/Gifts.js';

const Home = () => {
  return (
    <div className="Home">

      <div className="top-banner">
          <img src="../../images/bnr-img.png" alt="" className="img-fluid" />
      </div>
      
      <div className="send-gift-sec">
          <div className="container">
              <div className="send-gift-wp">
                  <h1>Send Gift To Your Loved Ones</h1>
                  <p>Love that blooms forever</p>

                  <div className="day-wp">
                      <h2 className="date-wp">7-Feb</h2>
                      <img src="../../images/heart-dvdr.png" alt="" />
                      <h3 className="day-nm">Rose <br /> Day</h3>
                  </div>

                  <div className="gift-item-wp">
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/gift-img-1.png" alt="" />
                              <h2>RED ROSES</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/gift-img-2.png" alt="" />
                              <h2>Roses</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/gift-img-3.png" alt="" />
                              <h2>RED FLOWERS</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/gift-img-4.png" alt="" />
                              <h2>Premium ROSES</h2>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="more-gift-sec">
          <div className="container">
              <div className="more-gift-wp">
                  <div className="ttl-wp">
                      <h2 className="sec-ttl text-center">More Gifts for Loved One</h2>
                      <img src="image/heart-dvdr.png" alt="" className="dvdr-img" />
                  </div>

                  <div className="gift-item-wp">
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-1.png" alt="" />
                              <h2>Flowers</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-2.png" alt="" />
                              <h2>Cakes</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-3.png" alt="" />
                              <h2>Plants</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-4.png" alt="" />
                              <h2>Gifts</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-5.png" alt="" />
                              <h2>Combos</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-6.png" alt="" />
                              <h2>Hampers</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-7.png" alt="" />
                              <h2>Personalised</h2>
                          </a>
                      </div>
                      <div className="gift-item">
                          <a href="javascript:void(0);">
                              <img src="../../images/prod-8.png" alt="" />
                              <h2>Lamps</h2>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>



      <Gifts />
    </div>
  );
}

export default Home;
