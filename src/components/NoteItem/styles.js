import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

background-color: ${({theme}) => theme.DARK.DARK_800};
margin: 1.6rem;

padding: 1rem 1.6rem;
border-radius: 0.8rem;

background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.LIGHT.LIGHT_600};

border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.LIGHT.LIGHT_500}` : `1px solid ${theme.LIGHT.LIGHT_600}`};

> input {
  width: 10rem;
  appearance: none;
  background: transparent;
  border: none;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  text-align: center;

  color: ${({theme, isNew}) => isNew ? theme.LIGHT.LIGHT_500 : theme.LIGHT.LIGHT_100};
}

> button {
  appearance: none;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: center;
  align-items: center;

  font-size: 2.4rem;
}

> .button-add {
  color: ${({theme}) => theme.LIGHT.LIGHT_500};
}

> .button-delete {
 color: ${({theme}) => theme.LIGHT.LIGHT_100};
}


`;
