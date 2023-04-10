import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17rem;

  background-color: ${({theme}) => theme.DARK.DARK_800};
  border-radius: 0.8rem;
  padding: 1.4rem;

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  text-align: justify;
  color: ${({theme}) => theme.LIGHT.LIGHT_300};


  &::placeholder {
    color: ${({theme}) => theme.LIGHT.LIGHT_500};
  }

  > label {
  margin-bottom: 1.6rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_400};
}


`;