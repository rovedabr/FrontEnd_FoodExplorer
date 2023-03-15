import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  > div .buttons div {
    width: 10rem;
    height: 3.2rem;

    margin: 0 3.1rem 0;
  }

  > div .buttons button {
    width: 16rem;
    height: 3.2rem;

    margin-top: 1.6rem;
  }

  @media screen and (min-width: 1280px){
    > #card img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > #card h2 {
      font-size: 2.4rem;
      line-height: 3.3rem;
      font-weight: 700;
    }

    > #card p {
      width: 25.6rem;
      display: flex;

      text-align: center;
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 400;

      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }

    > #card span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 400;
      border: 1px solid green;

      color: ${({theme}) => theme.COLORS.CAKE_200};
    }
  }
`