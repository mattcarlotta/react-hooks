import React from "react";
import PropTypes from "prop-types";
import CodesandboxSVG from "../../../images/codesandbox";
import ToolTip from "../ToolTip";

const CodesandboxButton = ({ className, link }) => (
  <div className={className}>
    <ToolTip
      align={{ offset: [0, -7] }}
      placement="top"
      overlay={<span>Codesandbox Demo</span>}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CodesandboxSVG style={{ position: "relative", top: "2px" }} />{" "}
        <span>Demo</span>
      </a>
    </ToolTip>
  </div>
);

CodesandboxButton.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default CodesandboxButton;
