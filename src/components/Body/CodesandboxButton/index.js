import styled from "styled-components";
import CodesandboxButton from "./CodesandboxButton";

const StyledCodesandboxButton = styled(CodesandboxButton)`
  display: inline-block;
  float: left;
  margin-top: 7px;

  a {
    color: #03a9f3;
    background-color: #1c2022;
    white-space: nowrap;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 16px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    border: 0;
    padding: 10px 18px;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    background-color: #1c2022;
  }

  a:focus {
    outline: none;
  }

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default StyledCodesandboxButton;
