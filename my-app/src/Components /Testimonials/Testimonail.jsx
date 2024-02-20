import React from 'react'
import 'atropos/css'
import "./Testimonial.css";
import Atropos from 'atropos/react';
import 'atropos/css'
import Display from "../../assets/display.png";
// import AwesomeSlider from 'react-awesome-slider';

import { Swiper, SwiperSlide } from "swiper/react";
import 'react-awesome-slider/dist/styles.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";



// import required modules
import {EffectFlip, Navigation } from "swiper";


const Testimonail = props => {
  return (
    <div className='container' id='testimonial'>
      <h1 className="heading">Testimonials</h1>
      <Swiper
effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Navigation]}
        slidesPerView={1}
        
      className="mySwiper"
      >
<SwiperSlide className='slider' >

 
    
    <div className="Main">   
              
              <img className='Timg' src={Display} alt="" />
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            
              </p>
                 <p className='pt' ><span className="name">Khush Patel</span>Employee at Next wave</p>
           </div>
  
</SwiperSlide>

<SwiperSlide className='slider' >


 <div className="Main">   
           
           <img className='Timg' src={Display} alt="" />
           <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
           </p>
              <p className='pt' ><span className="name">Khush Patel</span>Employee at Next wave</p>
        </div>
 
 

</SwiperSlide>

   
      </Swiper>
    </div>
  )
}



export default Testimonail
