import styled from "styled-components";
import MenuItem from "./MenuItem";

const StyledMenuItem = styled(MenuItem)`
  cursor: pointer;
  height: 40px;
  line-height: 40px;

  a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme.name === "dark" ? theme.accent : theme.secondary};
  }

  a:hover {
    color: ${({ theme }) => theme.altHover};
  }
`;

export default StyledMenuItem;
