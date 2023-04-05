import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

    
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .swiper-button-next,
  .swiper-button-prev {
    width: 10rem;
    height: 51rem;

    border: 1px solid blue; //! apagar esta linha
    margin: -26rem -2rem;
    
    color: ${({ theme }) => theme.LIGHT.LIGHT_100};
    font-weight: bolder;

  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transition: all .3s ease-in-out; 
    transform: scale(1.1);
  }

  .swiper-button-prev {
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)
  }

  .swiper-button-next {
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }


`











