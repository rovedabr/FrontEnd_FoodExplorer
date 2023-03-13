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
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    padding: 0.02rem 0.55rem;
    border-radius: 9.9rem;

    position: relative;
    right: 1rem;
    top: -1rem;

    z-index: 1;
  }

  > div img {
    width: 16.1rem;
    height: 2.6rem;
  }
`;