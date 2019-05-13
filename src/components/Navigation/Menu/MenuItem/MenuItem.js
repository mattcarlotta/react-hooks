import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItem = ({ className, children, handleClick, to }) => (
  <li className={className}>
    <Link onClick={handleClick} to={to}>
      {children}
    </Link>
  </li>
);

MenuItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired
};

export default MenuItem;
