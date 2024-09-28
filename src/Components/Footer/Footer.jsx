import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
     <section className='F-wrapper'>
        <div className="f-container inner-width">
            <div className="f-left">
                <img src="./logo2.png" alt="" />
                <p className='secondary-text'>Our vision is to make all people the best place to live for them.</p>
            </div>
            <div className="f-right">
              <h1 className="primarytext">Information</h1>
              <p className="secondary-text">23 New hyderabad,FL 6571,india</p>
              <div className='flex'><span>Property</span><span>Services</span>Product<span>About Us</span></div>
            </div>
        </div>
     </section>
  )
}

export default Footer
