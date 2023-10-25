import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiTwotoneStar, AiOutlineHeart } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/CartSlice";
import { useNavigate } from "react-router-dom";
import { details } from "../../features/productdetailSlice";
import { addwhishlist } from "../../features/WhislistSlice";
import dealproduct from "../../productmodel/dealproduct";

export const DealProduct = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 6
    };

    const handlesubmit = (product) => {
        dispatch(addToCart(product))
        navigate("/cart")
    }
    const handledetails = (product) => {
        dispatch(details(product))
        navigate("/productDetails")
      }
      const handlewhishlist = (product) => {
        dispatch(addwhishlist(product))
        navigate("/whishlist")
      }
    

    return (


        <div className="ps-5 pe-5" >
         
                    <Slider {...settings}>
                        {dealproduct?.map((product) => (
                            <div className='product row mt-3 ms-2 me-0' key={product.id}>
                                <div className="card position-relative p-0" style={{ width: "14rem" }}>
                                    <img src={product.img} className='img-fluid' style={{maxHeight:"250px"}} alt={product.name}></img>
                                    <div className="card-body">
                                        <p className="mb-0" onClick={()=>handledetails(product)}>{product.name} </p>
                                        <div className='rating'>
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                        </div>
                                        <p className="card-text text-start">
                                        ₹{product.price}
                                        </p>
                                    </div>
                                    <div className='short position-absolute' style={{cursor:"pointer"}}>
                                        <span className='d-block'><AiOutlineHeart onClick={()=>handlewhishlist(product)} /></span>
                                        <span className='d-block'><BsCart3 onClick={() => handlesubmit(product)} /></span>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Slider>
                
            
        </div>



    );
}




