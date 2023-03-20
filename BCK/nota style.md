import styled from "styled-components";

export const Container = styled.div`
  height: 3.2rem;  
  border-radius: 0.8rem;
  
  color: ${({  isNew }) => isNew ? '#FFFFFF' : '#7C7C8A'};
  background-color: ${({ isNew }) => isNew ? `transparent` : '#76797B' };
  
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.LIGHT.LIGHT_500}`: `1px solid ${theme.LIGHT.LIGHT_600}`};


  >  button {
    width: 15rem;
    height: 15rem;
    appearance: none;
    border: 1px solid green;
    background: transparent;
    color: White;
  }

  /* > .button-delete {
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  > .button-add {
    color: ${({theme}) => theme.LIGHT.LIGHT_500};
  } */

  > input {
    width: 12rem;
    padding: 0.1rem;

    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight:400;
    text-align: center;

    background: transparent;
    border: none;
    border: 1px solid blue;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }
`