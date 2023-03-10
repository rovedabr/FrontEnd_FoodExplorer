import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({theme}) => theme.DARK.DARK_900};
 
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;

  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;

  color: ${({theme}) => theme.LIGHT.LIGHT_100};

`;