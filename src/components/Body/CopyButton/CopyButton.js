import React from "react";
import PropTypes from "prop-types";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

const CopyButton = ({ className, copied, ...rest }) => (
  <button {...rest} className={className} type="button">
    {!copied ? (
      <>
        <FaClipboard /> Copy
      </>
    ) : (
      <>
        <FaClipboardCheck /> Copied
      </>
    )}
  </button>
);

CopyButton.propTypes = {
  className: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired
};

export default CopyButton;
