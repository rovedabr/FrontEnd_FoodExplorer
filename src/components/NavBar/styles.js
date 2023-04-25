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

  //*===============================================================

  .menu {
    width: 30rem;
    height: 25rem;

    border-radius: .8rem;

    border: 1px red solid; //!!remover depois
    background-color: ${({theme}) => theme.DARK.DARK_300};
    opacity: 0.9;

    position: fixed;
    top: 5rem;
    left: 1.5rem;

    z-index: 1;
  }

  .menu div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    background-color: ${({theme}) => theme.DARK.DARK_700};
  }

  .menu input {
    /* width: 2rem; */
    opacity: 1;

    margin: 1rem 2rem auto 1rem;
  }

  .menu h1 {
    font-size: 2.8rem;
    color: white;
    opacity: 1;   
    
  }

  .menu .search {
    width: 80%;
    height: 4.8rem;
    display: flex;
    align-items: center;

    margin-top: 3rem;
    font-size: 2.8rem;
    border: 1px solid blue;
    color: white;
    opacity: 1;  
  }

  .menu .search input {
    width: 100%;
    height: 2.4rem;
    background: transparent;
    border: none;
  }

  .menu a {
    font-size: 2.8rem;
    color: white;
    opacity: 1;   
    
  }

  //*===============================================================

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