import React from 'react'
import './Whishlist.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { HiXMark } from 'react-icons/hi2'
import {BsArrowLeft} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { details } from '../../features/productdetailSlice';
import { removewhishlist } from '../../features/WhislistSlice'

const Whishlist = () => {

  const Whishlist = useSelector((state) => state.Whishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handledetails = (Item) => {
    dispatch(details(Item))
    navigate("/productDetails")
  }
  const handlewhislist = (Item) => {
    dispatch(removewhishlist(Item))
  }
  return (
    <>
      {Whishlist.whishlistItem.length === 0?<>
        <div className='product-title'>
            <div className='d-flex justify-content-between'>
              <h4>Whishlist</h4>
              <a href='/'>Home</a>
            </div>
          </div>
          <div className='align-items-center text-center mt-5'><h3>Your Whishlist is Empty</h3><BsArrowLeft className='me-2' /><a href="/product" style={{ textDecoration: "none" }}>Continue Shopping</a></div>
          </>:<>
          <div className='product-title'>
            <div className='d-flex justify-content-between'>
              <h4>Whishlist</h4>
              <a href='/'>Home</a>
            </div>
          </div>
          <div className='whishlist mt-5 mx-5'>
          <div className='product row mt-1 ms-0 me-0'>
                {Whishlist.whishlistItem?.map(Item => (

                  <div class="card position-relative me-2 mb-2 p-0" key={Item.id} style={{ width: "14rem" }}>
                    <img src={Item.img} className='img-fluid rounded' alt={Item.name}></img>
                    <div class="card-body">
                      <p className='mb-0' onClick={() => handledetails(Item)}> {Item.name} </p>
                      <div className='rating'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                      <p class="card-text text-start">
                        ₹{Item.price}
                      </p>
                    </div>
                    <div className='short position-absolute' style={{ cursor: 'pointer' }}>
                      <span className='d-block'><HiXMark onClick={()=> handlewhislist(Item)}/></span>
                    </div>
                  </div>
                ))}
              </div>
              </div>
              </>
      }
    </>
  )
}

export default Whishlist