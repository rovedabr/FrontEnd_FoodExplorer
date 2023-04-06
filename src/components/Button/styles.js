import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${({theme}) => theme.LIGHT.LIGHT_100};

  padding: 1.2rem 3.2rem;
  gap: 0.8rem;
  border: none;
  border-radius: 0.5rem;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};


`;