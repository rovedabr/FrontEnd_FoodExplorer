import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;
  
  display: flex;
  flex-direction: row;
  
  background-color: ${({theme}) => theme.DARK.DARK_700};
`;