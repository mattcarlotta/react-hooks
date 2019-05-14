import styled from "styled-components";
import Highlighter from "./Highlighter";

const StyledHighlighter = styled(Highlighter)`
  color: #ffffff !important;
  background: ${({ theme }) =>
    theme.name === "light" ? "#191919" : "#2f2c2c"} !important;
  border-radius: 0px !important;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  max-width: 800px;
  overflow-y: auto;
  margin: ${({ margin }) => margin || "0 0 20px 0"} !important;

  code {
    display: block;
    color: #ffffff !important;
    background: ${({ theme }) =>
      theme.name === "light" ? "#191919" : "#2f2c2c"} !important;
    padding: 0 !important;
    font-size: 16px !important;
    line-height: 2;
    white-space: pre;
    font-weight: normal;
    text-align: left;
  }
`;

export default StyledHighlighter;
