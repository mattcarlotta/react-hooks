import React from "react";
import { FaCodeBranch, FaFileCode, FaMonument } from "react-icons/fa";
import MenuContainer from "./MenuContainer";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

const Menu = () => (
  <MenuContainer>
    <SubMenu
      title={
        <span>
          <FaMonument /> Index
        </span>
      }
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/hooks">Hooks</MenuItem>
      <MenuItem to="/examples">Examples</MenuItem>
    </SubMenu>
    <SubMenu
      title={
        <span>
          <FaCodeBranch /> Hooks
        </span>
      }
    >
      <MenuItem to="/hooks/useContext">useContext</MenuItem>
      <MenuItem to="/hooks/useCallback">useCallback</MenuItem>
      <MenuItem to="/hooks/useDebugValue">useDebugValue</MenuItem>
      <MenuItem to="/hooks/useEffect">useEffect</MenuItem>
      <MenuItem to="/hooks/useImperativeHandle">useImperativeHandle</MenuItem>
      <MenuItem to="/examples/useLayoutEffect">useLayoutEffect</MenuItem>
      <MenuItem to="/examples/useMemo">useMemo</MenuItem>
      <MenuItem to="/examples/useRef">useRef</MenuItem>
      <MenuItem to="/hooks/useState">useState</MenuItem>
    </SubMenu>
    <SubMenu
      title={
        <span>
          <FaFileCode /> Examples
        </span>
      }
    >
      <MenuItem to="/examples/misc">Context</MenuItem>
      <MenuItem to="/examples/misc">Drag and Drop</MenuItem>
      <MenuItem to="/examples/forms">Dynamic Form</MenuItem>
      <MenuItem to="/examples/misc">Fetching Data</MenuItem>
      <MenuItem to="/examples/forms">Field Validation</MenuItem>
      <MenuItem to="/examples/forms/elements">Input</MenuItem>
      <MenuItem to="/examples/misc">Interval Timer</MenuItem>
      <MenuItem to="/examples/events">Key Down</MenuItem>
      <MenuItem to="/examples/misc">Local Storage</MenuItem>
      <MenuItem to="/examples/forms">Login Form</MenuItem>
      <MenuItem to="/examples/events">Mouse Down</MenuItem>
      <MenuItem to="/examples/forms/elements">Radio Group</MenuItem>
      <MenuItem to="/examples/misc">Redux</MenuItem>
      <MenuItem to="/examples/forms">Registration Form</MenuItem>
      <MenuItem to="/examples/forms/elements">Select</MenuItem>
      <MenuItem to="/examples/forms/elements">Slider</MenuItem>
      <MenuItem to="/examples/misc">Simple Counter</MenuItem>
      <MenuItem to="/examples/forms/elements">Toggle</MenuItem>
      <MenuItem to="/examples/forms">Upload Form</MenuItem>
    </SubMenu>
  </MenuContainer>
);

export default Menu;
