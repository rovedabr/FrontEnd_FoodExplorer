import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 11.4rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}) => theme.DARK.DARK_700}; 

`;

export const Form = styled.div`
  width: 100%;
  height: 3.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 5.6rem 2.8rem 2.4rem 2.8rem;

  > img {
    width: 2.4rem;
  }

  > .receipt {
    width: 2.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > .receipt input {
    width: 2.6rem;
    height: 2.2rem;
  }

  .menu {
    width: 30rem;
    height: 25rem;

    display: flex;
    flex-direction: column;

    border-radius: .8rem;
    border: 1px solid ${({theme}) => theme.DARK.DARK_500}; 
    background-color: ${({theme}) => theme.DARK.DARK_300};
    box-shadow: rgba(0, 80, 100, 1) 0px 0px 5px 2px;

    opacity: 0.9;

    position: fixed;
    top: 5rem;
    left: 2rem;

    z-index: 99999;
  }

  .menu div:first-child {
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    background-color: ${({theme}) => theme.DARK.DARK_700};
  }


  .menu input {
    width: 2rem;

    margin: 1.5rem 2rem auto 1rem;
    outline: none;
  }

  .menu h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.LIGHT.LIGHT_100};    
  }

  .menu .search {
    width: 80%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;

    background-color: ${({theme}) => theme.DARK.DARK_900};

    margin-top: 3rem;
    margin-bottom: 3rem;

    border-radius: 0.5rem;
    border: 1px solid ${({theme}) => theme.DARK.DARK_1000}; 
  }

  .menu .search img {
    height: 2.4rem;
    margin: 0.5rem;
  }

  .menu .search input {
    width: 100%;
    height: 4.5rem;
    background: transparent;
    border: none;
    margin-top: 0;

    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.LIGHT.LIGHT_300};
  }

  .menu a {
    width: 80%;

    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 300;

    text-decoration: none;

    color:  ${({ theme }) => theme.LIGHT.LIGHT_300}; 

    border-bottom: 0.1rem solid ${({theme}) => theme.DARK.DARK_1000};
    margin-left: 2rem;
  }

  .menu a:hover {
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  >div span {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    padding: 0.02rem 0.55rem;
    border-radius: 9.9rem;

    position: relative;
    right: 1rem;
    top: -1rem;

    z-index: 1;
  }
`;