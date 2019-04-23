import styled from "styled-components";
import CheckBox from "./CheckBox";

const StyledCheckBox = styled(CheckBox)`
  display: inline-block;

  input {
    cursor: pointer;
    font-size: 16px;
    background: #fff;
    color: #666;
  }
`;

export default StyledCheckBox;
