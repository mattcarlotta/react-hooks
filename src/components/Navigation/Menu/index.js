import React from "react";
import PropTypes from "prop-types";
import { FaCodeBranch, FaCode, FaSitemap } from "react-icons/fa";
import MenuContainer from "./MenuContainer";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

const Menu = ({ hideMenu }) => (
  <MenuContainer>
    <SubMenu
      title={
        <span>
          <FaSitemap /> Index
        </span>
      }
    >
      <MenuItem handleClick={hideMenu} to="/">
        Home
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/hooks">
        Hooks
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples">
        Examples
      </MenuItem>
    </SubMenu>
    <SubMenu
      title={
        <span>
          <FaCodeBranch /> Hooks
        </span>
      }
    >
      <MenuItem handleClick={hideMenu} to="/hooks/useContext">
        useContext
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/hooks/useCallback">
        useCallback
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/hooks/useDebugValue">
        useDebugValue
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/hooks/useEffect">
        useEffect
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/hooks/useImperativeHandle">
        useImperativeHandle
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/useLayoutEffect">
        useLayoutEffect
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/useMemo">
        useMemo
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/useRef">
        useRef
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/hooks/useState">
        useState
      </MenuItem>
    </SubMenu>
    <SubMenu
      title={
        <span>
          <FaCode /> Examples
        </span>
      }
    >
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Context
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Drag and Drop
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms">
        Dynamic Form
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Fetching Data
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms">
        Field Validation
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms/elements">
        Input
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Interval Timer
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/events">
        Key Down
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Local Storage
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms">
        Login Form
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/events">
        Mouse Down
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms/elements">
        Radio Group
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Redux
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms">
        Registration Form
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms/elements">
        Select
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms/elements">
        Slider
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/misc">
        Simple Counter
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms/elements">
        Toggle
      </MenuItem>
      <MenuItem handleClick={hideMenu} to="/examples/forms">
        Upload Form
      </MenuItem>
    </SubMenu>
  </MenuContainer>
);

Menu.propTypes = {
  hideMenu: PropTypes.func.isRequired
};

export default Menu;
