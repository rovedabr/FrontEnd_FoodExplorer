import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  

  overflow-y: auto;

  > div {
    display: flex;
    flex-direction: row;
  }

  > .swiper-cards {
    position: relative;

    border: 1px solid blue;
    margin: 0;

  }





`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;

  > input {
    width: 2.5rem;
    height: 2.5rem;

    position: relative;
    top: 1rem;
    left: 20rem;
  }

  > div {
    width: 21rem;
    height: 29.2rem;

    margin: 1rem;
    /* border: 1px solid blue; */
  }

  > div p {
    display: none;
  }

`;


