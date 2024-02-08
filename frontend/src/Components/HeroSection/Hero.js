import React, { useEffect, useState } from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
 
const Hero = () => {
    const [hero,setHero] = useState({transform:"scale(0)"})
    useEffect(()=>{
setHero({transform:"scale(1)"})

// eslint-disable-next-line 
    },{})
  return (<>
    <div className="herosection" style={hero}>
        <div className="lefthero">
            <h2>sprint</h2>
            <p>"Discover a world of endless choices at your fingertips. Click your way to convenience and curated delights. Welcome to a seamless shopping experience, where every desire meets your digital cart."</p>
            <Link to= "/product" className='explorebtn'>explore <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="righthero">
        <Swiper
        direction={'horizontal'}
        loop ={true}
        slidesPerView={1.5}
        spaceBetween={50}
        mousewheel={true}
        
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1674289121415-ec50cba976b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1703618158895-133df30ce46d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8" alt="" /></SwiperSlide>
       
      </Swiper>
        </div>
        
        
      
    </div>
    </>
  )
}

export default Hero
