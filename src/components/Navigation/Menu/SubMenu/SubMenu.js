import React from "react";
import PropTypes from "prop-types";
import { ChevronIcon } from "../../../Body";
import { useToggle } from "../../../Hooks";

const SubMenu = ({ className, children, title }) => {
  const [isVisible, toggleSubMenu] = useToggle(false);

  return (
    <li className={className} onClick={toggleSubMenu}>
      <div className="sub-menu">{title}</div>
      <ChevronIcon isVisible={isVisible} />
      <ul>{isVisible && children}</ul>
    </li>
  );
};

SubMenu.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

export default SubMenu;
