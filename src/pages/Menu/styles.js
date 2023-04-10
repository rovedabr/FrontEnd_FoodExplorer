import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > footer {
    width: 100%;
    height: 7.7rem;

    padding: 2.7rem;
  }

  > footer img {
    width: 14.3rem;
    height: 1.8rem;
  }
`;

export const MenuBar = styled.div`
  width: 100%;
  height: 11.4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: ${({theme}) => theme.DARK.DARK_700};

  > div span{
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    line-height: 2.5rem;
    font-weight: 400;
  
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  > div {
    width: 37.2rem;
    height: 3.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 5.6rem 2.8rem 2.4rem 2.8rem;
  }

  > div input {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1.6rem;
  }
`;

export const Form = styled.div`
  width: 90%;
  height: 117.7rem;

  padding: 3.6rem 2.8rem 1.4rem 2.8rem;

  > button, a {
    display: flex;
    justify-content: flex-start;

    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 300;
    text-align: left;
    
    border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_700};
  }

`;


