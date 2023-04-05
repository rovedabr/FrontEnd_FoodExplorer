import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Container, Content } from "./styles";

export function Carrousel({children, ...rest}) {
  return (
    <Container>
      <Swiper
          breakpoints = {{
            350:  {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            520: {
              slidesPerView: 2.9,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 100,
            }
          }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="Carrousel"
      >
        <Content>
          <SwiperSlide>
            {children}
          </SwiperSlide> 
        </Content>

      </Swiper>
    </Container>
  )
}