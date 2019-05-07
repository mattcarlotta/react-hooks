import React from "react";
import PropTypes from "prop-types";

const Input = ({
  className,
  containerStyle,
  errors,
  inputStyle,
  name,
  onChange,
  placeholder,
  type,
  value
}) => (
  <div className={className} style={containerStyle}>
    <input
      type={type || "text"}
      name={name || ""}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={inputStyle}
    />
    {errors && <p>{errors}</p>}
  </div>
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  containerStyle: PropTypes.objectOf(PropTypes.string),
  inputStyle: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default Input;
