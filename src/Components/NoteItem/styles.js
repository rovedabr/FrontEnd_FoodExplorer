import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;

background-color: ${({theme}) => theme.DARK.DARK_800};
margin: .8rem;
padding: 0.8rem;

> input {
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  text-align: left;

  color: ${({theme, isNew}) => isNew ? theme.LIGHT.LIGHT_500 : theme.LIGHT.LIGHT_100};

  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.LIGHT.LIGHT_600};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.LIGHT.LIGHT_500}` : `1px solid ${theme.LIGHT.LIGHT_600}`};
}

> button {
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: flex-end;

  appearance: none;
  background: transparent;
  border: none;

  font-size: 2.4rem;
  position: relative;
  right: 3rem;
}

> .button-add {
  color: ${({theme}) => theme.LIGHT.LIGHT_500};
}

> .button-delete {
 color: ${({theme}) => theme.LIGHT.LIGHT_100};
}


`;
