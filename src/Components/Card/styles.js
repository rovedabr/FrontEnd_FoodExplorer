import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > div {
    width: 21rem;
    height: 29.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.DARK.DARK_200};
    
    border: 1px solid blue;
    /* border: 1px solid ${({theme}) => theme.DARK.DARK_300}; */
    border-radius: 0.8rem;
    padding: 2.4rem;
    gap: 1.2rem;
  }

  > div img {
    width: 8.8rem;
    height: 8.8rem;
  }




`
