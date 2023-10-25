import React from 'react'

const Aboutus = () => {
  return (
    <>
        <div className='product-title'>
            <div className='d-flex justify-content-between'>
              <h4>About Us</h4>
              <a href='/'>Home</a>
            </div>
          </div>
          <div className='privacy-policy'>
            <div className='policy'>
               <h6 className='mb-3'>Our Company</h6>
               <p style={{fontSize:"15px",marginBottom:"2%",lineHeight:"1.5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
            </div>
            <div className='policy'>
               <h6 className='mb-3'>Our Team</h6>
               <p style={{fontSize:"15px",marginBottom:"2%",lineHeight:"1.5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='policy'>
               <h6 className='mb-3'>Testimonials</h6>
               <p style={{fontSize:"15px",marginBottom:"1%"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit".</p>
               <p style={{fontSize:"15px",marginBottom:"2%",lineHeight:"1.5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. </p>
            </div>
          </div>
    </>
  )
}

export default Aboutus