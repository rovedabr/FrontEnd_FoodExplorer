import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > main {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;

    overflow-y: auto;
  }

  > strong {
    font-size: 40rem;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TOMATO_300};
  }

  > main #buttonBack {
    display: flex;
    align-items: flex-start;
    justify-content: left;

    margin-bottom: 2.4rem;
    margin-top: 1.1rem;

  }

  > main h2 {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }


  > nav {
    display: flex;
  }

  > header {
    display: none;
  }

  @media screen and (min-width: 1280px){
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > main {
      padding: 4rem 12.5rem 11.6rem 12.3rem;
    }

    > nav {
    display: none;
  }

  > header {
    display: flex;
  }

  > main #buttonBack {
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2.4rem;
  }

  > main h2 {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    margin-bottom: 3.2rem;
  }
  }
`;

export const Form = styled.div`
  width: 36.4rem;
  height: 100vh;

  margin: 1.1rem 3.2rem 5.3rem 3.2rem;

  > .form2 .ingredients {
    width: 100%;
    min-height: clamp(4.8rem, 1rem + 1vh, 15rem);

    display: flex;
    flex-wrap: wrap;

    border-radius: 0.8rem;
    padding: 0.4rem 0.8rem;
    background-color: ${({theme}) => theme.DARK.DARK_800};
  }

  > .form2 .ingredients div {
    width: 40%;
  }

  > .form1 label,
    .form2 label,
    .description label  {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
    margin-top: 2.4rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};
    
    display: block;

  }

  > .form2 div label,
    .description label {
      margin-bottom: 1.6rem;
  }

  > .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    margin-top: 2.4rem;
  }

  > .buttons button:first-child {
    background-color: ${({theme}) => theme.DARK.DARK_800};
    margin-right: 3.2rem;
  }

  > .buttons button:first-child:hover {
    background-color: ${({theme}) => theme.LIGHT.LIGHT_700};
    transition: background-color 0.5s;
  }

  > .buttons button:nth-child(2) {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
  }

  > .buttons button:nth-child(2):hover {
    background-color: ${({theme}) => theme.COLORS.TOMATO_300};
    transition: background-color 0.5s;
  }

  @media screen and (min-width: 780px){
    width: 50rem;

    > .form2 .ingredients div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }

  }
  
  @media screen and (min-width: 1280px){
    width: 112rem;
    height: 50.8rem;

    margin: 0;

    > .form1,
      .form2,
      .ingredients {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    > .form1 button {
      width: 23rem;
    }

    > .form1 input {
      width: 46.3rem;
      margin-right: 3.2rem;
    }

    > .form1 select {
      width: 36.4rem;
    }

    > .form2 {
      display: flex;
      justify-content: space-between;
    }

    > .form2 .dish {
      display: flex;
      flex-direction: column;
    }

    > .form2 .dish div {
      margin: 0;
    }

    > .form2 .ingredients {
      width: 84rem;

      justify-content: left;
      gap: 1.6rem;
    }

    > .form2 .ingredients div {
      width: 15rem;  
      padding: 0;
    }

    > .form2 #price {
      width: 25rem;
    }

    > .form2 .ingredients button {
      width: 1.5rem; 
      
      font-size: 3.6rem;
    }

    > .buttons {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
      margin-top: 3.2rem;
    }

    > .buttons button {
      width: 18rem;
    }
    
  }

`;