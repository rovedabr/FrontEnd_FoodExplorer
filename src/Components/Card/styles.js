import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({theme}) => theme.DARK.DARK_200};
  border: 1px solid ${({theme}) => theme.DARK.DARK_300};
  border-radius: 0.8rem;


  > button {
    appearance: none;
    border: none;
    background-color: red;
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
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;
      
    margin-bottom: 1.5rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > strong {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    line-height: 5.1rem;
    font-weight: 400;
      
    margin-bottom: 1.5rem;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }


`;


