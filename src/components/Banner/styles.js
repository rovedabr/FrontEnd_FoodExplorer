import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

.backgroundFlavors {
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: row;

  margin: 4.4rem 1.6rem auto 3rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  z-index: -1;
}

.backgroundFlavors img {
  width: 19.1rem;
  height: 14.9rem;

  position: relative;
  bottom: 3rem;

  z-index: 1;
}

> .backgroundFlavors .description {
  width: clamp(15rem, 50%, 20rem);
  margin: .5rem 0.8rem auto 0.5rem;

  text-align: justify;
}

> .backgroundFlavors .description h1, span {
  color: ${({theme}) => theme.LIGHT.LIGHT_300};
}

>.backgroundFlavors .description h1 {
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
} 

> .description span {
  font-size: clamp(0.5rem, 50%, 1.2rem);
  line-height: 1.7rem;
  font-weight: 400;
}

@media screen and (min-width: 425px){
  >.backgroundFlavors .description {
    margin: 3.6rem 0.8rem auto 0.5rem;
  }
}

  @media screen and (min-width: 768px){

  >.backgroundFlavors img {
    width: 33rem;
    height: 20rem;  
  }

  >.backgroundFlavors{
    height: 17rem;
  }

  >.backgroundFlavors .description {
    width: 35rem;

    margin: 5.6rem auto 9.2rem 0;
  }

  >.backgroundFlavors .description h1 {
    font-size: 2.5rem;
  }

  >.backgroundFlavors .description span {
    font-size: 1.4rem
  }
}

  @media screen and (min-width: 1280px){

    > .backgroundFlavors img {
    width: 65.6rem;
    height: 41.2rem;

    background-size: cover;
    top: -15rem;
  }

  .backgroundFlavors {
    width: 100%;
    height: 26rem;

    margin: 16.4rem 12.4rem auto 7rem;
  }

  >.backgroundFlavors .description {
    width: 60rem;

    margin: 8.8rem auto 9.2rem 0;
  }

  >.backgroundFlavors .description h1 {
    font-size: 5.3rem;
    line-height: 5.6rem;
    font-weight: 500;

    margin-bottom: 0.8rem;
  }

  > .backgroundFlavors .description span {
    width: 100%;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
  }
}
`; 