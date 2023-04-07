import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 9.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.DARK.DARK_600};
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 3.2rem;
  padding: 2.4rem 12.3rem;

  > .brand img{
    width: 19.7rem;
    height: 3rem;
  }

  > div:nth-child(2) {
    width: 58rem;
    height: 4.8rem;
    align-items: center;
    justify-content: center;
  }

  > button {
    width: 21rem;
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
  }

  >.logout {
    width: 0.3rem;
    border: none;
    background: transparent;
  }

`