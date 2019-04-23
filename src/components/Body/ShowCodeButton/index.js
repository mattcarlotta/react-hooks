import React from "react";
import PropTypes from "prop-types";
import { MdCode, MdSettingsEthernet } from "react-icons/md";
import { Button, ToolTip } from "../../Body";

const ShowCodeButton = ({ showCode, style, toggleShowCode }) => (
  <ToolTip
    placement="top"
    trigger={["hover"]}
    overlay={<span>{showCode ? "Hide" : "Show"} Source</span>}
  >
    <Button style={style} onClick={toggleShowCode}>
      {showCode ? <MdSettingsEthernet /> : <MdCode />}
    </Button>
  </ToolTip>
);

ShowCodeButton.propTypes = {
  showCode: PropTypes.bool.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  toggleShowCode: PropTypes.func.isRequired
};

export default ShowCodeButton;
