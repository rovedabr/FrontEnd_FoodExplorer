import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;


  background-color: ${({theme}) => theme.DARK.DARK_200};
  
  border: 1px solid ${({theme}) => theme.DARK.DARK_300};
  border-radius: 0.8rem;
  gap: 1.2rem;

  > input {
    display: flex;
    position: relative;
    top: -1rem;
    right: -8rem;

    z-index: 1;

    border: 1px solid green;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > h2 {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 400;
    text-align: center;

    color: ${({theme}) => theme.LIGHT.LIGHT_400}
  }

  > span {
    font-size: 1.6rem;
    line-height: 1.6em;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  > .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > .buttons div:nth-child(1) {
    width: 10rem;
  }

  > .buttons button {
    width: 16.2rem;
    height: 3.2rem;

    margin-top: 1.6rem;
  }

`;
