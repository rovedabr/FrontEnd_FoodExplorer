import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > svg {
    width: 4.3rem;
    height: 4.3rem;    
  }

  > h1 {
    font-size: 3.7rem;
    font-weight: 700;
    line-height: 4.4rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    margin-left: 1.1rem;
  }

`;