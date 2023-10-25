import React from 'react'
import "./Header.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/AuthSlice';


const Header = () => {

  const { CartTotalQuantity } = useSelector((state) => state.cart)
  const { quantity } = useSelector((state) => state.Whishlist);
  const { account } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
 
  const handlelogout= ()=>{
    window.location.reload();
    dispatch(logout())

  }
  return (
    <>
      <div className='top mx-5 d-flex justify-content-between'>
        <div className='d-flex justify-content-between w-50 pt-2 '>
          <p className='mb-0'>Get up to 50% off new season styles, limited time only</p>
        </div>
        <div className='top-right d-flex pt-2'>
          <p className='px-3 mb-2 border-start '>Find store</p>
          <p className='px-3 mb-2 border-start border-end '>support@gmail.com</p>
          <p className='px-3 mb-2 border-end '>Find More</p>
          <p className='px-3 mb-2 border-end '>Find More</p>
        </div>
      </div>
      <div className='link mx-5 mb-0 d-flex border-bottom'>
        <img className="logo" src="image/images/shop-logo1.jpg" alt="logo"></img>
        <input className='ps-3 ms-5 w-50 ' placeholder='Search'></input>
        <button className='search-btn ms-2'>SEARCH</button>
        {account.length ===0 ? <> <Link to={"Login"}>Log in / </Link>
          <Link to={"Register"}>Register</Link>
        </> :
          <div class="dropdown">
            <p className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"40%",fontSize:"18px"}}>
              {account}
            </p>
            <ul class="dropdown-menu">
              <li  style={{display:"inline",paddingLeft:"7%",cursor:"pointer"}} onClick={()=>handlelogout()}>Logout</li>    
            </ul>
          </div>
        }

        <div className='icons position-relative'>
          <Link to="/whishlist"><AiOutlineHeart /> </Link>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">{quantity}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <div className='icons name position-relative'>
          <Link to="/cart"><BsCart3 /></Link>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">{CartTotalQuantity}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
      </div>
      <div className='menu mx-5 mt-1 d-flex text-center'>
        <div className='icon' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><HiOutlineMenuAlt1 /></div>
        <p className='mt-2 ms-2' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ paddingRight: "80px", cursor: "pointer" }}>SHOP BY CATEGORIES</p>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h6 className="offcanvas-title" >SHOP BY CATEGORIES</h6>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body text-start">
            <ul className='downmenu ps-0'>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/collection"}>Collection</Link></li>
              <li><Link to={"/product"}>Product</Link></li>
              <li><Link to={"/Blog"}>Blog</Link></li>
              <li><Link to={"/Contact"}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className='icon-name me-2 mt-1' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><RiArrowDownSLine className='fs-3' /></div>
        <div className='nav ms-0 mt-1 d-flex justify-content-between text-center'>
          <ul className='pt-1 d-flex justify-content-between border-start'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/collection"}>Collection</Link></li>
            <li><Link to={"/product"}>Product</Link></li>
            <li><Link to={"/Blog"}>Blog</Link></li>
            <li><Link to={"/Contact"}>Contact</Link></li>
          </ul>
        </div>

      </div>
    </>
  )

}

export default Header
