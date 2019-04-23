import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ className, handleChange, inputStyle, value }) => (
  <div className={className}>
    <input
      type="checkbox"
      onChange={handleChange}
      value={value}
      style={inputStyle}
      checked={value}
    />
  </div>
);

CheckBox.propTypes = {
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputStyle: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.bool
};

export default CheckBox;
