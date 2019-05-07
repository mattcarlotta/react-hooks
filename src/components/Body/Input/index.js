import styled from "styled-components";
import Input from "./Input";

const StyledInput = styled(Input)`
  display: inline-block;
  height: 40px;
  width: 300px;

  input {
    height: 100%;
    width: 100%;
    font-size: 16px;
    padding: 0 10px;
    background: #fff;
    color: #666;
    border: 1px solid #e5e5e5;
    border-radius: 4px;

    &::placeholder {
      color: #bbb;
    }
  }

  p {
    margin: 0;
    padding: 0;
    color: #f56342;
  }
`;

export default StyledInput;
