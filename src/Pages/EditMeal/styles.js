import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 36.4rem;
  height: 92.3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 1.1rem 3.2rem 5.3rem 3.2rem;
  gap: 2.4rem;

  > button {
    display: flex;
    align-items: flex-start;
    justify-content: left;

    margin-bottom: 2.4rem;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    }

  > h2 {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }


  > div .Ingredients div {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    border-radius: 0.8rem;
    padding: 0.4rem 0.8rem;
    background-color: ${({theme}) => theme.DARK.DARK_800};

  }

  > div .Ingredients label {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};

    display: block;
    margin-bottom: 1.6rem;
  }


  > div label {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};

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
  }

  > .buttons button:first-child {
    background-color: ${({theme}) => theme.DARK.DARK_800};
    margin-right: 3.2rem;
  }

  > .buttons button:nth-child(2) {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
  }

  @media screen and (min-width: 780px){
    width: 50rem;
  }
  
  @media screen and (min-width: 1280px){
    width: 112rem;
    gap: 3.2rem;
    margin-block: 3.2rem;

    >.form1, .form2 {
      display: flex;
      flex-direction: row;
    }

    > .form1 button {
      width: 23rem;
    }

    > .form1 input {
      width: 48rem;
    }

    > .form1 select {
      width: 36.4rem;
    }

    > .form2 .Ingredients{
      width: 84rem;
      border: 1px red solid;
    }

    > .form2 .Ingredients div{
      width: 20rem;
    }

    > .form2 input {
      width: 25rem;
    }

    > .buttons {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    }

    > .buttons button {
      width: 18rem;
    }
    
  }



`;