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
    align-items: center;
  }

  > div img {
    width: 2.4rem;
    height: 2.4rem;
    
    margin-right: .8rem;
  }

  > div a h1 {
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 700;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  >div a h1:hover {
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  >div a {
    text-decoration: none;
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
      width: 3rem;
      height: 3rem;
      
      margin-right: 1rem;
    }

    >div h1 {
      font-size: 2.4rem;
      line-height: 2.8rem;
      font-weight: 700;

      color: ${({theme}) => theme.LIGHT.LIGHT_100};
    }  

    > p {
      position: relative;
      top: -.5rem;
    }
  }
`;