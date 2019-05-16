import styled, { css } from "styled-components";
import CopyButton from "./CopyButton";

const StyledCopyButton = styled(CopyButton)`
  button {
    color: #fff;
    background-color: ${({ copied }) => (copied ? "#f56342" : "#0f7ae5")};
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 16px;
    float: right;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid transparent;

    ${({ state }) =>
      state &&
      ((state === "entering" &&
        css`
          visibility: visible;
        `) ||
        (state === "entered" &&
          css`
            visibility: visible;
          `) ||
        (state === "exiting" &&
          css`
            visibility: hidden;
          `) ||
        (state === "exited" &&
          css`
            visibility: hidden;
          `))}

    &:focus {
      outline: none;
    }
  }

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default StyledCopyButton;
