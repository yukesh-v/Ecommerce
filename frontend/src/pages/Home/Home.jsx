import React from 'react'
import "./Home.css";
import {UnevenSetsInfinite} from '../../components/ProductSlide/ProductSlide'
import Rtl from '../../components/BrandSlide/BrandSlide';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import { DealProduct } from '../../components/Dealproduct/Dealproduct';
import { LastestProduct } from '../../components/Lastestproduct/Lastestproduct';
import { FeatureProduct } from '../../components/Featureproduct/Featureproduct';



const home = () => {
  return (
    <>
      <div className="top-banner mx-1">
        <div className='banner-top row d-flex justify-content-between mx-1'>
        <img src='image/images/banner1.webp' className='py-4 img-fluid'  alt='banner' />
        </div>
      </div>
      <div className='banner d-flex p-3 mx-3'>
        <div className='lowbanner position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/sub-banner-3.jpg?v=1690432217' className='img-fluid rounded p-4 ' alt=''></img>
          <div className='lowbanner-content position-absolute'>
            <h4>S22 Samsung Smartphone</h4>
            <p className='text-start'>From ₹30000</p>
            <a href="/">Shop Now</a>
          </div>
        </div>
        <div className='lowbanner position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/sub-banner-4.jpg?v=1690432217' className='img-fluid rounded p-4' alt=''></img>
          <div className='lowbanner-content position-absolute'>
            <h4>Armchair Mad<br /> By shopstic</h4>
            <p className='text-start'>From ₹30000</p>
            <a href="/">Shop Now</a>
          </div>
        </div>
        <div className='lowbanner position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/sub-banner-5.jpg?v=1690432217' className='img-fluid rounded p-4' alt=''></img>
          <div className='lowbanner-content position-absolute'>
            <h4>Noise Wireless<br /> Headphones </h4>
            <p className='text-start'>From ₹30000</p>
            <a href="/">Shop Now</a>
          </div>
        </div>
      </div>
      <div className='list'>
        <ul className=' mt-3 p-3 mb-0'>
          <li className='ps-5 pe-3'>Electronics Product</li>
        </ul>
        <UnevenSetsInfinite />
      </div>
      <div className='banners'>
        <div className='watch mx-5 position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/offer-banner-1.jpg?v=1690447638' className="rounded" alt=''></img>
          <div className='banner-content position-absolute text-center d-flex '>
            <h2 className='display-5 fw-medium pt-3'>WATCH</h2>
            <p className='pt-4 ms-4 text-start'>M6 Smart Band 2.3 – Fitness Band
              <br></br>Men’s and Women’s Health Tracking, Red Strap</p>
          </div>
        </div>

      </div>
      <div className='list'>
        <ul className='d-flex mt-2 p-3 mb-0'>
          <li className='ps-5'>Lastest Product</li>
        </ul>
        <LastestProduct />
      </div>
      <div className='ad d-flex'>
        <div className='ad-banner position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/cms-banner-1.jpg?v=1690453910' className='img-fluid' alt=""></img>
          <div className='ad-banner-content position-absolute'>
            <p className='text-start'>Save Up To 20% Off</p>
            <h4>Santa Lucia Three <br />Seater Sofa</h4>
            <a href='/'>Shop Me</a>
          </div>
        </div>
        <div className='ad-banner ms-5 position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1690453910' className='img-fluid' alt=""></img>
          <div className='ad-banner-content position-absolute'>
            <p className='text-start'>Best Online Discount</p>
            <h4>Woman In Red Crew  <br />Neck T-shirt</h4>
            <a href='/'>Shop Me</a>
          </div>
        </div>
      </div>
      <div className='list '>
        <ul className='d-flex p-3 mb-0'>
          <li className='ps-5'>Feature Product</li>
        </ul>
        <FeatureProduct />
      </div>
      <div className='list'>
        <ul className='d-flex mt-5 p-3 mb-0'>
          <li className='ps-5'> Deal Of The Day</li>
        </ul>
        <DealProduct />
      </div>
      <div className='ad d-flex'>
        <div className='ad-banner position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/cms-banner-3.jpg?v=1690457806' className='img-fluid' alt=""></img>
          <div className='ad-banner-content position-absolute'>
            <p className='text-start'>20 Days Return Products</p>
            <h4>Mobile Shope-Smart  <br />Watch T-55</h4>
            <a href='/'>Shop Me</a>
          </div>
        </div>
        <div className='ad-banner ms-5 position-relative'>
          <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/cms-banner-4.jpg?v=1690457805' className='img-fluid' alt=""></img>
          <div className='ad-banner-content position-absolute'>
            <p className='text-start'>Save Up To 30% Off</p>
            <h4>Decoration Design  <br />Lamp Light</h4>
            <a href='/'>Shop Me</a>
          </div>
        </div>
      </div>
      <div className='brand-banner'>
        <Rtl />
      </div>
      <div className='clients-card' style={{ marginTop: "5%" }}>
        <h5 className='ms-5 fs-4 mb-4'> What Our Clients Say</h5>
        <div className='row mt-4 mx-5'>
          <div className='client-detail col-4 p-4 me-3' style={{ width: "32%" }}>
            <div className='top-content d-flex mt-3'>
              <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/user-4_04ab6cc9-4218-41b0-aef0-219e6066288a.jpg?v=1690460008&width=100' alt=''></img>
              <div className='inner-content d-block text-start'>
                <h6>Stefanie Rashford</h6>
                <p className='mb-0 text-start'>Founder</p>
              </div>
            </div>
            <div className='lower-content mt-4'>
              <p>However, Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book have suffered don't look even slightly believable good.</p>
            </div>
          </div>
          <div className='client-detail col-4 p-4 me-3' style={{ width: "32%" }}>
            <div className='top-content d-flex mt-3'>
              <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/user-1_83a05497-29de-43c4-8b1c-3a81059115d8.jpg?v=1690460008&width=100' alt=''></img>
              <div className='inner-content d-block text-start'>
                <h6>Augusta Wind</h6>
                <p className='mb-0 text-start'>Web Designer</p>
              </div>
            </div>
            <div className='lower-content mt-4'>
              <p>However, Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book have suffered don't look even slightly believable good.</p>
            </div>
          </div>
          <div className='client-detail col-4 p-4' style={{ width: "32%" }}>
            <div className='top-content d-flex mt-3'>
              <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/files/user-2_4ae938ed-5d8b-456c-b833-1ae8aa5abbaf.jpg?v=1690460008&width=100' alt=''></img>
              <div className='inner-content d-block text-start'>
                <h6>Reema ghurde</h6>
                <p className='mb-0 text-start'>Manager</p>
              </div>
            </div>
            <div className='lower-content mt-4'>
              <p>However, Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book have suffered don't look even slightly believable good.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='blog' style={{ margin: "5% 4%" }}>
        <h5 className='mb-4 fs-4'>From The Blog</h5>
        <div className='row'>
          <div className='col-3'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/10.jpg?v=1690526593&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                Men’s Urban Streetwear Fashion Brand Launched
              </h5>
              <p className='text-start'>Fashion is not merely about clothing; it is an embodiment of elegance, sophistication, and self-expression.</p>
              <a href='/blog'>Read More</a>
            </div>
          </div>
          <div className='col-3'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/1.jpg?v=1690526619&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                Kids Schoolwear Brand in UK to inherit Digitalization
              </h5>
              <p className='text-start'>Technology has become an integral part of our lives, revolutionizing the way we work and communicate ourselves.</p>
              <a href='/blog'>Read More</a>
            </div>
          </div>
          <div className='col-3'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/4.jpg?v=1690526639&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>

                The Future of Fashion Subscription Model

              </h5>
              <p className='text-start'>Trends are patterns or shifts in behavior, preferences, or ideas that gain popularity within a specific industry or society.</p>
              <a href='/blog'>Read More</a>
            </div>
          </div>
          <div className='col-3'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/9.jpg?v=1690526674' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                How we increased sales for an online Women Wear.
              </h5>
              <p className='text-start'>Welcome to the ultimate shopping event that you've been waiting for Our upcoming shopping sale with big discount.</p>
              <a href='/blog'>Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className='image-gallery'>
        <h3 className='text-center mb-4'>Image Gallery</h3>
        <ImageGallery />
      </div>
    </>
  )
}

export default home