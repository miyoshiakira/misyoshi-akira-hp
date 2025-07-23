import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f0f2f5;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
  }
`;

export default GlobalStyles;