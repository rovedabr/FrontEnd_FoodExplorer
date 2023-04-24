import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > input {
    width: 2.5rem;
    height: 2.5rem;
    
    margin-right: .8rem;
  }

  > input:hover {
    transform: scale(1.3);
    transition: 0.5 ease-in-out;
  }

  > h1 {
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 700;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  @media screen and (min-width: 1280px){
    > img {
      width: 4.9rem;
      height: 4.7rem;
      
      margin-right: 1.9rem;
    }

  > h1 {
      font-size: 4.2rem;
      line-height: 4.9rem;
    }
  }

`;
