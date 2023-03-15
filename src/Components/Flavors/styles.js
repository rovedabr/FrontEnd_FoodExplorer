import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;


> img {
  width: 19.1rem;
  height: 14.9rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  left: 0.6rem;
  top: 12.9rem;

}

>.backgroundFlavors .description {
  width: 20rem;

  position: relative;
  text-align: justify;
  margin: 3.6rem auto 2.2rem 18.9rem;
}

>.backgroundFlavors .description h1, span {
  color: ${({theme}) => theme.LIGHT.LIGHT_300};
}

>.backgroundFlavors .description h1 {
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
}

> .description span {
  font-size: 1.2;
  line-height: 1.7rem;
  font-weight: 400;
}

.backgroundFlavors {
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 4.4rem 1.6rem 0 3rem;

  content: "";

  z-index: -1;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
}

  @media screen and (min-width: 768px){

  > img {
    width: 33rem;
    height: 20rem;  
  }

  >.backgroundFlavors{
    height: 17rem;
  }

  >.backgroundFlavors .description {
    width: 35rem;

    margin: 5.6rem auto 9.2rem 35em;
  }

  >.backgroundFlavors .description h1 {
    font-size: 2.5rem;
  }

  >.backgroundFlavors .description span {
    font-size: 1.4;
  }
}

  @media screen and (min-width: 1280px){

    > img {
    width: 65.6rem;
    height: 41.2rem;
    
    position: relative;

    left: -120rem;
    top: .8rem;

    background-size: cover;
  }

  .backgroundFlavors {
    width: 100%;
    height: 26rem;

    margin: 16.4rem 12.4rem 0 12.4rem;
  }

  >.backgroundFlavors .description {
    width: 42rem;

    margin: 8.8rem auto 9.2rem 67em;
  }

  >.backgroundFlavors .description h1 {
    font-size: 4rem;
    line-height: 5.6rem;
    font-weight: 500;
  }

  >.backgroundFlavors .description span {
    font-size: 1.6;
    line-height: 1.6rem;
    font-weight: 400;
  }
}
`;