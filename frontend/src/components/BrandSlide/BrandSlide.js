import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: false
    };
    return (
        <Slider {...settings}>
         <div >
            <img src="image/images/brand-01.png"  alt="brand-name" ></img>
         </div>
         <div >
            <img src="image/images/brand-02.png"  alt="brand-name" ></img>
         </div>
         <div >
            <img src="image/images/brand-03.png"  alt="brand-name" ></img>
         </div>
         <div>
            <img src="image/images/brand-04.png"  alt="brand-name" ></img>
         </div>
         <div>
            <img src="image/images/brand-05.png"  alt="brand-name" ></img>
         </div>
         <div>
            <img src="image/images/brand-06.png"  alt="brand-name" ></img>
         </div>
         <div>
            <img src="image/images/brand-07.png"  alt="brand-name" ></img>
         </div>
         <div>
            <img src="image/images/brand-08.png"  alt="brand-name" ></img>
         </div>
         <div>
            <img src="image/images/logo-oppo.png"  alt="brand-name" style={{marginTop:"12%"}}></img>
         </div>
         <div>
            <img src="image/images/logo-philips.png"  alt="brand-name" style={{marginTop:"12%"}}></img>
         </div>
         <div>
            <img src="image/images/logo-paypal.png"  alt="brand-name" style={{marginTop:"12%"}}></img>
         </div>
        </Slider>
    
    );
  }
}