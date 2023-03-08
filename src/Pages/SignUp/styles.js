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


  > div:nth-child(1) img {
    width: 22.8rem;
    margin-bottom: 7.3rem;
  }

  @media screen and (min-width: 1000px){
    width: 112rem;
    height: 88rem;

    display: flex;
    align-content: space-between;
    justify-content: center;
    flex-direction: row;

    > div:nth-child(1) {
      width: 32.4rem;
      margin: 25rem 30.6rem 32rem 0;
    }

    > div:nth-child(1) img {
      width: 32.4rem;
    }
  }

  border: 1px red solid;



`;

export const Form = styled.div`
  width: 34.5rem;
  height: 50rem;

  border: 1px green solid;
  /* margin: 9rem 10rem auto auto; */

`;

