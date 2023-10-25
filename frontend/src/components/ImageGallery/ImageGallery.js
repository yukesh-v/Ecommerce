import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ImageGallery extends Component {
 
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
     
        <Slider ref={slider => (this.slider = slider)} {...settings}>
         <div className=" ms-3 me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/1_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/10_b4c51e27-ac3b-470a-a41d-5d7789502b61_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/2_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/3_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/4_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/5_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/6_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         <div className="me-0 w-75">
            <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/8_308X308@2x.jpg?v=1690461480" className="img-fluid rounded" alt=""></img>
         </div>
         
        </Slider>
    
    );
  }
}
