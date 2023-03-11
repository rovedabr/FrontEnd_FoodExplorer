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


  border: 1px solid green;

  > div img {
    width: 17.6rem;
    height: 17.6rem;
  }

  div button {
    width: 20px;
    height: 20px;

    margin: 1px solid yellow;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;


  }
`;