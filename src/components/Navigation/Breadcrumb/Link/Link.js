import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkComponent = ({ className, children, to }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
);

LinkComponent.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default LinkComponent;
