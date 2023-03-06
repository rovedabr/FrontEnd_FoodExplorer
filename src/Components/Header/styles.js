import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme}) => theme.DARK.DARK_600};
`;