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
    grid-area: navbar;    
  }

  > main{
    grid-area: main;
  }

  > footer {
    grid-area: footer;
  }
`;

export const Content = styled.div`
  width: 30.3rem;
  height: 65.6rem;

  margin: 5.6rem 9rem 21.4rem 3.5rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.48rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    margin-bottom: 2.7rem;
  }
`
export const Form = styled.div`
  width: 4.5rem;
  height: 5rem;

`;