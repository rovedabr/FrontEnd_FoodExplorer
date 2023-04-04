import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;

  >div .cards div.swiper-button-prev {
    border: 1px red solid;
    color: white;
    background: red;
    height: 20%;
    width: 20rem;
  }

  > div .cards {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }

  > nav {
    width: 100%;  
    display: flex;
  }

  > header {
    display: none;
  }

  > footer {
    width: 100%;
    height: 7.7rem;
  }

  @media screen and (min-width: 1280px){

    > nav {
      display: none;
    }

    > header {
      display: flex;
    }

    > div h2 {
      font-size: 3.2rem;
      line-height: 4.4rem;
    }

  }
`;

// export const ContentCard = styled.div`
//   display: flex;
//   justify-content: center;

//   > input {
//     width: 2.5rem;
//     height: 2.5rem;

//     position: relative;
//     top: 1rem;
//     left: 20rem;
//   }

//   > div {
//     width: 21rem;
//     height: 29.2rem;
//   }

//   > div p {
//     display: none;
//   }

  // @media screen and (min-width: 1280px){    

  //   > div {
  //     width: 30.4rem;
  //     height: 46.2rem;

  //     gap: 1.5rem;
  //   }

  //   > input {
  //     width: 2.5rem;
  //     height: 2.5rem;

  //     position: relative;
  //     top: 1rem;
  //     left: 29.4rem;
  //   }

  //   > div img {
  //     width: 17.6rem;
  //     height: 17.6rem;
  //   }

  //   > div h2 {
  //     font-size: 2.4rem;
  //     line-height: 3.4rem;
  //   }

  //   > div p {
  //     display: flex;      
  //   }

  //   > div span {
  //     font-size: 3.2rem;
  //     line-height: 5.1rem;
  //   }

  //   > div .buttons {
  //     width: 20.8rem;
  //     height: 4.8rem;

  //     display: flex;
  //     flex-direction: row;
  //     justify-content: center;
  //     align-items: center;

  //     margin-top: 1.5rem;
  //     margin-bottom: 1rem;
  //   }

  //   > div .buttons div {
  //    width: 10rem;

  //     span {
  //       font-size: 2rem;
  //       line-height: 3.2rem;
  //       font-weight: 700;
  //     }

  //     input {
  //       width: 2.4rem;
  //       height: 2.4rem;
  //     }
  //   }

  //   > div .buttons button {
  //     width: 9rem;
  //     height: 4.8rem;

  //     margin-top: 0;
  //     margin-left: 1.6rem;
  //   }
  }
`;
