import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

> #add {
  width: 2.4rem;
  height: 2.4rem;

  margin-left: 2.4rem;
}

> #remove {
  width: 2.4rem;
  height: 2.4rem;

  margin-right: 2.4rem;
}

> #add:hover,
  #remove:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }

> span {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;

  color: ${({theme}) => theme.LIGHT.LIGHT_300};

  margin: 0 1.4rem;
}

`;