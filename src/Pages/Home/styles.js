import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

border: 1px solid red;


`;

export const Form = styled.div`
  width: 30rem;
  height: 46rem;

  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > input {
    position: absolute;
    right: 0;
    border: 1px purple solid;
  }

  border: 1px solid green;

  > div img {
    width: 17.6rem;
    height: 17.6rem;
  }

  div button {
    display: block;
    position: relative;
    right: 0;
    top: 0;
    cursor: pointer;
    margin-right: 1.6rem;
    margin-top: 1.6rem;
    width: 20px;
    height: 20px;

    margin: 1px solid yellow;
  }
`;