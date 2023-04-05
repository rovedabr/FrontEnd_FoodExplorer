import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;


  overflow-y: auto;

   > nav {
    width: 100%;  
    display: flex;
  }

  > header {
    display: none;
  }

  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-lock {
    display: flex;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    width: 10rem;
    height: 51rem;

    border: 1px solid blue;
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

  > footer {
    width: 100%;
    height: 7.7rem;
  }

/*   @media screen and (min-width: 1280px){

    > nav {
      display: none;
    }

    > header {
      display: flex;
    }

    > div h2 {
      font-size: 3.2rem;
      line-height: 4.4rem;
    }

  } */
`;
