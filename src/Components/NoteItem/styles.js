import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  padding: 0.8;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.LIGHT.LIGHT_600 };

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.LIGHT.LIGHT_500}`: `1px solid ${theme.LIGHT.LIGHT_600}`};

  >  button {
    appearance: none;
    border: none;

    background: transparent;
  }

  > .button-delete {
    color: ${({theme}) => theme.LIGHT.LIGHT_100}
  }

  > .button-add {
    color: ${({theme}) => theme.LIGHT.LIGHT_500}
  }

  > input {
    height: 100%;
    height: 3.2rem;

    padding: 1rem 1.6rem;
    gap: 1.6rem;

    background: transparent;
    /* border: none; */

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }
`