import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > img {
    width: 19.7rem;
    height: 3rem;    
  }

  > h1 {
    font-size: 3.7rem;
    font-weight: 700;
    line-height: 4.4rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    margin-left: 1.1rem;
  }

  > span {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin-left: 0.8rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    line-height: 160%;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

`;