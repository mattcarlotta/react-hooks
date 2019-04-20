import styled from "styled-components";
import Highlighter from "./Highlighter";

const StyledHighlighter = styled(Highlighter)`
  color: #ffffff !important;
  background: #191919 !important;
  border-bottom: 1px dashed
    ${({ theme }) => (theme.name === "dark" ? "#03a9f3" : "transparent")};
  border-right: 1px dashed
    ${({ theme }) => (theme.name === "dark" ? "#03a9f3" : "transparent")};
  border-left: 1px dashed
    ${({ theme }) => (theme.name === "dark" ? "#03a9f3" : "transparent")};
  border-radius: 0px !important;
  height: 400px;
  width: 100%;
  max-width: 800px;
  overflow-y: auto;
  margin: 0 0 20px 0 !important;

  code {
    display: block;
    color: #ffffff !important;
    background: #191919 !important;
    padding: 0 !important;
    font-size: 16px !important;
    line-height: 2;
    white-space: pre;
    font-weight: normal;
    text-align: left;
  }
`;

export default StyledHighlighter;
