import { Container, Content } from './styles'
import React from 'react';
// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Carousel({ children, ...rest }) {
  () => {
    const params = {
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

  return (
    <Container>
      <Content>
        <Swiper {...params }
          className="Carousel"        
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}               
        >
          
          <SwiperSlide>{children}</SwiperSlide>
          </Swiper>
      </Content>
    </Container>

  )
}