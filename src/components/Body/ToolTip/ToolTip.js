import React from "react";
import PropTypes from "prop-types";
import Tooltip from "rc-tooltip";

const ToolTipComponent = ({
  className,
  children,
  placement,
  overlay,
  trigger,
  ...rest
}) => (
  <Tooltip
    className={className}
    overlayClassName={className}
    placement={placement}
    trigger={trigger || ["hover"]}
    overlay={overlay}
    {...rest}
  >
    {children}
  </Tooltip>
);

ToolTipComponent.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.string.isRequired,
  overlay: PropTypes.node.isRequired,
  trigger: PropTypes.arrayOf(PropTypes.string)
};

export default ToolTipComponent;
