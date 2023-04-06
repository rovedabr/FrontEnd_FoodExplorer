import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > main h1 {
    display: none;
  }
  
  > main div .input-wrapper,
    main div button,
    main h1 {
      margin-bottom: 3.2rem;
    }

  > div:nth-child(1) img {
    width: 27.8rem;
    height: 4.4rem;

    margin-bottom: 7.3rem;
  }

  > main .input-wrapper label {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};

    display: block;
    margin-bottom: 0.8rem;
  }



  @media screen and (min-width: 1280px){
    width: 112rem;
    height: 88rem;

    display: flex;
    align-content: space-between;
    justify-content: center;
    flex-direction: row;

    > main h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.5rem;

      text-align: center;

      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }
    
    > div:nth-child(1) {
      width: 32.4rem;
      margin: 25rem 30.6rem 32rem 0;
    }

    > div:nth-child(1) img {
      width: 32.4rem;
      height: 4.8rem;
    }
  }
`;

export const Form = styled.div`
  width: 31.6rem;
  height: 41.6rem;
  
  background: transparent;

 > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    margin-top: 3.2rem;
  }

  @media screen and (min-width: 1280px){
    width: 47.6rem;
    height: 62.1rem;
    
    padding: 3.2rem;
    border-radius: 1.6rem;

    background-color: ${({theme}) => theme.DARK.DARK_700};

  }
`;
