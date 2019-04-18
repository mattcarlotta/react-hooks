import styled from "styled-components";
import Option from "./Option";

const optionIsActive = (selected, value) =>
  selected === value
    ? `background-color: #eee;
      color: #0f7ae5;
    `
    : null;

const StyledOption = styled(Option)`
  cursor: pointer;
  display: block;
  font-size: 16px;
  padding: 8px 12px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  border-bottom: 1px dotted pink;
  text-align: left;
  ${props => optionIsActive(props.selected, props.value)};

  &::hover {
    color: #0f7ae5;
  }
`;

export default StyledOption;
