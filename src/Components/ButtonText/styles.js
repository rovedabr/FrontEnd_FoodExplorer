import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  background: transparent;
  border: none;

  line-height: 2.4rem;
  font-weight: 500;

  color: ${({theme}) => theme.LIGHT.LIGHT_100};
`;