import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 36.4rem;
  height: 92.3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1.1rem 3.2rem 5.3rem 3.2rem;
  gap: 2.4rem;

  > button {
    display: flex;
    align-items: flex-start;
    justify-content: left;

    margin-bottom: 2.4rem;
  }

  > h2 {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > label {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};

    display: block;
    margin-bottom: 1.6rem;
  }

  > div select {
    display: flex;
    flex-direction: row;
  }

  > div select svg {
    fill: white;
    display: flex;
    flex-direction: row;

    border: 1px blue solid;
}

`