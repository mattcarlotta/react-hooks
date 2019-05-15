import React from "react";
import PropTypes from "prop-types";
import { FaAdjust, FaCube, FaGithub, FaReact } from "react-icons/fa";
import {
  ButtonContainer,
  Link,
  NavBar,
  NavBarContainer,
  NavContainer,
  Nav,
  NavItem,
  NavTitle
} from "../index.js";
import { ToolTip, ThemeButton } from "../../Body";

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
        <ButtonContainer top="5px" left="45px">
          <ToolTip
            align={{ offset: [0, 7] }}
            placement="bottom"
            overlay={<span>Change Theme</span>}
          >
            <ThemeButton onClick={onToggleTheme}>
              <FaAdjust style={{ verticalAlign: "middle" }} />
            </ThemeButton>
          </ToolTip>
        </ButtonContainer>
        <ButtonContainer top="13px" right="100px">
          <ToolTip
            align={{ offset: [0, 7] }}
            placement="bottom"
            overlay={<span>Github</span>}
          >
            <ThemeButton
              as="a"
              href="https://github.com/mattcarlotta/react-hooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ position: "relative", top: 3 }} />
            </ThemeButton>
          </ToolTip>
        </ButtonContainer>
        <ButtonContainer top="13px" right="30px">
          <ToolTip
            align={{ offset: [0, 7] }}
            placement="bottom"
            overlay={<span>Codesandbox</span>}
          >
            <ThemeButton
              as="a"
              href="https://codesandbox.io/s/github/mattcarlotta/react-hooks/tree/master/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCube style={{ position: "relative", top: 3 }} />
            </ThemeButton>
          </ToolTip>
        </ButtonContainer>
      </NavContainer>
    </NavBar>
  </NavBarContainer>
);

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
};

export default Header;
