import React from "react";
import PropTypes from "prop-types";

const Input = ({
  className,
  inputStyle,
  onChange,
  placeholder,
  type,
  value
}) => (
  <div className={className}>
    <input
      type={type || "text"}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={inputStyle}
    />
  </div>
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  inputStyle: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default Input;
