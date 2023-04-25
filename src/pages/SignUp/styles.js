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

  > main div .input-wrapper,
    main div button,
    main h1 {
      margin-bottom: 3.2rem;
  }

  > main div .input-wrapper input:-webkit-autofill  {
    -webkit-box-shadow: 0 0 0 30px  ${({theme}) => theme.DARK.DARK_900} inset;
    -webkit-text-fill-color: ${({theme}) => theme.LIGHT.LIGHT_100};
    font-size: 1.6rem;
  }

  > main div .input-wrapper .password {
    -webkit-text-security: disc;
  }

  > div:nth-child(1) {
    width: 27.8rem;
    height: 4.4rem;

    margin-bottom: 7.3rem;
  }

  > div:nth-child(1) img {
    width: 4.3rem;
    height: 4.3rem;
  }

  > div:nth-child(1) h1 {
    font-size: 3.7rem;
    line-height: 4.3rem;
  }

  > main h1 {
    display: none;
    color: red;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin: 25rem 30.6rem 32rem 0;
    }

    > div:nth-child(1) img {
      width: 4.9rem;
      height: 4.8rem;

      margin-right: 1.9rem;
    }

    > div:nth-child(1) h1 {
      font-size: 4.2rem;
      line-height: 4.9rem;
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
    
    padding: 6.4rem;
    border-radius: 1.6rem;
    gap: 1.5rem;

    background-color: ${({theme}) => theme.DARK.DARK_700};
  }
`;

