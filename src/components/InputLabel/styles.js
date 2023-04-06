import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: left;

font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
line-height: 1.6rem;
font-weight: 400;


> label {
  margin-bottom: 1.6rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_400};
}

> input {
  height: 4.8rem;
  appearance: none;
  border: none;
  border-radius: 0.8rem;

  padding: 1.2rem 3.2rem;
  background-color: ${({theme}) => theme.DARK.DARK_800};
  color: ${({theme}) => theme.LIGHT.LIGHT_500};

  &::placeholder {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400; 

      color: ${({theme})=> theme.LIGHT.LIGHT_500};
    }   
}

`;


