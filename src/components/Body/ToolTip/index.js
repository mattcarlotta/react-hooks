import styled from "styled-components";
import ToolTip from "./ToolTip";

const setArrowColor = ({ placement, theme }) => {
  switch (placement) {
    case "top":
      return `border-top-color: ${theme.accent}`;
    case "bottom":
      return `border-bottom-color: ${theme.accent}`;
    case "left":
      return `border-left-color: ${theme.accent}`;
    default:
      return `border-right-color: ${theme.accent}`;
  }
};

const StyledToolTip = styled(ToolTip)`
  opacity: 1 !important;

  & .rc-tooltip-arrow {
    ${props => `${setArrowColor(props)} !important};`}

  & .rc-tooltip-inner {
    color: #fff;
    background-color: ${({ theme }) => theme.accent};
    font-size: 16px;
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    border: 0;
  }
`;

export default StyledToolTip;
