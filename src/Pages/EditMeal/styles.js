import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 36.4rem;

  margin: 1.1rem 3.2rem 5.3rem 3.2rem;

  > button {
    display: flex;
    align-items: flex-start;
    justify-content: left;

    margin-bottom: 2.4rem;
  }

  > h2 {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > .form2 .ingredients {
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

  > .buttons button:nth-child(2) {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
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

    margin-block: 3.2rem;


    > .form1,
      .form2 {
      display: flex;
      flex-direction: row;
    }

    > .form2 label:first-child   {
      display: flex;
      flex-direction: column;
      border: 1px red solid;
    }

    > .form2 #price {
      width: 25rem;
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

    > .form2 .ingredients .description{
      width: 84rem;
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