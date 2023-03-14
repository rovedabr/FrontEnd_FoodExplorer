import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.DARK.DARK_200};
  border: 1px solid ${({theme}) => theme.DARK.DARK_300};
  border-radius: 0.8rem;

  padding: 2.4rem;
  border: 1px red solid;

  > input {
    position: relative;
    top: -3rem;
    right: -8rem;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;

    align-items: center;

    margin-bottom: 1.2rem;
  }

  > h2 {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    text-align: center;
  }

  
  > strong {
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;

    text-align: center;
  }


  > button {
    appearance: none;
    border: none;
    background-color: ${({theme})=> theme.COLORS.TOMATO_100};

    margin-top: 1.6rem;
}

  > button img {
    width: 2.6rem;
    height: 2.4rem;

  }

  > h2 {
    font-size: 2.7rem;
    line-height: 3.8rem;
    font-weight: 500;
  
    margin-bottom: 1.5rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};

  }

  > span {
    display: none;
  }

  > strong {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    line-height: 5.1rem;
    font-weight: 400;
      
    margin-bottom: 1.5rem;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  @media screen and (min-width: 1280px){

    > span {
      display: flex;

      font-size: 1.6rem;
      line-height: 2.2rem;
      font-weight: 400;
        
      margin-bottom: 1.5rem;

      text-align: center;

      color: ${({theme}) => theme.LIGHT.LIGHT_300};
    }
  
  }

`;


