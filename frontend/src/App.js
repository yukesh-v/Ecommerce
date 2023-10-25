import React from 'react'
import Home from "../src/pages/Home/Home";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Product from './pages/Product/product';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPassword from './pages/reset-password/reset-password';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Policy from './pages/Privacypolicy/Policy';
import Shipping from './pages/Privacypolicy/Shipping';
import FAQ from './pages/Privacypolicy/FAQ';
import Aboutus from './pages/Privacypolicy/Aboutus';
import Policybuyer from './pages/Privacypolicy/Policybuyer';
import Policyseller from './pages/Privacypolicy/Policyseller';
import Size from './pages/Privacypolicy/Size';
import Collection from './pages/Collection/Collection';
import Whishlist from './pages/Whishlist/Whishlist';


const App = () => {
  return (

    <BrowserRouter>
    <ToastContainer/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Privacy-policy' element={<Policy />} />
        <Route path='/Shipping-refund' element={<Shipping />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/policy-buyer' element={<Policybuyer />} />
        <Route path='/policy-seller' element={<Policyseller />} />
        <Route path='/size-chart' element={<Size />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/whishlist' element={<Whishlist/>} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
