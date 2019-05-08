import React from "react";
import PropTypes from "prop-types";

const Placeholder = ({ className }) => (
  <div className={className}>
    <div className="image" />
    <div className="album" />
    <div className="title" />
    <div className="url" />
  </div>
);

Placeholder.propTypes = {
  className: PropTypes.string.isRequired
};

export default Placeholder;
