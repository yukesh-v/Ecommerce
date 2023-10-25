import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <>
      <div className='title'><h4>News</h4></div>
      <div className='blog' style={{ margin: "5% 4%" }}>
        <div className='row'>
          <div className='blog-col col-4'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/10.jpg?v=1690526593&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                Men’s Urban Streetwear Fashion Brand Launched
              </h5>
              <p className='text-start'>Fashion is not merely about clothing; it is an embodiment of elegance, sophistication, and self-expression.</p>
              <a href='/'>Read More</a>
            </div>
          </div>
          <div className='blog-col col-4'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/1.jpg?v=1690526619&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                Kids Schoolwear Brand in UK to inherit Digitalization
              </h5>
              <p className='text-start'>Technology has become an integral part of our lives, revolutionizing the way we work and communicate ourselves.</p>
              <a href='/'>Read More</a>
            </div>
          </div>
          <div className='blog-col col-4'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/4.jpg?v=1690526639&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>

                The Future of Fashion Subscription Model

              </h5>
              <p className='text-start'>Trends are patterns or shifts in behavior, preferences, or ideas that gain popularity within a specific industry or society.</p>
              <a href='/'>Read More</a>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='blog-col col-4'>
            <img src='https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg' className='img-fluid rounded' alt='' style={{ height: "64%" }}></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                How we increased sales for an online Women Wear.
              </h5>
              <p className='text-start'>Welcome to the ultimate shopping event that you've been waiting for Our upcoming shopping sale with big discount.</p>
              <a href='/'>Read More</a>
            </div>
          </div>
          <div className='blog-col col-4'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/9.jpg?v=1690526674' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                How we increased sales for an online Women Wear.
              </h5>
              <p className='text-start'>Welcome to the ultimate shopping event that you've been waiting for Our upcoming shopping sale with big discount.</p>
              <a href='/'>Read More</a>
            </div>
          </div>
          <div className='blog-col col-4'>
            <img src='https://classyshop-codezeel.myshopify.com/cdn/shop/articles/7.jpg?v=1690526692&width=1000' className='img-fluid rounded' alt=''></img>
            <div className='blog-content'>
              <h6>July 28, 2023</h6>
              <h5>
                How we increased sales for an online Women Wear.
              </h5>
              <p className='text-start'>Welcome to the ultimate shopping event that you've been waiting for Our upcoming shopping sale with big discount.</p>
              <a href='/'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog