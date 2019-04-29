import React from "react";
import PropTypes from "prop-types";
import ToolTip from "../ToolTip";

const Slider = ({ className, handleChange, max, min, name, value, unit }) => (
  <span className={className}>
    <sub>
      {min || 0}
      {unit}
    </sub>
    <div className="filled-bar" />
    <ToolTip
      align={{
        offset: [value * 2.28 - 114, -20]
      }}
      placement="top"
      trigger={["hover", "click"]}
      overlay={
        <span>
          {value}
          {unit}
        </span>
      }
    >
      <input
        type="range"
        min={min || "0"}
        max={max || "100"}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </ToolTip>
    <sub>
      {max || 100}
      {unit}
    </sub>
  </span>
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
