import styled from "styled-components";

const MenuContainer = styled.ul`
  @media (max-width: 576px) {
    padding: 0 30px 30px 30px;
  }

  /* @media (min-width: 768px) {
    max-width: ${({ md }) => md || "100%"};
    flex: ${({ md }) => `0 0 ${md || "100%"}`};
  }

  @media (min-width: 992px) {
    max-width: ${({ lg }) => lg || "100%"};
    flex: ${({ lg }) => `0 0 ${lg || "100%"}`};
  }

  @media (min-width: 1200px) {
    max-width: ${({ xl }) => xl || "100%"};
    flex: ${({ xl }) => `0 0 ${xl || "100%"}`};
  } */

  height: 100%;
  width: 275px;
  padding: 40px 30px 30px 30px;
  list-style-type: none;
  margin: 0;
  list-style: none;
  border-left: 1px solid
    ${({ theme }) => (theme.name === "dark" ? "#403f3f" : "#ececec")};
  overflow-y: scroll;
`;

export default MenuContainer;
