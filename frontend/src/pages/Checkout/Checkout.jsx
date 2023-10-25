import React from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'


function Checkout() {

    const checkout = useSelector((state) => state.checkout);
    const cart = useSelector((state) => state.cart);
    return (
        <>
            <div className='checkout'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-6 mt-5'>
                        <div className='checkout-detail'>
                            <h4>Smart Shopping Store</h4>
                            <div className='checkout-form mt-4'>
                                <h5>Contact</h5>
                                <input className='contact-info' type='tel' placeholder='Email Or Mobile Number' /><br />
                                <div className='d-flex align-items-center'>
                                    <input className='check' type='checkbox' />
                                    <label className="ms-2">Email me with new offers</label>
                                </div>

                            </div>
                            <div className='checkout-form mt-4'>
                                <h5>Delivery</h5>
                                <input className='contact-info' type='tel' placeholder='Country Or State' /><br />
                                <div className='d-flex'>
                                    <input type='text' placeholder='First Name' className='contact-name' />
                                    <input type='text' placeholder='Last Name' className='contact-name ' style={{ marginLeft: "4rem" }} />
                                </div>
                                <input className='contact-info mb-3' type='address' placeholder='Address' /><br />
                                <div className='d-flex'>
                                    <input type='text' placeholder='City' className='contact-location' style={{width:"28.5%"}}/>
                                    <input type='text' placeholder='State' className='contact-location ms-3' style={{width:"28.5%"}}/>
                                    <input type='text' placeholder='Pin Code' className='contact-location ms-3' style={{width:"28.5%"}}/>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <input className='check' type='checkbox' />
                                    <label className="ms-2">Save this information for next order</label>
                                </div>

                                <div className='checkout-form mt-4'>
                                    <h5>Shipping method</h5>
                                    <div className='delivery-time mb-2'>

                                        <input className='mode' type='radio' />

                                        <label>Economy</label><br />
                                        <p className='mb-0'>5 to 8 business days</p>

                                    </div>
                                    <div className='delivery-time'>
                                        <input type='radio' className='mode' />
                                        <label>Standard</label>
                                        <p className='mb-0'>2 to 5 business days</p>
                                    </div>
                                </div>

                            </div>
                            <div className='checkout-form mt-4 ps-5' style={{backgroundColor:"#e5e5e5"}}>
                                <h5>Payment</h5>
                                <p>All transactions are secure and encrypted.</p>
                                <input className='contact-info' type='tel' placeholder='Card Number' /><br />
                                <div className='d-flex'>
                                    <input type='text' placeholder='Expires (mm/yy)' className='contact-name' />
                                    <input type='text' placeholder='CVV' className='contact-name' style={{ marginLeft: "4rem" }} />
                                </div>
                                <input className='contact-info mb-2' type='address' placeholder='Name Of The Card' /><br />
                                <div className='d-flex align-items-center'>
                                    <input className='check' type='checkbox' />
                                    <label className="ms-2">use shipping address us billing address</label>
                                </div>
                            </div>
                            <button className='pay-btn'>Pay Now</button>
                        </div>
                    </div>
                    <div className='checkout-summary col-6 mt-5'>
                        <div className='checkout-product mt-4'>
                            {checkout.Checkoutproduct[0].map((cartItem) => (

                                    <div className='d-flex ms-1 mb-3' key={cartItem.id}>

                                        <img src={cartItem.img} alt='product-img' style={{ width: "12%", height: "12%" }} />
                                    <div className='mt-2 ps-3'>
                                        <h6>{cartItem.name}</h6>

                                        <p className='mt-2 mb-0'>Quantity: {cartItem.CartQuantity}</p>
                                    <p className='mt-1 mb-0'>Rs.₹{cartItem.price}</p>
                                    </div>
        
                                    
                                </div>
                            ))}
                            <div className='checkout-price d-flex justify-content-between pt-4'>
                                <div>
                                    <p>Sub total</p>
                                    <p>Shipping</p>
                                    <h6>Total</h6>
                                </div>
                                <div className='pe-5 me-5'>
                                    <p>Rs.₹{cart.CartTotalAmount}</p>
                                    <p>Free</p>
                                    <h6>RS.₹{cart.CartTotalAmount}</h6>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout