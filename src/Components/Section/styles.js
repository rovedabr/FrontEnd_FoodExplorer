import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > h2 {
    font-size: 1.8rem;
    line-height: 1.4rem;
    font-weight: 500;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    margin: 6.2rem auto 2.4rem 2.4rem;
  }

  > span {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }


`;


