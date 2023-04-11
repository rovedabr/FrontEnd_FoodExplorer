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

  > .receipt img{
    display: none;
  }

  >div span {
    display: none;
  }
`;