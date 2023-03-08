import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid blue;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15.6rem 5.6rem 24.5rem 5.6rem;

  > div:nth-child(1) {
    width: 22.8rem;
    margin-bottom: 7.3rem;
  }

  @media screen and (min-width: 900px){
    display: flex;

    flex-direction: row;

    padding: 9rem 10rem 11rem 15rem;
  }

  border: 1px red solid;
`;

export const Form = styled.div`
  width: 34.5rem;
  height: 50rem;

  border: 1px green solid;
  /* margin: 9rem 10rem auto auto; */

`;

