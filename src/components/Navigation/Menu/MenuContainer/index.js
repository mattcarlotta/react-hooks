import styled from "styled-components";

const MenuContainer = styled.ul`
  height: calc(100vh - 60px);
  width: 265px;
  padding: 40px 30px 30px 30px;
  list-style-type: none;
  margin: 0;
  list-style: none;
  border-left: 1px solid
    ${({ theme }) => (theme.name === "dark" ? "#403f3f" : "#ececec")};
  background: ${({ theme }) => (theme.name === "dark" ? "#1c2022" : "#f5f5f5")};
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 500;
  overflow-y: scroll;
`;

export default MenuContainer;
