import React from "react";
import PropTypes from "prop-types";

const Radio = ({ className, checked, handleChange, name, value }) => (
  <span className={className}>
    <input
      type="radio"
      id={value}
      name={name}
      value={value}
      onChange={handleChange}
      checked={checked}
    />
    <label className={className} htmlFor={value}>
      {value}
    </label>
  </span>
);

Radio.propTypes = {
  className: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Radio;
