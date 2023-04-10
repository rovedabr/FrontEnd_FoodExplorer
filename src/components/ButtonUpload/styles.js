import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: left;

border: 1px red solid;

font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
line-height: 1.6rem;
font-weight: 400;

> label div {
  height: 4.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  appearance: none;
  border-radius: 0.8rem;

  padding: 1.2rem 1.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_800};
  color: ${({theme}) => theme.LIGHT.LIGHT_500};
}

> label  {
  display: block;
  margin-bottom: 1.6rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_400};
  border: 1px solid green;
}

> label div input {
  display: none;
}

/* > input [type='file'] {
  display: none;
}

> div {
  height: 4.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  
  appearance: none;
  border: none;
  border-radius: 0.8rem;

  padding: 1.2rem 1.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_800};
  color: ${({theme}) => theme.LIGHT.LIGHT_500};
} */

`;


