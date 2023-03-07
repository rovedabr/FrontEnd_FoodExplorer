import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;


body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

background-color: ${({theme}) => theme.DARK.DARK_400};

@media only screen and (min-width: 480px) {
    width: 480px;
    height: 100vh;

    display: grid;
    grid-template-rows: ;
    
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    > form div:first-child {
      width: 100%;
      height: 4.4rem;
    }
  
    > form {
      width: 31.6rem;
  
      border: 1px red solid;
  
      label {  
        font-size: 1.6rem;
        line-height: 1.6rem;
        font-weight: 400;
  
        color: ${({theme}) => theme.LIGHT.LIGHT_400}; 
      }
    }
    
  }


`;