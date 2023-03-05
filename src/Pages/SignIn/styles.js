import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.DARK.DARK_400};
  color: white;
  font-size: 40px;
  text-transform: uppercase;
`;