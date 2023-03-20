import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  padding: 0.8;
  background-color: ${({theme, isNew}) => isNew ? "red" : "blue"};
  color: ${({theme, isNew}) => isNew ? "red" : "blue"};

  /* color: ${({theme, isNew}) => isNew ? theme.LIGHT.LIGHT_500 : theme.LIGHT.LIGHT_100}; */
  /* background-color: ${({ theme, isNew }) => isNew ? `transparent` : theme.LIGHT.LIGHT_600}; */

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.LIGHT.LIGHT_500}`: `1px solid ${theme.LIGHT.LIGHT_600}`};

  >  button {
    appearance: none;
    border: none;

    background: transparent;
  }

  > .button-delete {
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  > .button-add {
    color: ${({theme}) => theme.LIGHT.LIGHT_500};
  }

  > input {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0.8rem;

    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight:400;
    text-align: center;

    background: transparent;
    border: none;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }
`