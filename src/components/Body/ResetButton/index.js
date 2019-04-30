import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { Button, ToolTip } from "../";

const ResetButton = ({ handleClick, style, text }) => (
  <ToolTip placement="top" overlay={<span>Reset</span>}>
    <Button
      style={{
        marginLeft: "20px",
        ...style
      }}
      onClick={handleClick}
    >
      <FaTrash /> {text}
    </Button>
  </ToolTip>
);

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  text: PropTypes.string
};

export default ResetButton;
