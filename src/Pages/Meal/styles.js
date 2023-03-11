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
`;