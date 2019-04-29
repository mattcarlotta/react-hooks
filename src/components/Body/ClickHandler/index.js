import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";

const ClickHandler = ({ children }) => {
  const wrapperRef = createRef();

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (wrapperRef && wrapperRef.current.contains(target)) {
        alert("You clicked me.");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{children}</div>;
};

ClickHandler.propTypes = {
  children: PropTypes.any.isRequired
};

export default ClickHandler;
