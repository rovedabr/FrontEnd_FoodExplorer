import { Container } from './styles'
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Carousel({ children, ...rest }) {

  return (
    <Container>
      <Swiper 
        className="Carousel"        
        modules={[ Navigation, Pagination]}
        navigation={true} 
        pagination={{clickable:true}} 
        direction='horizontal' 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}     
      >
        <SwiperSlide>{children}</SwiperSlide>
        </Swiper>

    </Container>

  )
}