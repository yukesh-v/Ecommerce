import React from 'react';
import "./ProductDetails.css";
import MyTimer from '../../components/SaleTime/SaleTime';
import { UnevenSetsInfinite } from "../../components/ProductSlide/ProductSlide"
import { BsEyeFill } from 'react-icons/bs';
import { IoMdRadioButtonOn, IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr'
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai'
import { SiDatabricks } from 'react-icons/si';
import { RiStarHalfFill } from 'react-icons/ri'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/CartSlice';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {

  const productdetail = useSelector((state) => state.productdetail)
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [count, setcount] = useState(0);
  const [show, setshow] = useState(true);
  const [color, setcolor] = useState("active");
  const [nextcolor, setnextcolor] = useState();

  function handlesumbit(product){
  dispatch(addToCart(product))
  navigator("/cart")
  }

  return (
    <>

      <div className='product-title'>
        <div className='title'>
          <ul className='d-flex'>
            <li><a href='/'>Home</a></li>/
            <li>Product Details</li>
          </ul>
        </div>
      </div>
      <div className='product-details '>
        
          {productdetail.productItem.map((product) => (
            <div className='row' key={product.id}>
          <div className='col-5 product-image'>
            <img src={product.img} alt=''></img>
          </div>
          <div className='col-6 product-content '>
            <div className='details text-start'>
              <h4>{product.name}</h4>
              <div className='d-flex'>
                <p className='fs-5' style={{ textDecoration: "line-through" }}>{product.price+product.price/20}</p>
                <p class="product-price fs-5">{product.price}</p>
                <h6><span class="badge bg-danger ms-2 mt-1">-23</span></h6>
              </div>
              <p className='lh-base' style={{ color: "#666666", fontSize: "15px" }}>Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the...</p>
              <div>
                <MyTimer />
              </div>
              <div className='mt-2 d-flex'>
                <h6><BsEyeFill /> </h6>
                <p className='ms-2'> 23 people are viewing this right now</p>
              </div>
              <div className='avaliable mt-1 d-flex'>
                <p className='fw-medium'>Avalibility</p>:
                <h6 className='ms-1'><IoMdRadioButtonOn /></h6>
                <p className='ms-2'>200 In Stock</p>
              </div>
              <div>
                <h6>Quantity</h6>
                <div className=' quantity d-flex mt-3'>
                  <span className='py-2 px-2 d-flex justify-content-around'><p className="pe-4 ps-1 mb-0" onClick={() => { setcount(count - 1) }}><GrFormSubtract /></p>{count}<p className="ps-4 pe-1 mb-0" onClick={() => { setcount(count + 1) }}><IoMdAdd /></p></span>
                  <button className='ms-3' onClick={()=> handlesumbit(product)}>ADD TO CART</button>
                </div>
                <div className='buy mt-3'>
                  <button>BUY NOW</button>
                </div>
                <div className='d-flex mt-4'>
                  <p ><AiOutlineHeart /> Wishlist</p>
                  <p className='ms-2'><SiDatabricks /> Compare</p>
                </div>
                <div>
                  <span className='d-flex'><p className='fw-medium me-1 mb-2'>SKU</p>:<p className='ms-1 mb-2'>NHFL5-11</p></span>
                  <span className='d-flex'><p className='fw-medium me-1 mb-2'>Vendor</p>:<p className='ms-1 mb-2'>Apple</p></span>
                  <span className='d-flex'><p className='fw-medium me-1'>Category</p>:<p className='ms-1'>Phone</p></span>
                </div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Shipping & Returns
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <p>Free shipping and returns available on all orders!</p>
                        <p className='mb-0'>We ship all US domestic orders within <strong>5-10 business days</strong></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                        Materials
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <p className='mb-0'>The item with the Committed label has a lower environmental impact because it was made with sustainable materials or methods. We are committed to creating items that combine sustainability with style. Made with recycled cashmere and industril by products.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                        Care Instructions
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <p className='mb-0'>We advise routinely dusting your items with a gentle cleanser to preserve its look. Periodically, it may need to be softly wet with a mild detergent solution.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          ))}
      </div>
      <div className='discription mx-5'>
        <div className='top'>
          <ul className='d-flex ps-0 mb-0'>
            <li className={color} onClick={() => { setnextcolor(); setcolor("active"); setshow(true) }}>Discription</li>
            <li className={nextcolor} onClick={() => { setnextcolor("active"); setcolor(); setshow(false) }}>Reviews</li>
          </ul>
        </div>
        {show ?
          <div className='discription-content'>
            <p className='mb-0'>Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date.rowse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend</p>
            <h6 className='mt-4 mb-3'>Sample Unordered List</h6>
            <ul>
              <li>Comodous in tempor ullamcorper miaculis</li>
              <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
              <li>Divamus sit amet purus justo.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
            </ul>
            <h6 className='mt-4 mb-3'>Sample ordered List</h6>
            <ol>
              <li>Comodous in tempor ullamcorper miaculis</li>
              <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
              <li>Divamus sit amet purus justo.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
            </ol>
            <h6 className='mt-4 mb-3'>Sample ordered List</h6>
            <p className='ps-5'>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!</p>
          </div> :
          <div className='review'>
            <h6>Customer Reviews</h6>
            <div className='rating fs-5 d-flex'>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <RiStarHalfFill />
              <p className='ps-2' style={{ color: "#666666", fontSize: "14px" }}>Based on 2 reviews </p>
            </div>
            <div className='people'>
              <div className='rating fs-5'>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
              <div className='people-review'>
                <h6>Kumar</h6>
                <span><strong>Perfect product!</strong> on <strong>Aug 25, 2023</strong></span>
                <p>This is awosome .. camera is best . Here some photos i m sharing with you guys ..</p>
              </div>
            </div>
            <div className='people'>
              <div className='rating fs-5'>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />

              </div>
              <div className='people-review'>
                <h6>Srinivash Bhoi</h6>
                <span><strong>Perfect product!</strong> on <strong>Aug 25, 2023</strong></span>
                <p>Cons-front camera is good not awesome After switching from android you feel one minus point is the display notch .
                </p>
              </div>
            </div>
          </div>}
      </div>
      <div className='p-slide'>
        <h4 className='ms-5'>You May Also Like</h4>
        <UnevenSetsInfinite />
      </div>


    </>
  )
}

export default ProductDetails