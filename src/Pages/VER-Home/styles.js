import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

border: 1px solid red;

`;

export const Form = styled.div`
  width: 30rem;
  height: 46rem;

  display: flex;
  flex-direction: row;
  margin-right: 2.7rem;


  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  >div input {
    display: flex;
    margin-top: 0rem;
    margin-left: 25rem;
    width: 2.4rem;
    border: 1px solid green;
  }

  > div img {
    width: 17.6rem;
    height: 17.6rem;
  }

  >div span {
    text-align: center;
    margin: 1.5rem 2.4rem;
  }

  > div button {

    width: 16.2rem;
    margin-bottom: 2.4rem;
    margin: 1px solid yellow; 
  }
`;