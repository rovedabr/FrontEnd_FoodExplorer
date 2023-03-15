import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
height: 7.7rem;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: clamp(2rem, 1rem + 1vw, 2.4rem);
padding-right: clamp(10rem, 2rem + 1vw, 12.3rem);

background-color: ${({theme}) => theme.DARK.DARK_600};

font-family: 'DM Sans', sans-serif;
font-size: 1.2rem;
line-height: 1.6rem;
font-weight: 400;

color: ${({theme}) => theme.LIGHT.LIGHT_200};

> img {
  width: 14.4rem;
}

@media screen and (min-width: 1280px){
  padding: 2.4rem 12.3rem;  
}


`;