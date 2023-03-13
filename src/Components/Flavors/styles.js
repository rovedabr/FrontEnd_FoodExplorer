import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

> img {
  width: 19.1rem;
  height: 14.9rem;
}

.description {
  width: 20rem;
  
  text-align: justify;
  margin: 3.6rem 0.8rem 2.2rem -1rem;
}

>.description h1, span {
  color: ${({theme}) => theme.LIGHT.LIGHT_300};
}

> .description h1 {
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
  width: 37.6rem;
  height: 12rem;

  position: relative;
  top: 1.5rem;
  right: 36rem;

  z-index: -1;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
}

`;