import React from "react";
import PropTypes from "prop-types";
import { FaAdjust, FaReact } from "react-icons/fa";
import {
  Link,
  NavBar,
  NavBarContainer,
  NavContainer,
  Nav,
  NavItem,
  NavTitle
} from "../";
import { Button, ToolTip } from "../../Body";

const Header = ({ onToggleTheme }) => (
  <NavBarContainer>
    <NavBar>
      <NavTitle>
        <FaReact
          style={{ verticalAlign: "middle", fontSize: 42, marginRight: 20 }}
        />
      </NavTitle>
      <NavContainer>
        <Nav>
          <NavItem>
            <Link color="primary" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link color="primary" to="/hooks">
              Hooks API
            </Link>
          </NavItem>
          <NavItem>
            <Link color="primary" to="/examples">
              Examples
            </Link>
          </NavItem>
        </Nav>
        <ToolTip placement="left" overlay={<span>Change Theme</span>}>
          <Button onClick={onToggleTheme}>
            <FaAdjust style={{ verticalAlign: "middle" }} />
          </Button>
        </ToolTip>
      </NavContainer>
    </NavBar>
  </NavBarContainer>
);

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
};

export default Header;
