import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css'


export function Carousel({ children, ...rest }) {
  return (
    <Container>
      <Swiper
        className="Carousel"        
        slidesPerView={1.6}
        spaceBetween={10}
        loop={false}
        navigation={true}
        mousewheel={true}
        modules={[Navigation]}
        breakpoints={{          
          480: { 
            width: 480,
            slidesPerView: 2.1,
            spaceBetween: 15
          },          
          768: { 
            width: 768,
            slidesPerView: 3.2,
            spaceBetween: 25
          },
          1280: { 
            width: 1280,
            slidesPerView: 4,
            spaceBetween: 350
          },          
        }}
      >
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>         
    </Container>
    )

}