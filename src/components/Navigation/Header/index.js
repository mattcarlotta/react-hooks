import React from "react";
import PropTypes from "prop-types";
import { FaAdjust, FaReact } from "react-icons/fa";
import { Link, NavBar, NavContainer, Nav, NavItem, NavTitle } from "../";
import { Button, ToolTip } from "../../Body";

const Header = ({ onToggleTheme }) => (
  <NavBar>
    <NavTitle>
      <FaReact
        style={{ verticalAlign: "middle", fontSize: 42, marginRight: 20 }}
      />
    </NavTitle>
    <NavContainer>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/examples">Examples</Link>
        </NavItem>
      </Nav>
      <ToolTip placement="left" overlay={<span>Change Theme</span>}>
        <Button onClick={onToggleTheme}>
          <FaAdjust style={{ verticalAlign: "middle" }} />
        </Button>
      </ToolTip>
    </NavContainer>
  </NavBar>
);

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
};

export default Header;
