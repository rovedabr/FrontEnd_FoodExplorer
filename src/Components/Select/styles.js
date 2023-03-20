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

> select {
  height: 4.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  appearance: none;
  border: none;
  border-radius: 0.8rem;

  padding: 1.3rem 1.6rem;
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


