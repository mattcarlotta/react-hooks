import styled from "styled-components";

const MenuContainer = styled.ul`
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
