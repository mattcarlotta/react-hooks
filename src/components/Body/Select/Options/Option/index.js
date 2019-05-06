import styled from "styled-components";
import Option from "./Option";

const StyledOption = styled(Option)`
  cursor: pointer;
  color: #282c34;
  display: block;
  font-size: 16px;
  padding: 8px 12px;
  width: 100%;
  font-weight: normal;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  border-bottom: 1px dotted pink;
  text-align: left;
  ${({ selected, value }) =>
    selected === value ? `background-color: #dedede;  color: #0f7ae5;` : null};

  &:hover {
    color: #0f7ae5 !important;
    ${({ selected, value }) =>
      selected !== value ? "background: #eee !important;" : null};
  }
`;

export default StyledOption;
