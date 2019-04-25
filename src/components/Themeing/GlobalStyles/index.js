import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
   margin: 0;
   height: 100vh;
   background-color: ${({ theme }) => theme.bg};
  }

  * {
    font-family: "Arial", sans-serif;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar{
    width: 0;
  }
`;

export default GlobalStyle;
