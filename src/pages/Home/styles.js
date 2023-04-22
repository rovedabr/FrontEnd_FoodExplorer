import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 
    "nav"
    "main"
    "footer";
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-columns: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  > nav {
    width: 100%;
    height: 11.4rem;
    grid-area: nav;
  }

  > header {
    width: 100%;
    display: none;
    grid-area: header;
  }

  > main {
    width: 100%;
    grid-area: main;
  }

  > footer {
    width: 100%;
    height: 7.7rem;

    grid-area: footer;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-areas: 
      "header"
      "main"
      "footer";
    grid-template-rows: 9.6rem auto 7.7rem;
    grid-template-columns: 100%;

    > nav {
      display: none;
    }

    > main {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      grid-area: main;
    }

    > header {
      width: 100%;
      height: 9.6rem;
      display: flex;
    }
  }

  `;

  export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  .hide {
    width: 10rem;
    height: 4rem;
    margin-bottom: 6rem;
  }

  .buttons .addRemoveButton {
    width: 10rem;
    height: 3.2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .buttons .addRemoveButton input:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }

  .buttons .addRemoveButton span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    margin: 0 1.4rem;
  }

  .mainMeal {
    width: 100%;
    padding-left: 2.4rem;
  }

  .buttons #addRemove {
    width: 2.4rem;
    height: 2.4rem;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    appearance: none;
  }

  .buttons #addRemove #add {
    width: 2.4rem;
    height: 2.4rem;

    margin-left: 2.4rem;
    border: 1px solid red;
  }

  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
    .swiper-button-prev {
    display: none;
  }

    @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 1280px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 10rem;
      height: 51rem;
      margin: -26rem -2rem;
      
      color: ${({ theme }) => theme.LIGHT.LIGHT_100};
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
      transition: all .3s ease-in-out; 
      transform: scale(1.1);
    } 
  } 

`;
