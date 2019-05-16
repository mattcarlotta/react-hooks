import styled from "styled-components";
import SubMenu from "./SubMenu";

const StyledSubMenu = styled(SubMenu)`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => (theme.name === "dark" ? theme.accent : "#6d6d6d")};
  margin-bottom: 10px;

  & .sub-menu {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0px;
    margin: 0px auto 0px 0px;
    letter-spacing: 1px;
  }

  svg {
    position: relative;
    top: 2px;
    margin-right: 5px;
  }

  ul {
    list-style-type: none;
    width: 100%;
    padding-left: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.altHover};
  }
`;

export default StyledSubMenu;
