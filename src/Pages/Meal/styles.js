import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


  > nav {
    display: flex;
  }

  > header {
    display: none;
  }

  @media screen and (min-width: 1280px){
    > nav {
      display: none;
    }

    > header {
      display: flex;
    }

  }

`;

export const Form = styled.div`
  width: 31.6rem;
  height: 67.7rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1.7rem 5.2rem 3.3rem 5.2rem;

  > button {
    width: 10.2rem;
    height: 3.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    appearance: none;
    background-color: transparent;
    border: none;

    margin-top: 1.5rem;
    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 500;
    
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > div img {
    width: 26.4rem;
    height: 26.4rem;
    
    margin: 1.5rem 2.6rem;
  }

  > div h2, span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > div h2 {
    font-size: 2.7rem;
    line-height: 3.7rem;
    font-weight: 500;
  }

  > div span {
    font-size: 1.6rem;
    line-height: 2.7rem;
    font-weight: 400;
  }

  > .tags {
    width: 31.6rem;
    height: 10rem;

    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2.4rem;

    margin: 2.4rem auto 4.5rem;
  }

  > .buttons {
    display: flex;
    flex-direction: row;
  }

  .buttons button img {
    width: 1.8rem;
    height: 1.5rem;

    margin: 0;
  }

  .buttons button {
    font-size: 0.9rem;
    line-height: 1.7rem;
  }
`;