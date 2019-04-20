import styled from "styled-components";
import ToolTip from "./ToolTip";

const setArrowColor = ({ placement, theme }) => {
  switch (placement) {
    case "top":
      return `border-top-color: ${theme.tertiary}`;
    case "bottom":
      return `border-bottom-color: ${theme.tertiary}`;
    case "left":
      return `border-left-color: ${theme.tertiary}`;
    default:
      return `border-right-color: ${theme.tertiary}`;
  }
};

const StyledToolTip = styled(ToolTip)`
  opacity: 1 !important;

  & .rc-tooltip-arrow {
    ${props => `${setArrowColor(props)} !important};`}

  & .rc-tooltip-inner {
    color: ${({ theme }) => theme.base};
    background-color: ${({ theme }) => theme.tertiary};
    font-size: 16px;
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    border: 0;
  }
`;

export default StyledToolTip;
