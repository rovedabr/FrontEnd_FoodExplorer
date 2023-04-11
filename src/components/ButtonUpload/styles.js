import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: left;

font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
line-height: 1.6rem;
font-weight: 400;

margin-right: 3.2rem;

> label div {
  height: 4.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  text-align: center;

  appearance: none;
  border-radius: 0.8rem;

  padding: 1.2rem 1.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_800};
  color: ${({theme}) => theme.LIGHT.LIGHT_500};
}

> label  p {
  display: block;
  margin-bottom: 1.6rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_400};
}

> label div input { 
  display: none;
}

> label div input::before {
  border-color: blue;
}
> label div input:hover {
  border-color: blue;
}
`;


