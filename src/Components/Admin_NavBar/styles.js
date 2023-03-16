import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 11.4rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${({theme}) => theme.DARK.DARK_700};
  
  padding: 6.4rem 2.8rem 3.2rem 2.8rem;

  > img {
    width: 2.4rem;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    line-height: 160%;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  > div img {
    width: 16.1rem;
    height: 2.6rem;
  }
`;