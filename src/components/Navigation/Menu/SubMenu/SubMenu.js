import React from "react";
import PropTypes from "prop-types";
import { ChevronIcon } from "../../../Body";

const SubMenu = ({
  className,
  children,
  closeTabs,
  menuTab,
  openTab,
  tab,
  title
}) => {
  const isVisible = menuTab === tab;
  const handleClick = isVisible ? closeTabs : () => openTab(tab);

  return (
    <li className={className}>
      <div className="sub-menu" onClick={handleClick}>
        {title}
      </div>
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
