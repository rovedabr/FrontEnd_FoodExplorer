import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({theme}) => theme.DARK.DARK_900};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 1.4rem;
  gap: 1.4rem;
  
  border-radius: 0.8rem;

  > input {
    width: 100%;
    height: 100%;
    
    background-color: transparent;
    border: none;

    &::placeholder {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400; 

      color: ${({theme})=> theme.LIGHT.LIGHT_500};
    }

    
  }


`;