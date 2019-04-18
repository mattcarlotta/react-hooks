import React from "react";
import PropTypes from "prop-types";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import {} from "react-icons/md";

const iconStyle = { height: 32, width: 32 };

const Toggle = ({ className, style, toggleState, toggleSwitch }) => (
  <span className={className} style={style} onClick={toggleSwitch}>
    {!toggleState ? (
      <FaToggleOff style={iconStyle} />
    ) : (
      <FaToggleOn style={iconStyle} />
    )}
  </span>
);

Toggle.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  toggleState: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired
};

export default Toggle;
