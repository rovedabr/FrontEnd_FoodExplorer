import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
height: 7.7rem;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

padding: 2.9rem 2.7rem;

background-color: ${({theme}) => theme.DARK.DARK_600};

font-family: 'DM Sans', sans-serif;
font-size: 1.2rem;
line-height: 1.6rem;
font-weight: 400;

color: ${({theme}) => theme.LIGHT.LIGHT_200};

> img {
  width: 14.4rem;
}

`;