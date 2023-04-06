import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 2.4rem;
  line-height: 3.3rem;
  font-weight: 500;
  text-decoration: none;

  color: ${({theme}) => theme.LIGHT.LIGHT_300};

  background: transparent;

  >img  {
    width: 1.2rem;
    height: 2.2rem;

    margin-right: 1.1rem;
  }


`;