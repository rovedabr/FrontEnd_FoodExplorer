import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 9.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 12.3rem;

  background-color: ${({theme}) => theme.DARK.DARK_600};

  > img {
    margin: 0  3.2rem 0 12.3rem;
  }

  > div input {
    width: 58.1rem;
    height: 4.8rem;

    padding: 1.2rem;
  }

  > button {
    width: 30rem;
    height: 4.8rem;

    margin-left: 3.2rem;
    margin-right: 3.2rem;
  }

`