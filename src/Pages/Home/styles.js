import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > nav {
    width: 100%;
    border: 1px red solid;
    
    display: flex;
  }

  > header {
    display: none;
    border: 1px solid pink;
  }

  > footer {
    padding: 2.4rem 12.3rem;
  }

  .cards {
    display: flex;
    flex-direction: row;
  }

  .card {
    width: 21rem;
    height: 29.2rem;

    display: flex;
    flex-direction: column;
    margin-right: 1.6rem;
  }

  .card:nth-child(1) {
    margin-left: 2.4rem;
  }

/*   .card input {
    width: 2.4rem;
    height: 2.2rem;

    z-index: 1;
  } */
`
/*   @media screen and (min-width: 1280px){
    width: 100%;
    
    > nav {
      border: 1px blue solid;
      display: none;
    }

    > header {
      display: flex;
    }  
  }
`; */

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`


/* export const Container = styled.div`
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
`; */