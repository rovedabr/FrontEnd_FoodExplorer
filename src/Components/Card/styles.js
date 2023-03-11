import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid blue;

  > h2 {
    font-size: 2.7rem;
    line-height: 3.8rem;
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

  > strong {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    line-height: 5.1rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }


`;


