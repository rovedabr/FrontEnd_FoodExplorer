import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;


>.content img {
  width: 19.1rem;
  height: 14.9rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  left: 0.6rem;
  top: 12.9rem;

  border: 1px solid yellowgreen;

}

> .content .description {
  width: 20rem;
  
  text-align: justify;
  margin: 3.6rem 0.8rem 2.2rem -1rem;
  z-index: 1;
}

>.content .description h1, span {
  color: ${({theme}) => theme.LIGHT.LIGHT_300};
}

>.content  .description h1 {
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
}

>.content  .description span {
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
  border: 1px solid green;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

}

@media screen and (min-width: 1280px){

  >.content img {
  width: 65.6rem;
  height: 41.2rem;
  

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  left: 5.4rem;
  top: 13.8rem;

  border: 1px solid yellowgreen;

}

}


`;