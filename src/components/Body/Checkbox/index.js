import styled from "styled-components";
import CheckBox from "./CheckBox";

const StyledCheckBox = styled(CheckBox)`
  display: inline-block;
  margin-top: 5px;

  input {
    cursor: pointer;
    height: 20px;
    width: 20px;
    font-size: 16px;
    background: #fff;
    color: #666;
  }
`;

export default StyledCheckBox;
