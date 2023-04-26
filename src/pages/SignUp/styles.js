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

  > img {
    width: 27rem;
    height: 4.4rem;

    margin-bottom: 7.3rem;
  }

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

    > img {
      margin-right: 30rem;
    }
   
  }
`;

export const Form = styled.div`
  width: 31.6rem;
  height: 41.6rem;
  
  background: transparent;

  > h1 {
    display: none;
  }

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

    > h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.5rem;

      text-align: center;

      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }
  }
`;

