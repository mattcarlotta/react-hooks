import React from "react";
import PropTypes from "prop-types";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

const CopyButton = ({ className, copied, ...rest }) => (
  <div className={className}>
    <button {...rest} className="copy-button" type="button">
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
  </div>
);

CopyButton.propTypes = {
  className: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired
};

export default CopyButton;
