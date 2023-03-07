import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({theme}) => theme.DARK.DARK_400};

`;



export const Form = styled.div`

  @media only screen and (min-width: 480px) {
    display: flex;
    flex-direction: column;

    width: 31.6rem;
    margin: 15.8rem auto;

    > .brand {
      margin-bottom: 7.3rem;
    }

    > label span {
      display: block;
      margin-bottom: 0.8rem;

    }

    > label {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400;

      margin-bottom: 10px;

      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }

    > input {
      margin-top: 15rem;
    }

    > button {
      margin-bottom: 3.2rem;
    }   

  }

`;