import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto auto 3.5rem;

  > .order h3, h3, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.2rem;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > h3 {
    padding: 1.6rem 0;
  }

  > .order {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px red solid;
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