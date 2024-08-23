import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

`;

export default GlobalStyles;
