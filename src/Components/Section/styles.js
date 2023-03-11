import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid blue;

  > h2 {
    font-size: 3.2rem;
    line-height: 4.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > span {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }


`;


