import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: row;
  }

  >div img {
    width: 2.5rem;
    height: 2.5rem;
    
    margin-right: .8rem;
  }

  > div h1 {
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 700;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  > p {
    font-size: 1.2rem;
    line-height: 1.9rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
    margin-left: 0.8rem;
  }

  @media screen and (min-width: 1280px){
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
    >div img {
      width: 4.94rem;
      height: 4.75rem;
      
      margin-right: 1.9rem;
    }

    >div h1 {
      font-size: 4.2rem;
      line-height: 4.9rem;
      font-weight: 700;

      color: ${({theme}) => theme.LIGHT.LIGHT_100};
    }  

    > p {
      position: relative;
      top: -.5rem;
    }
  }
`;