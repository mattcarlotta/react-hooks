import React from "react";
import PropTypes from "prop-types";

const PreviewContainer = ({ className, children, ...rest }) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

PreviewContainer.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PreviewContainer;
