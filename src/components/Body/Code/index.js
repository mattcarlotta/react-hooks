import styled from "styled-components";
import Code from "./Code";

const StyledCode = styled(Code)`
  max-width: 800px;
  margin: ${({ margin }) => (margin ? margin : 0)} !important;
  display: inline-block;
  padding: 0 5px !important;
  vertical-align: middle;
  white-space: pre-wrap !important;
  word-break: break-word !important;

  code {
    display: block;
    white-space: pre-wrap !important;
    word-break: break-word !important;
    color: #ffffff !important;
    border-radius: 4px !important;
    background: ${({ theme }) =>
      theme.name === "light" ? "#191919" : "#2f2c2c"} !important;
    padding: 0 5px !important;
    font-size: 16px !important;
    line-height: 2;
    white-space: pre;
    font-weight: normal;
    text-align: left;
  }
`;

export default StyledCode;
