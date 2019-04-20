import styled from "styled-components";

const ThemeBlock = styled.li`
  display: inline-block;
  background-color: ${({ theme }) => theme.base};
  width: 10px;
  height: 10px;
  margin-right: 5px;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.accent};
`;

export default ThemeBlock;
