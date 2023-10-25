import React, { useEffect } from 'react'
import './cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseCart, RemoveFromCart, addToCart, getTotal } from '../../features/CartSlice';
import { getallcarts } from '../../features/CheckoutSlice';
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate =useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch])

    function removeitem(cartItem) {
        dispatch(RemoveFromCart(cartItem))
    }

    function Decreasecartitem(cartItem) {
        dispatch(DecreaseCart(cartItem))
    }
    function Increasecartitem(cartItem) {
        dispatch(addToCart(cartItem))
    }

    function handlesumbit(cart){
           dispatch(getallcarts(cart))
            navigate("/checkout")
    }     
     
    return (
        <>
            {cart.CartItems.length === 0 ? <><div className='cart'>
                <div className='d-flex justify-content-between'>
                    <h4>Your Shipping Cart</h4>
                    <a href='/'>Home</a>
                </div>
            </div>
                <div className='align-items-center text-center'><h3>Your cart is Empty</h3><BsArrowLeft className='me-2' /><Link to="/product" style={{ textDecoration: "none" }}>Continue Shopping</Link></div>
            </> : <>
                <div className='cart'>
                    <div className='d-flex justify-content-between'>
                        <h4>Your Shipping Cart</h4>
                        <a href='/'>Home</a>
                    </div>
                </div>
                <div className=' mx-5'>
                    <div className='row py-5'>
                        <div className='col'>
                            <div className='cart-title d-flex justify-content-between'>
                                <h6 className='ps-4 col-6'>PRODUCT</h6>
                                <h6 className='col-3 text-center'>QUANTITY</h6>
                                <h6 className='pe-4 col-3 text-end'>TOTAL</h6>
                            </div>

                            {cart.CartItems?.map(cartItem => (
                               
                                <div className='cart-product col' key={cartItem.id}>
                                    <div className='d-flex justify-content-between' >
                                        <div className='cart-detail d-flex py-3 col-6'>
                                            <img src={cartItem.img} alt={cartItem.name} />
                                            <div className='cart-product-detail'>
                                                <h6 className='mb-1'>Boat</h6>
                                                <p className='mb-1'>{cartItem.name}</p>
                                                <p className='price mb-0'>₹ {cartItem.price}</p>
                                            </div>
                                        </div>
                                        <div className='quantity-detail d-flex pt-5 pb-5 col-3' style={{ paddingLeft: "5%" }}>
                                            <span className='quantity-count px-3 pt-2 d-flex justify-content-around'>
                                                <p className='mb-0'><GrFormSubtract onClick={() => Decreasecartitem(cartItem)} /></p>
                                                <p className='ps-5 pe-5'>{cartItem.CartQuantity}</p>
                                                <p className='mb-0'><IoMdAdd onClick={() => Increasecartitem(cartItem)} /></p>
                                            </span>
                                            <span><RiDeleteBinLine className='delete-btn' onClick={() => removeitem(cartItem)} /></span>
                                        </div>

                                        <div className='total-price pt-5 col-3 text-end'>
                                            <p className='pe-4'>₹ {cartItem.price*cartItem.CartQuantity}</p>
                                        </div>
                                    </div>
                                </div>
                             
                            ))}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='cart-extra-detail d-flex justify-content-end'>
                            <div className='sub-total'>
                                <span className='d-flex'><h6 className='fs-4'>Sub Total </h6><b className='ps-3 pt-1'> Rs.{cart.CartTotalAmount}</b></span>
                                <p className='mt-2'>Taxes and shipping calculated at checkout</p>
                                <button onClick={()=> handlesumbit(cart.CartItems)}>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            }

        </>
    )
}

export default Cart