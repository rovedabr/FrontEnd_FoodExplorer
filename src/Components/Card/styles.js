import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div input:nth-child(2) {
    width: 2.4rem;
    height: 2.2rem;

    position: absolute;
    left: 53rem;
    top: 1rem;
  }
  
  > #card {
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

  > #card h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > #card p {
    display: none;
  }

  > #card span {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
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
