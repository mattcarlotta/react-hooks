import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { Button, ToolTip } from "../";

const ResetButton = ({ handleClick }) => (
  <ToolTip placement="top" overlay={<span>Reset</span>}>
    <Button style={{ marginLeft: "20px" }} onClick={handleClick}>
      <FaTrash />
    </Button>
  </ToolTip>
);

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default ResetButton;
