import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 2.4rem;
  line-height: 3.3rem;
  font-weight: 500;

  color: ${({theme}) => theme.LIGHT.LIGHT_300};

  background: transparent;
  border: none;

  >img  {
    width: 1.2rem;
    height: 2.2rem;

    margin-right: 1.1rem;
  }


`;