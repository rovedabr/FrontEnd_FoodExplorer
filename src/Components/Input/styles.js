import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.DARK.DARK_900};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 3.2rem;
  gap: 1.4rem;
  
  border-radius: 0.8rem;

  > svg {
    margin-left: 1.2rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_400};
  }

  > input {
    width: 100%;
    height: 100%;
    
    background-color: transparent;
    border: none;
    padding: 1.2rem 1.4rem;

    color: ${({theme})=> theme.LIGHT.LIGHT_500};
    outline-color: ${({theme}) => theme.COLORS.CAKE_100};
   
    &::placeholder {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400; 

      color: ${({theme})=> theme.LIGHT.LIGHT_500};
    }    
  }
`;