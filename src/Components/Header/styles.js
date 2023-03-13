import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 12.3rem;

  background-color: ${({theme}) => theme.DARK.DARK_600};

  > img {
    margin-right: 3.2rem;
  }

  > input {
    width: 58.1rem;
  }

  > button {
    width: 21.6rem;
    margin-left: 3.2rem;
    margin-right: 3.2rem;
  }

`