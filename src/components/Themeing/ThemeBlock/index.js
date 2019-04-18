import styled from "styled-components";

const ThemeBlock = styled.li`
  display: inline-block;
  background-color: ${props => props.theme.tertiary};
  width: 10px;
  height: 10px;
  margin-right: 5px;
  vertical-align: middle;
`;

export default ThemeBlock;
