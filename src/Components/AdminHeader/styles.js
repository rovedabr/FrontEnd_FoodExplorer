import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 9.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12rem;
  gap: 3.2rem;

  background-color: ${({theme}) => theme.DARK.DARK_600};

  > img {
    margin: 0  3.2rem 0 12.3rem;
  }

  > div input {
    width: 58rem;
    height: 4.8rem;
  }

  > button {
    width: 40rem;
    height: 4.8rem;

    padding: 1.2rem 3.2rem;
  }

`