import React from "react";
import PropTypes from "prop-types";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const iconStyle = { height: 32, width: 32 };

const Toggle = ({ className, handleClick, value, style }) => (
  <button className={className} style={style} onClick={handleClick}>
    {!value ? (
      <FaToggleOff style={iconStyle} />
    ) : (
      <FaToggleOn style={iconStyle} />
    )}
  </button>
);

Toggle.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Toggle;
