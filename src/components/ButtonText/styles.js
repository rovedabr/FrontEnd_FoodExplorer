import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  text-decoration: none;
  
  background: transparent;
  border: none;

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;

  color: ${({theme}) => theme.LIGHT.LIGHT_100};

  > span {
    padding: 1rem;
  }

`;