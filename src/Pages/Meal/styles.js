import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: 42.8rem;
    height: 11.4rem;
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

    margin: 3.7rem auto 1.7rem 5.6rem;
    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 500;
    
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }


`;