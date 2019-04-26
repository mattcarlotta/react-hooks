import React from "react";
import PropTypes from "prop-types";

const StyledButton = ({ className, children, type, ...rest }) => (
  <button {...rest} className={className} type={!type ? "button" : type}>
    {children}
  </button>
);

StyledButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  type: PropTypes.string
};

export default StyledButton;
