import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid blue;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  @media screen and (min-width: 768px) {
    flex-direction: column;    
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }

`;

export const BrandForm = styled.div`
  width: 32rem;
  height: 4.8rem;



  border: 1px red solid;
`;

export const Form = styled.div`
  width: 34.5rem;
  height: 50rem;

  border: 1px green solid;

`;

