import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(33, 147, 176, 0.5),
                  0 0 10px rgba(33, 147, 176, 0.3),
                  0 0 15px rgba(33, 147, 176, 0.1);
    }
    50% {
      box-shadow: 0 0 10px rgba(33, 147, 176, 0.8),
                  0 0 20px rgba(33, 147, 176, 0.5),
                  0 0 30px rgba(33, 147, 176, 0.3);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(-45deg, #0a0814, #1a1530, #12101f, #0d0b18);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
  }

  ::selection {
    background: rgba(33, 147, 176, 0.5);
    color: #fff;
  }
`;

export default GlobalStyles;