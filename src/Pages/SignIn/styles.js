import styled from "styled-components";
import {breakpoints}  from "../../Styles/breakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin: 15.8rem auto;
  
  background-color: ${({theme}) => theme.DARK.DARK_400};

  > .brand {
  grid-area: brand;
  margin-bottom: 7.3rem;
}

`;



export const Form = styled.div`
  width: 31.6rem;
  height: 100%;

  grid-area: form;

  > label {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    margin-bottom: 10px;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};
  } 

  > label span {
    display: block;
    margin-bottom: 0.8rem;
  }

  > input {
    margin-top: 15rem;
  }

  > button {
    margin-bottom: 3.2rem;
  } 
//-------------------------------------------------------------

@media screen and (min-width:  {({breakpoints}) => breakpoints.deviceScreen.MOBILE}) {
  
}
//______________________________________________________________
@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60rem;

  > label input {
    width: 38rem;
  }

  > button {
    width: 38rem;
    margin-bottom: 3.2rem auto 2.5rem auto;
  } 

}

@media only screen and (min-width: 1200px){


  
}

`;