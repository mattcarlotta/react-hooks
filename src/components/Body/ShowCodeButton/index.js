import React from "react";
import { MdCode, MdSettingsEthernet } from "react-icons/md";
import { Button, ToolTip } from "../../Body";

const ShowCodeButton = ({ showCode, toggleShowCode }) => (
  <ToolTip
    placement="top"
    trigger={["hover"]}
    overlay={<span>{showCode ? "Hide" : "Show"} Source</span>}
  >
    <Button onClick={toggleShowCode}>
      {showCode ? <MdSettingsEthernet /> : <MdCode />}
    </Button>
  </ToolTip>
);

export default ShowCodeButton;
