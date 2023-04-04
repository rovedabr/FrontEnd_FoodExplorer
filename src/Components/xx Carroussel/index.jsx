import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Container } from "./styles";

export function Carrousel({children, ...rest}) {
  return (
    <Container>
      <Swiper
        breakpoints = {{
          480:  {
            width: 480,
            slidesPerView: 1.8,
          },
          768: {
            width: 768,
            slidesPerView: 2.5
          },
          1280: {
            width: 1280,
            slidesPerView: 4.5
          }
        }}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{children}</SwiperSlide>        
      </Swiper>

    </Container>
  )
}