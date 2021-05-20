import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Gifts from '../gifts/Gifts.js';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        infinite: true,
        asNavFor: '.testimonial-txt'
      };

      const settings2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        asNavFor: '.testimonial-img',
        dots: true
      };

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
     

      <Gifts />


    <div className="testimonial-sec">
        <div className="container">
            <div className="testimonial-wp">
            
                <div className="testimonial-img">
                    <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        <div>
                            <figure>
                                <img src="../../images/testimonial-img-1.png" alt="" />
                            </figure>
                        </div>
                        <div>                            
                            <figure>
                                <img src="../../images/testimonial-img-2.png" alt="" />
                            </figure>
                        </div>
                    </Slider>
                </div>
                <div className="testimonial-cont">                
                    <div className="ttl-wp">
                        <h2 className="sec-ttl text-center">Confession Stories</h2>
                        <img src="image/heart-dvdr-sht.png" alt="" className="dvdr-img" />
                    </div>
                    <Slider  {...settings2} asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)} className="testimonial-txt">
                        <div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            </p>
                            <a href="javascript:void(0);" className="read-btn">Read Aman's Love Story</a>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default Home;
