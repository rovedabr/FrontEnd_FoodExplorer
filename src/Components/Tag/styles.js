import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({theme}) => theme.DARK.DARK_900};
 
  > div span {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

`;