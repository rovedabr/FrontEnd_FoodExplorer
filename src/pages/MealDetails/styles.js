import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
    "nav"
    "main"
    "footer"
  ;

  flex-direction: column;
  align-items: center;

  
  > main {
    width: 100%;
    height: 70%;
    grid-area: main;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > nav {
    display: flex;
    grid-area: nav;
  }

  > header {
    display: none;
    grid-area: header;
  }

  > footer {
    grid-area: footer;
  }


  > main a {
    width: 100%;
    height: 3.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    appearance: none;
    background-color: transparent;
    border: none;

    margin-top: 1.5rem;
    margin-left: 5.6rem;
    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 500;
    
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  } 

  > div .buttons .addRemoveButton {
    width: 10rem;
    height: 3.2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  > div .buttons .addRemoveButton input:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }

  > div .buttons .addRemoveButton span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    margin: 0 1.4rem;
  } 

   @media screen and (min-width: 1280px){
    display: grid;
    grid-template-rows: 9.6rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "main"
    "footer";
    flex-direction: column;
    align-items: center;

    > nav {
      grid-area: nav;
      display: none;
    }

    > header {
      grid-area: header;
      display: flex;
    }


    > footer {
      grid-area: footer;
    }

    > main {
      grid-area: main;
      display: flex;

    }

    > main a {
      width: 100%;
      height: 3.4rem;

      margin-top: 2.4rem;
      margin-left: 12.2rem;
   }

  }

`;

export const Form = styled.div`
  width: 31.6rem;
  height: 72.9rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1.7rem 5.6rem 3.6rem 5.6rem;


  > div img {
    width: 26.4rem;
    height: 26.4rem;
    
    margin: 1.5rem 2.6rem;
  }

  > div h2, span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > div h2 {
    font-size: 2.7rem;
    line-height: 3.7rem;
    font-weight: 500;
  }

  > div span {
    font-size: 1.6rem;
    line-height: 2.7rem;
    font-weight: 400;
  }

  >#menu .content .tags {
    width: 31.6rem;
    height: 10rem;

    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2.4rem;

    margin: 2.4rem auto 4.5rem;
  }

  >#menu .content .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    margin-bottom: 0;
  }

  >#menu .content .buttons button img {
    width: 1.8rem;
    height: 1.5rem;

    margin: 0;
  }

  >#menu .content .buttons button {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }


  @media screen and (min-width: 1280px){
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10rem 12rem 15rem 12rem;

    > #menu {
      display: flex;
      flex-direction: row;
    }
    
    > #menu img {
      width: 39rem;
      height: 39rem;

      margin-right: 4.7rem;
    }

    > #menu .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    > #menu .content .mealData {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

   > #menu .content .mealData h2 {
      font-size: 4rem;
      line-height: 5.6rem;
      font-weight: 500;

      text-align: left;
    }

    > #menu .content .mealData span {
      font-size: 2.4rem;
      line-height: 3.3rem;
      font-weight: 400;

      text-align: left;
    }

    > #menu .content .tags {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;

      margin: 0;
    }

  }
`; 