import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkComponent = ({ className, children, link }) => (
  <Link className={className} to={link}>
    {children}
  </Link>
);

LinkComponent.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default LinkComponent;
