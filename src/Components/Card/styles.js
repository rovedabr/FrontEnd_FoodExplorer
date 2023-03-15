import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div input:nth-child(2) {
    border: 1px solid red;
  }

  > div input:nth-child(2) {
    display: flex;
    position: absolute;
    left: 0;
  }
  
  > div {
    width: 21rem;
    height: 29.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.DARK.DARK_200};
    
    border: 1px solid blue;
    /* border: 1px solid ${({theme}) => theme.DARK.DARK_300}; */
    border-radius: 0.8rem;
    padding: 2.4rem;
    gap: 1.2rem;
  }

  > div img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > div h2 {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > div p {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }




`
