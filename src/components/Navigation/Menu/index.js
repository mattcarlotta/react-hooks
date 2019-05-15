import React from "react";
import PropTypes from "prop-types";
import { FaCodeBranch, FaCode, FaSitemap } from "react-icons/fa";
import MenuContainer from "./MenuContainer";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

const home = "/";
const hooks = "/hooks";
const examples = "/examples";
const events = `${examples}/events`;
const misc = `${examples}/misc`;
const forms = `${examples}/forms`;
const formelems = `${forms}/elements`;

const indexItems = [
  { name: "Home", link: home },
  { name: "Hooks", link: hooks },
  { name: "Examples", link: examples }
];

const exampleHookItems = [
  { hash: "usecontext", name: "useContext" },
  { hash: "usecallback", name: "useCallback" },
  { hash: "usedebugvalue", name: "useDebugValue" },
  { hash: "useeffect", name: "useEffect" },
  { hash: "useimperativehandle", name: "useImperativeHandle" },
  { hash: "uselayouteffect", name: "useLayoutEffect" },
  { hash: "usememo", name: "useMemo" },
  { hash: "useref", name: "useRef" },
  { hash: "usestate", name: "useState" }
];

const exampleMisc = [
  { hash: "contextpersistence", name: "Context", link: misc },
  { hash: "draganddrop", name: "Drag and Drop", link: misc },
  { hash: "dynamicfieldsform", name: "Dynamic Form", link: forms },
  { hash: "fetchingandupdatingdata", name: "Fetching Data", link: misc },
  { hash: "fieldvalidation", name: "Field Validation", link: forms },
  { hash: "input", name: "Input", link: formelems },
  { hash: "intervaltimer", name: "Interval Timer", link: misc },
  { hash: "keydown", name: "Key Down", link: events },
  { hash: "localstoragepersistence", name: "Local Storage", link: misc },
  { hash: "loginform", name: "Login Form", link: forms },
  { hash: "mousedown", name: "Mouse Down", link: events },
  { hash: "radiogroup", name: "Radio Group", link: formelems },
  { hash: "reduxpersistence", name: "Redux", link: misc },
  { hash: "registrationform", name: "Registration Form", link: forms },
  { hash: "select", name: "Select", link: formelems },
  { hash: "slider", name: "Slider", link: formelems },
  { hash: "simplecounter", name: "Simple Counter", link: misc },
  { hash: "toggle", name: "Toggle", link: formelems },
  { hash: "uploadform", name: "Upload Form", link: forms }
];

const Menu = ({ hideMenu }) => (
  <MenuContainer>
    <SubMenu
      title={
        <span>
          <FaSitemap /> Index
        </span>
      }
    >
      {indexItems.map(({ name, link }) => (
        <MenuItem key={name} handleClick={hideMenu} to={link}>
          {name}
        </MenuItem>
      ))}
    </SubMenu>
    <SubMenu
      title={
        <span>
          <FaCodeBranch /> Hooks
        </span>
      }
    >
      {exampleHookItems.map(({ hash, name }) => (
        <MenuItem key={name} handleClick={hideMenu} to={`${hooks}#${hash}`}>
          {name}
        </MenuItem>
      ))}
    </SubMenu>
    <SubMenu
      title={
        <span>
          <FaCode /> Examples
        </span>
      }
    >
      {exampleMisc.map(({ hash, name, link }) => (
        <MenuItem key={name} handleClick={hideMenu} to={`${link}#${hash}`}>
          {name}
        </MenuItem>
      ))}
    </SubMenu>
  </MenuContainer>
);

Menu.propTypes = {
  hideMenu: PropTypes.func.isRequired
};

export default Menu;
