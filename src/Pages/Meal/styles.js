import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

    
  > main {
    width: 42.8rem;
    height: 11.4rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 1.7rem 6rem 3.4rem;
  }

  > footer {
    width: 42.8rem;
    height: 7.7rem;
  }
`;

export const Form = styled.div`
  width: 31.6rem;
  height: 67.7rem;

  
  border: 1px solid green;


  > button {
    width: 10.2rem;
    height: 3.4rem;

    display: flex;
    flex-direction: row;
    align-items: center; 

    appearance: none;
    background-color: transparent;
    border: none;

    margin: 3.7rem auto 1.7rem 0;
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
    color: white;
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
    height: 20rem;

    border: 1px solid pink;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2.4rem;
    gap: 2.4rem;
  }

  > .buttons {
    display: flex;
    flex-direction: row;
  }
`;