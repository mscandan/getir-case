import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    width: 100vw;
    height: 100vh;
  }

  button {
    outline: none;
    border: none;
  }
`;

export default GlobalStyles;
