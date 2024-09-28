import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import './Residencies.css'
import data from '../utils/slider.json'
import { slideSettings } from '../utils/common';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className="r-container inner-width">
            <div className="r-head">
                <span className="orangeText">Best Choices</span><br/>
                <span className="primary-text">Popular Residencies</span>
            </div>
            <Swiper {...slideSettings} pagination={{
          type: 'progressbar',
        }}>
            <Sliderbutton/>
                {
                    data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="home" />
                                <span className='secondary-text r-price'>
                                    <span style={{color:'orange'}}>$</span><span className='price'>{card.price}</span>
                                    </span>
                                    <span className="primarytext">{card.name}</span>
                                    <span className="secondarytext">{card.detail}</span>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies
const Sliderbutton = ()=>{
    const swiper = useSwiper();
    return(
        <div className='r-button'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>

        </div>
    )
}