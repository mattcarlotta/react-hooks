import styled from "styled-components";
import MenuItem from "./MenuItem";

const StyledMenuItem = styled(MenuItem)`
  @media (max-width: 992px) {
    padding-left: 10px;
  }

  height: 40px;
  line-height: 40px;
  letter-spacing: 1px;

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
