import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({theme}) => theme.DARK.DARK_400} ;
}

h1, p, input, label {
  font-family: 'Roboto', sans-serif;
}

button, h2 {
  font-family: 'Poppins', sans-serif;
}

button, a {
  cursor: pointer;
  transition: filter 0.3s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

`;