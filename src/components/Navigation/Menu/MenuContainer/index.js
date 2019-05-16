import styled from "styled-components";

const MenuContainer = styled.ul`
  @media (max-width: 725px) {
    margin-top: 40px;
  }

  @media (max-width: 992px) {
    width: 100%;
  }

  height: 100%;
  width: 275px;
  padding: 40px 30px 30px 30px;
  list-style-type: none;
  margin: 0;
  list-style: none;
  border-left: 1px solid
    ${({ theme }) => (theme.name === "dark" ? "#292929" : "#ececec")};
  overflow-y: scroll;
`;

export default MenuContainer;
