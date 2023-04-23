import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 
   "navbar"
   "main"
   "footer";
  grid-template-columns: 100%;
  grid-template-rows: 10.4rem auto 7.7rem;

  > nav {
    display: flex;
    grid-area: navbar;    
  }

  > header {
    display: none;
    grid-area: header;
  }

  > footer {
    grid-area: footer;
  }

  > main {
    width: 100%;
    grid-area: main;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1280px){
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "main"
    "footer";
    grid-template-columns: 100%;
    grid-template-rows: 10.4rem auto 7.7rem;

    > nav {
      display: none;
      grid-area: nav;
    }

    > header {
      display: flex;
      grid-area: header;
    }

    > main {
      grid-area: main;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }

    > footer {
      grid-area: footer;
    }

  }
`;

export const Form = styled.div`
  width: 50rem;
  grid-area: form;
  border: 1px solid blue;

> button {
  width: 21rem;
  height: 4.8rem;

  margin: 3.1rem 3.7rem 13.5rem auto;  
}

`

export const Content = styled.div`
  width: 50rem;
  height: 65.6rem;

  display: flex;
  flex-direction: column;

  margin: 0 9rem 21.4rem 3.5rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.48rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
    margin: 3.4rem auto 2.7rem 3.5rem;
  }
`

export const Form2 = styled.div`
  width: 60rem;
  height: 60rem;
  grid-area: form2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px red solid;


  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.48rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
    margin: 3.4rem auto 2.7rem 3.5rem;
  }

  .payForm {
    width: 53rem;
    height: 44.5rem;

    border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_600};
    border-radius: 0.8rem;
    margin-left: 3.5rem;

  }

`
