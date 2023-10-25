import React from 'react';
import './Footer.css';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { LuWallet } from 'react-icons/lu';
import { FiGift, FiMessageSquare } from 'react-icons/fi';
import { BsHeadset, BsFillBoxSeamFill, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='service mx-5 d-flex justify-content-between'>
                <div className='text-center'>
                    <div className='icones'><LiaShippingFastSolid /></div>
                    <h6>Free Shipping</h6>
                    <p style={{fontSize:"14px"}}>For all order over RS.1000</p>
                </div>
                <div className='text-center'>
                    <div className='icones'><BsFillBoxSeamFill /></div>
                    <h6>30 Days Return</h6>
                    <p style={{fontSize:"14px"}}>For An Exchange Product</p>
                </div>
                <div className='text-center'>
                    <div className='icones'><LuWallet /></div>
                    <h6>Secure Payment</h6>
                    <p style={{fontSize:"14px"}}>Payment Card Accpeted</p>
                </div>
                <div className='text-center'>
                    <div className='icones'><FiGift /></div>
                    <h6>Special Gift</h6>
                    <p style={{fontSize:"14px"}}>For First Order</p>
                </div>
                <div className='text-center'>
                    <div className='icones'><BsHeadset /></div>
                    <h6>Support 24/7</h6>
                    <p style={{fontSize:"14px"}}>Contact Us Anytime</p>
                </div>
            </div>
            <div className='footer-details row mt-5 mx-5'>
                <div className='footer-content col'>
                    <h5 className='mb-4'>Contact Us</h5>
                    <p className='text-start'>Classyshop Super Mega store<br></br>507-Union Trade Ipsum Doler <br></br>Centre France</p>
                    <Link href="mailto:hello@blocks.com" className='ms-0 mb-3'>hello@blocks.com</Link>
                    <h6 className='mt-4'>+91 6783840464</h6>
                    <div className='ico d-flex mt-3'>
                        <span className='pe-3'><FiMessageSquare /></span>
                        <p>Online Chat<br></br>Get Expert Help</p>
                    </div>
                </div>
                <div className='footer-content col'>
                    <h5 className='mb-4'>Need Help ?</h5>
                    <ul>
                        <a href="/privacy-policy"><li> privacy policy</li></a>
                        <a href="/Shipping-refund"><li>Shipping & Refund</li></a>
                        <a href="/aboutus"><li>About Us</li></a>
                        <a href="/contact"><li>Contact</li></a>
                    </ul>
                </div>
                <div className='footer-content col'>
                    <h5 className='mb-4'>Information</h5>
                    <ul>
                        <a href='/policy-buyer'><li>Policy for Buyer</li></a>
                        <a href='/policy-seller'><li> policy for Seller</li></a>
                        <a href='/size-chart'><li>Size Chart</li></a>
                       <a href="/FAQ"><li>FAQs</li></a> 
                        
                    </ul>
                </div>
                <div className='footer-content col'>
                    <h5 className='mb-4'>Get Our Last Update !</h5>
                    <p className='text-start'>Subscribe to latest newsletter to get news about special discounts.</p>
                    <input className='inp ps-2 mt-2' placeholder='Email'></input>
                    <br></br>
                    <button className='button mt-2'>Subscribe</button>
                </div>

            </div>
            <div className='foot mt-3 mx-5 mb-3 d-flex'>
                <span><FaFacebook /></span>
                <span><BsInstagram /></span>
                <span><BsYoutube /></span>
                <span><FaTwitter /></span>
                <p className='mt-2'> © 2023, Classyshop Demo Store</p>
                <div className='bankcard '>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.Vs62kDq0ibOSf4SeMr9nIwHaC0&pid=Api&P=0&h=180" alt="visa" ></img>
                    <img src="https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png" alt="visa" ></img>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.SOrqtMs1uYMm4lpxR5pdGQHaFO&pid=Api&P=0&h=180" alt="card"></img>
                    <img src="https://bitexpert.io/wp-content/uploads/2018/07/AmericanExpress.jpg" alt='card'></img>
                    <img src='https://logodix.com/logo/780308.png' alt='card'></img>
                </div>
            </div>

        </>
    )
}

export default Footer