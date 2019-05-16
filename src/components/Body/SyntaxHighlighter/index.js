import styled, { css } from "styled-components";
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
  transition: height 350ms ease-in-out;

  ${({ state }) =>
    state &&
    ((state === "entering" &&
      css`
        min-height: 0px;
        height: ${({ height }) => height || "auto"};
        transition-duration: 300ms;
      `) ||
      (state === "entered" &&
        css`
          min-height: 0px;
          height: ${({ height }) => height || "auto"};
          transition-duration: 300ms;
        `) ||
      (state === "exiting" &&
        css`
          min-height: 0px;
          height: 0px;
          visibility: hidden;
          transition-duration: 300ms;
        `) ||
      (state === "exited" &&
        css`
          min-height: 0px;
          height: 0px;
          visibility: hidden;
          transition-duration: 300ms;
        `))}

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
