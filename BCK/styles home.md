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

  > div .hide {
    width: 10rem;
    height: 4rem;
    margin-bottom: 6rem;
  }

  .mainMeal {
    width: 95%;
    padding-left: 2.4rem;
  }

  > footer {
    width: 100%;
    height: 7.7rem;
  }

  > div .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  

  @media screen and (min-width: 1280px) {

  > nav {
      display: none;
    }

    > header {
      display: flex;
    }

    > div .hide {
      width: 20rem;
      height: 4rem;
      margin-bottom: 4.6rem;
    }

    > .mainMeal h2 {
      font-weight : 700;
      font-size: 2.2rem;
      line-height: 3.4rem;
    } 

    > .mainMeal {
      width: 95%;
  
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    .swiper-wrapper {
    width: 768px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 10rem;
    height: 51rem;
    margin: -26rem -2rem;
    opacity: 1;

    display: flex;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transition: all .3s ease-in-out; 
    transform: scale(1.5);
  }

  .swiper-button-prev {
    background: linear-gradient(to right, rgba(0,10,15,1) 0%,rgba(0,10,15,1) 50%,rgba(0,10,15,0) 100%)
  }

  .swiper-button-next {
    background: linear-gradient(to right, rgba(0,10,15,0) 0%,rgba(0,10,15,1) 50%,rgba(0,10,15,1) 100%);
  }



}

`;
