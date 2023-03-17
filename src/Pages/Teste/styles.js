import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .note-wrapper {
    width: 36.4rem;
    height: 17.2rem;
  }

  > .note-wrapper label {
    display: block;

    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    color: ${({theme}) => theme.LIGHT.LIGHT_400};

    margin-bottom: 1.6rem;
  }

  > button {
    width: 20rem;
    border: 1px solid blue;
  }
  
`;


