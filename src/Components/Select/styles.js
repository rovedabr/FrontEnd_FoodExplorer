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


>div {
  width: 100%;

  background-color: ${({theme}) => theme.DARK.DARK_800};
  border-radius: 0.8rem;
}

> div select {
  width: 95%;
  height: 4.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  
  border: none;
  border-radius: 0.8rem;

  padding: 1.3rem 1.6rem;
  background-color: ${({theme}) => theme.DARK.DARK_800};
  color: ${({theme}) => theme.LIGHT.LIGHT_500};

}

`;


