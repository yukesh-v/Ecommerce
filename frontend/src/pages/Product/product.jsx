import React, { useState } from 'react'
import './product.css';
import { AiTwotoneStar, AiOutlineHeart } from 'react-icons/ai'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { BsCart3 } from 'react-icons/bs'
import { useGetAllProductsQuery } from '../../features/productApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../features/CartSlice';
import { details } from '../../features/productdetailSlice';
import { addwhishlist } from '../../features/WhislistSlice';

const Product = () => {

  const [isactive, setisactive] = useState(true);
  const [active, setactive] = useState(true);
  const [dropmenu, setdropmenu] = useState(true);
  const [size, setsize] = useState(true);
  const { data, error, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleaddcart = (product) => {
    dispatch(addToCart(product))
    navigate("/cart")
  }
  const handledetails = (product) => {
    dispatch(details(product))
    navigate("/productDetails")
  }

  const handlewhishlist = (product)=>{
    dispatch(addwhishlist(product))
    navigate("/whishlist")
  }

  return (
    <div>

      {isLoading ? <p>loading....</p> : error ? <p>error in the file</p> :
        <>
          <div className='product-title'>
            <div className='d-flex justify-content-between'>
              <h4>Products</h4>
              <a href='/'>Home</a>
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className='col-2 mt-1'>
              <div className='product-facets'>
                <h6>Filters:</h6>
                <div className='dropmenu' >
                  <div className='dropdown-btn align-items-center' onClick={() => setisactive(!isactive)}>Availability{isactive ? <RiArrowUpSLine className='fs-5' /> : <RiArrowDownSLine className='fs-5' />}</div>
                  {isactive && <div className='dropmenu-content'>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox'></input>
                      <label>In Stock</label>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox'></input><label>Out Of Stock</label>
                    </div>
                  </div>}
                  <div className='dropdown-btn mt-4 align-items-center' onClick={() => setactive(!active)}>Price{active ? <RiArrowUpSLine className='fs-5' /> : <RiArrowDownSLine className='fs-5' />}</div>
                  {active && <div className='dropmenu-content '>
                    <p className='mb-2'>The Price Range</p>
                    <div className='content-input d-flex justify-content-between align-items-center'>RS<input type='text' placeholder='From'></input><input type='text' placeholder='To'></input></div>
                  </div>}
                  <div className='dropdown-btn mt-4 align-items-center' onClick={() => setdropmenu(!dropmenu)}>Product Type{dropmenu ? <RiArrowUpSLine className='fs-5' /> : <RiArrowDownSLine className='fs-5' />}</div>
                  {dropmenu && <div className='dropmenu-content'>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox'></input><label>Accessories (5)</label>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox'></input><label>Bags (3)</label>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox'></input><label>camera (1)</label>
                    </div>

                    <div className='d-flex align-items-center'>
                      <input type='checkbox'></input><label>Clothing (2)</label>
                    </div>
                  </div>}

                  <div className='dropdown-btn mt-4 align-items-center' onClick={() => setsize(!size)}>Size{size ? <RiArrowUpSLine className='fs-5' /> : <RiArrowDownSLine className='fs-5' />}</div>
                  {size && <div className='dropmenu-content'>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox' /><label>Large (5)</label>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox' /><label>Medium (3)</label>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox' /><label>Small (1)</label>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='product row mt-1 ms-0 me-0'>
                {data?.map((product) => (

                  <div class="card position-relative me-2 mb-2" key={product.id} style={{ width: "14rem" }}>
                    <img src={product.img} className='img-fluid rounded' alt={product.name}></img>
                    <div class="card-body">
                      <p className='mb-0' onClick={() => handledetails(product)}> {product.name} </p>
                      <div className='rating'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                      <p class="card-text text-start">
                        ₹{product.price}
                      </p>
                    </div>
                    <div className='short position-absolute' style={{ cursor: 'pointer' }}>
                      <span className='d-block'><AiOutlineHeart onClick={()=> handlewhishlist(product)} /></span>
                      <span className='d-block'><BsCart3 onClick={() => handleaddcart(product)} /></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </>

      }
    </div>

  )
}
export default Product