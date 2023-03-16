import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > main {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }


  > nav {
    display: flex;
  }

  > header {
    display: none;
  }

  @media screen and (min-width: 1280px){
    > nav {
      display: none;
    }

    > header {
      display: flex;
    }
  }

`;

export const Form = styled.div`
  width: 31.6rem;
  height: 67.7rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 1.7rem 5.2rem 3.3rem 5.2rem;

  > button {
    width: 10.2rem;
    height: 3.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    appearance: none;
    background-color: transparent;
    border: none;

    margin-top: 1.5rem;
    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 500;
    
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > div img {
    width: 26.4rem;
    height: 26.4rem;
    
    margin: 1.5rem 2.6rem;
  }

  > div h2, span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > div h2 {
    font-size: 2.7rem;
    line-height: 3.7rem;
    font-weight: 500;
  }

  > div span {
    font-size: 1.6rem;
    line-height: 2.7rem;
    font-weight: 400;
  }

  >#menu .content .tags {
    width: 31.6rem;
    height: 10rem;

    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2.4rem;

    margin: 2.4rem auto 4.5rem;
  }

  >#menu .content .buttons {
    display: flex;
    flex-direction: row;
  }

  >#menu .content .buttons button {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  @media screen and (min-width: 1280px){
    width: 100%;
    
    > button {
      position: relative;
      left: 15.4rem;
    }

    > #menu {
      display: flex;
      flex-direction: row;
    }
    
    > #menu img {
      width: 39rem;
      height: 39rem;
      margin: 10rem 4.7rem auto 12rem;
    }

    > #menu .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    > #menu .content .mealData {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

   > #menu .content .mealData h2 {
      font-size: 4rem;
      line-height: 5.6rem;
      font-weight: 500;

      text-align: left;
    }

    > #menu .content .mealData span {
      font-size: 2.4rem;
      line-height: 3.3rem;
      font-weight: 400;

      text-align: left;
    }

    > #menu .content .tags {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;

      margin: 0;
    }

  }
`;