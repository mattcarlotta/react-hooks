import styled from "styled-components";
import ToolTipComponent from "./ToolTipComponent";

const setArrowColor = props => {
  switch (props.placement) {
    case "top":
      return `border-top-color: ${props.theme.tertiary}`;
    case "bottom":
      return `border-bottom-color: ${props.theme.tertiary}`;
    case "left":
      return `border-left-color: ${props.theme.tertiary}`;
    default:
      return `border-right-color: ${props.theme.tertiary}`;
  }
};

const StyledToolTip = styled(ToolTipComponent)`
  opacity: 1 !important;

  & .rc-tooltip-arrow {
    ${
      props => `${setArrowColor(props)} !important};`
      /* border-top-color: ${props => props.theme.tertiary} !important; */
    }

  & .rc-tooltip-inner {
    color: ${props => props.theme.base};
    background-color: ${props => props.theme.tertiary};
    font-size: 16px;
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    border: 0;
  }
`;

export default StyledToolTip;
