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

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.48rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
    margin: 3.4rem auto 2.7rem 3.5rem;
  }

  .payForm div {
    display: flex;
    flex-direction: row;
  }

  .payForm {
    width: 53rem;
    height: 44.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_600};
    border-radius: 0.8rem;
    margin-left: 3.5rem;
  }

  .payForm p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  .payForm .input-wrapper {
    width: 35rem;
    height: 35rem;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .payForm .input-wrapper {
    width: 35rem;
    display: flex;
    flex-direction: column;
    margin-top: 5.7rem;
  }

  .payForm .input-wrapper .cardNumber {
    display: flex;
    flex-direction: column;
  }

  .payForm .input-wrapper .cardData {
    display: flex;
    flex-direction: row;
  }


  .payForm .input-wrapper .cardNumber label,
  .payForm .input-wrapper .cardData label {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    color:  #C4C4CC;

    margin-bottom: .8rem;    
  }

  .payForm .input-wrapper .cardData .validity,
  .payForm .input-wrapper .cardData .cvc {
    display: flex;
    flex-direction: column;

    font-size: 1.6rem;
    color:  #C4C4CC;

    margin-bottom: .8rem;
    margin-top: 2rem;
  }

  .payForm .input-wrapper .cardNumber input{
    width: 34rem;
    height: 4.8rem;

    padding: 1.2rem 1.4rem;
    gap: 1.4rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    background-color: transparent;
    border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_100};
    border-radius: .5rem;

    &::placeholder{
      font-size: 1.6rem;
    }
  }

  .payForm .input-wrapper .cardData input{
    width: 16.6rem;
    height: 4.8rem;

    padding: 1.2rem 1.4rem;
    gap: 1.4rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    background-color: transparent;
    border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_100};
    border-radius: .5rem;


    &::placeholder{
      font-size: 1.6rem;
    }
  }

  .payForm .input-wrapper .cardData input:nth-child(2){
    margin-inline: .4rem;
  }

  > div button {
    width: 34rem;

    margin: 3.7rem auto 5.6rem;
  }

  .payForm .pixForm {
    width: 26.5rem;
    height: 8.1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({theme}) => theme.DARK.DARK_800};
    border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_600};
    border-radius: 0.8rem 0 0 0;
  }

  .payForm .pixForm input {
    color: white;
  }

  .payForm .cardForm {
    width: 26.5rem;
    height: 8.1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({theme}) => theme.DARK.DARK_800};
    border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_600};
    border-radius: 0 0.8rem 0 0;
  }

  .codeInput-wrapper {
    margin: 3.1rem 8.5rem;
  }

`
