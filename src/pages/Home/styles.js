import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

   > nav {
    width: 100%;  
    display: flex;
  }

  > header {
    display: none;
  }

  > div .hide {
    width: 10rem;
    height: 4rem;
    margin-bottom: 6rem;
  }

  .mainMeal {
    width: 95%;
    padding-left: 2.4rem;
  }

  > footer {
    width: 100%;
    height: 7.7rem;
  }



  @media screen and (min-width: 1280px) {

  > nav {
      display: none;
    }

    > header {
      display: flex;
    }

    > div .hide {
      width: 20rem;
      height: 4rem;
      margin-bottom: 4.6rem;
    }

    > .mainMeal h2 {
      font-weight : 700;
      font-size: 2.2rem;
      line-height: 3.4rem;
    } 

    > .mainMeal {
      width: 95%;
  
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }


}

`;
