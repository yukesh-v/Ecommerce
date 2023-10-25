import React from 'react'
import './Contact.css'
import {FaHome,FaPhone} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div className='title'><h4>Contact Us</h4></div>
      <div className='contact'>
        <div className='row mx-5'>
          <div className='contact-form col me-5'>
            <h5> Do You Have Any Questions?</h5>
            <div className='contact-form-details mt-4'>
                <input type='text' placeholder='Name' style={{width: "47%",marginRight:"5%"}}></input>
                <input type='text' placeholder='Email' style={{width: "47%"}}></input><br />
                <input type="text" placeholder='Phone No'></input><br />
                <textarea type="address" placeholder='Comment' rows={4}></textarea>
            </div>
            <button className='send-btn'>SEND</button>
          </div>
          <div className='contact-details col-4 p-5'>
            <h5> Get in touch with us </h5>
            <div className='d-flex mt-4 mb-3'>
              <div className='details-icon'><FaHome /></div>
              <div className='details-info ms-2 mt-1'>
                <span className='label-info'>Address:</span>
                <p>33 New Montgomery St.</p>
                <p>Ste 750 San Francisco,</p>
                <p> CA, USA 94105</p>
              </div>
            </div>
            <div className='d-flex mt-4 mb-3'>
              <div className='details-icon'><FaPhone /></div>
              <div className='details-info ms-2 mt-1'>
                <span className='label-info'>Contact:</span>
                <p>(+91)7-723-4608</p>
              </div>
            </div>
            <div className='d-flex mt-4 mb-3'>
              <div className='details-icon'><MdEmail /></div>
              <div className='details-info ms-2 mt-1'>
                <span className='label-info'>Email:</span>
                <p>smartshopping@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row mx-5 mt-5'>
          <div className='contact-map mt-5'>
           {/* eslint-disable-next-line */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15550.523509844787!2d80.08701469999998!3d12.99544485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695312172172!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact