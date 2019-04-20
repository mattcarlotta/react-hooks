import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ className, inputStyle, onChange, value }) => (
  <div className={className}>
    <input
      type="checkbox"
      onChange={onChange}
      value={value}
      style={inputStyle}
      checked={value}
    />
  </div>
);

CheckBox.propTypes = {
  className: PropTypes.string.isRequired,
  inputStyle: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool
};

export default CheckBox;
