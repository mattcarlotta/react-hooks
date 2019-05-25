import React from "react";
import PropTypes from "prop-types";

const CodesandboxSVG = ({ style }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="1"
    viewBox="40 0 550 512"
    height="20px"
    width="20px"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M318.5 550.5L80 425.25L80 177.26L318.5 49.5L557 174.75L557 425.25L557 425.25L318.5 550.5ZM438 447.5L438 367.83L517 327.5L517 211.5L337 300.5L337 500.5L337 500.5L438 447.5ZM196.5 450L297 500.5L297 300.5L117 211.5L117 327.5L196.5 368L196.5 368L196.5 450ZM498.5 180L407.97 132.03L323.91 175L233.15 130L138.5 180L320 266.93L320 266.93L498.5 180Z"
      id="a1K8elQfSl"
    />
  </svg>
);

CodesandboxSVG.propTypes = {
  style: PropTypes.objectOf(PropTypes.string)
};

export default CodesandboxSVG;
