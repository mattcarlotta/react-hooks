import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const AnchorLink = ({ className, style, to }) => (
  <Link className={className} style={style} to={to}>
    <FaLink />
  </Link>
);

AnchorLink.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  to: PropTypes.string.isRequired
};

export default AnchorLink;
