import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
   margin: 0;
   height: 100vh;
   background-color: ${({ theme }) => theme.bg};
   color: ${({ theme }) =>
     theme.name === "dark" ? theme.alt : theme.tertiary};
  }

  @keyframes pulse {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #e4e4e4;
    }
    100% {
      background-color: #eee;
    }
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    width: 0;
  }
`;

export default GlobalStyle;
