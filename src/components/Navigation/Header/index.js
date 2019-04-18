import React from "react";
import PropTypes from "prop-types";
import { FaReact } from "react-icons/fa";
import { Link, NavBar, NavContainer, Nav, NavItem, NavTitle } from "../";
import { Button, ToolTip } from "../../Body";
import { ThemeBlock } from "../../Themeing";

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
          <Link link="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link link="/examples">Examples</Link>
        </NavItem>
      </Nav>
      <ToolTip placement="bottom" overlay={<span>Change Theme</span>}>
        <Button onClick={onToggleTheme}>
          <ThemeBlock />
          Theme
        </Button>
      </ToolTip>
    </NavContainer>
  </NavBar>
);

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
};

export default Header;
