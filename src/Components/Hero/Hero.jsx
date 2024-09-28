import React from 'react'
import './Hero.css'
import { FaLocationDot } from "react-icons/fa6";
import CountUp from 'react-countup';




const Hero = () => {
  return (
    <section className='hero-wrapper'>
     <div className="hero-container inner-width">
        <div className="heroleft" >
            <div className="orange-circle"></div>
            <div className="hero-title">
                <h1>Discover <br/>Most Suitable <br/> Property</h1>
            </div>
         
        <div className="hero-description secondary-text">
            <p><span>Find a Varitey of Properties that suit you very easilty Forget all defficulties </span><br/>
            <span>Forget all defficulties Find a Varitey of Properties that suit you very easilty </span></p>
        </div>
        <div className="search-bar">
        <FaLocationDot color='blue' size={25} />
        <input type="text" placeholder='search your Location' />
        <button className="button">search</button>

        </div>
        <div className="states ">
            <div className="stat ">
                <span>
                <CountUp start={8000} end={9000}   duration={4} className='numbers'/>
                <span className='color'>+</span>
                    </span><br/>
                    <span className='secondary-text'>
                        Premium Products
                    </span>
            </div>
            <div className="stat">
                <span>
                <CountUp start={1950} end={2000}   duration={4} className='numbers'/>
                <span className='color'>+</span>
                    </span><br/>
                    <span className='secondary-text'>
                    Happy Customers
                    </span>
            </div>
            <div className="stat">
                <span>
                <CountUp  end={28}   duration={4} className='numbers'/>
                <span className='color'>+</span>
                    </span><br/>
                    <span className='secondary-text'>
                      Award Winning
                    </span>
            </div>
        </div>
        </div>
        <div className="hero-right flexCenter">
            <div className="image-container">
                <img src="./hero-image.png" alt="" />
            </div>
        </div>
        


     </div>
    </section>
  )
}

export default Hero
