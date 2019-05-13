import React from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, ToolTip } from "../index";

const style = {
  position: "relative",
  top: "2px",
  fontSize: "20px"
};

const ShowMenuButton = ({ className, handleClick, showMenu }) => (
  <div className={className}>
    <ToolTip
      align={{ offset: [0, -7] }}
      placement="top"
      overlay={<span>{showMenu ? "Hide" : "Show"} Menu</span>}
    >
      <Button onClick={handleClick}>
        {showMenu ? <FaTimes style={style} /> : <FaBars style={style} />}
      </Button>
    </ToolTip>
  </div>
);

ShowMenuButton.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired
};

export default ShowMenuButton;
