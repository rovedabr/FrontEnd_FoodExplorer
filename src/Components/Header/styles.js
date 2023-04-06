import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 9.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12.3rem;
  gap: 3.2rem;

  background-color: ${({theme}) => theme.DARK.DARK_600};

  > div input {
    width: 58rem;
    height: 4.8rem;
    align-items: center;
    justify-content: center;
  }

  > div.newMeal {
    width: 2.1rem;
  }

  >.logout {
    border: none;
    background: transparent;
  }

`