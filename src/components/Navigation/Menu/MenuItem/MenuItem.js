import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItem = ({ className, children, to }) => (
  <li className={className}>
    <Link to={to}>{children}</Link>
  </li>
);

MenuItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default MenuItem;
