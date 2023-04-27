import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .order h2, h3, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.2rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  .order h2 {
    margin: 0 1.2rem;
  }

  > h3 {
    padding: 1.6rem 0;
  }

  .order .orderData {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .order button {
    border: none;
    background: transparent;

    margin-left: 8rem;
    position: relative;
    top: -2rem;

    font-size: 1.2rem;
    line-height: 1.9rem;
    color: ${({theme}) => theme.COLORS.TOMATO_400};
  }

  .order button:hover {
    color: red;
    font-weight: bold;
    transition: 0.2s ease-in-out;
  }


  .order img {
    width: 7.2rem;
    height: 7.2rem;

    margin-right: 1.3rem;
  }

  .order span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.9rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_400};
  }
`;