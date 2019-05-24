import styled from "styled-components";
import Highlighter from "./Highlighter";

const StyledHighlighter = styled(Highlighter)`
  color: #ffffff !important;
  background: ${({ theme }) =>
    theme.name === "light" ? "#191919" : "#000"} !important;
  border-radius: 0px !important;
  white-space: pre-wrap !important;
  word-break: break-word !important;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  max-width: 800px;
  overflow-y: auto;
  margin: ${({ margin }) => margin || "0 0 20px 0"} !important;
  transition: height 350ms cubic-bezier(0.4, 0, 0.2, 1);

  code {
    display: block;
    color: #ffffff !important;
    white-space: pre-wrap !important;
    word-break: break-word !important;
    background: ${({ theme }) =>
      theme.name === "light" ? "#191919" : "#000"} !important;
    padding: 0 !important;
    font-size: 16px !important;
    line-height: 2;
    white-space: pre;
    font-weight: normal;
    text-align: left;
  }
`;

export default StyledHighlighter;
