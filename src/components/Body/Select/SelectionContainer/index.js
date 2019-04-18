import styled from "styled-components";

const focused = isVisible =>
  isVisible
    ? `outline: -webkit-focus-ring-color auto 1px;
    box-shadow: 0 0 0 1px #2684ff;
    `
    : null;

const SelectionContainer = styled.div`
  cursor: pointer;
  /* margin: 0 20px; */
  display: inline-block;
  height: 40px;
  width: 300px;
  background-color: white;
  display: flex;
  min-height: 38px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  transition: all 100ms ease 0s;
  ${props => focused(props.isVisible)};
`;

export default SelectionContainer;
