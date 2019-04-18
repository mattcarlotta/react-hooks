import React from "react";
import PropTypes from "prop-types";
import Tooltip from "rc-tooltip";

const ToolTipComponent = ({ className, children, placement, overlay }) => (
  <Tooltip
    className={className}
    overlayClassName={className}
    placement={placement}
    trigger={["hover"]}
    overlay={overlay}
  >
    {children}
  </Tooltip>
);

ToolTipComponent.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.string.isRequired,
  overlay: PropTypes.node.isRequired
};

export default ToolTipComponent;
