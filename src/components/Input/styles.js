import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.DARK.DARK_900};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1.4rem;
  
  border-radius: 0.8rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_300};

  > label {
    display: block;
  }

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

    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400; 
    color: ${({theme})=> theme.LIGHT.LIGHT_300};
    outline-color: ${({theme}) => theme.COLORS.CAKE_100};
    outline-width: thin;
   
    &::placeholder {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400; 

      color: ${({theme})=> theme.LIGHT.LIGHT_500};
    }    
  }
`;