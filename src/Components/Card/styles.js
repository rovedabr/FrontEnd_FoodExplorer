import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;

  border: 1px solid blue;
  /* border: 1px solid ${({theme}) => theme.DARK.DARK_300}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.DARK.DARK_200};

  border-radius: 0.8rem;
  padding: 2.4rem;
  gap: 1.2rem;

`
