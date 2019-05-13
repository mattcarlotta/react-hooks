import React from "react";
import PropTypes from "prop-types";

const Slider = ({ className, handleChange, max, min, name, value, unit }) => (
  <div className={className}>
    <input
      type="range"
      min={min || "0"}
      max={max || "100"}
      name={name}
      value={value}
      onChange={handleChange}
    />
    <div className="units">
      <span className="start">
        {min || 0}
        {unit}
      </span>
      <span className="middle">
        {value || 50}
        {unit}
      </span>
      <span className="end">
        {max || 100}
        {unit}
      </span>
    </div>
  </div>
);

Slider.propTypes = {
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  max: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string
};

export default Slider;
