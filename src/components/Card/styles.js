import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  border: 1px solid ${({theme}) => theme.DARK.DARK_300};
  border-radius: 0.8rem;

  > svg {
    position: relative;
    right: -8rem;
    top: 3.5rem;
    color: ${({ theme }) => theme.LIGHT.LIGHT_100};

    z-index: 1;
  }

  > div input:nth-child(2) {
    width: 2.4rem;
    height: 2.2rem;

    position: relative;
    right: -8.5rem;
    top: -.3rem;
    
    color: ${({ theme }) => theme.LIGHT.LIGHT_100};

    z-index: 1;
  }

  
  @media screen and (min-width: 1280px) {

    > div input:nth-child(2)  {
      width : 3.4rem;
      height: 3.4rem;

      position: relative;
      right: -12.5rem;
      top: -0.5rem; 
    }

  }  

`;

  export const Content = styled.div`
    width: 21rem;
    height: 29.2rem;

    padding: 2.4rem;
    background-color: ${({theme}) => theme.DARK.DARK_200};

    border: 1px solid ${({theme}) => theme.DARK.DARK_300}; 
    border-radius: 0.8rem;

    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    > img {
      width: 8.8rem;
      height: 8.8rem;
    }
    
    > a {
      text-decoration: none;
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
    }

    > a:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
      color: ${({theme}) => theme.COLORS.CAKE_200};
    }

    > h2 {
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 500;

      color: ${({theme}) => theme.LIGHT.LIGHT_300};
    }

    > p {
      display: none;
    }

    > span {
      font-size: 1.6rem;
      line-height: 1.6em;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.CAKE_200};
    }

    > .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 1.6rem;
    }

    > .buttons div:nth-child(1) {
      width: 10rem;
    }

    > .buttons button {
      width: 16.2rem;
      height: 3.2rem;
    }

  @media screen and (min-width: 1280px) {
    width: 30.4rem;
    height: 46.2rem;

    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    gap: 1.2rem;

    > img {
      width: 17rem;
      height: 17rem;
    }

    > h2 {
      font-size: 2.4rem;
      line-height: 3.4rem;
    }

    > p {
      display: flex;
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 400;
      text-align: center;

      color: ${({theme}) => theme.LIGHT.LIGHT_400}
    }

    > span {
      font-size: 3.2rem;
      line-height: 5.1rem;
    }

    > .buttons {
      width: 9.2rem;
      height: 4.8rem;
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 1.6rem;
    }

    > .buttons div:nth-child(1) {
      width: 10rem;
      height: 4.8rem;
    }

    > .buttons button {
      width: 9.2rem;
      height: 4.8rem;
    }
  }

`;
