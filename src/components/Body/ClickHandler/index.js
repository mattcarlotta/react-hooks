import React, { useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const ClickHandler = ({ children }) => {
  const wrapperRef = useRef();

  const handleClick = useCallback(
    ({ target }) => {
      if (wrapperRef && wrapperRef.current.contains(target)) {
        alert("You clicked me.");
      }
    },
    [wrapperRef]
  );

  useEffect(
    () => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    },
    [handleClick]
  );

  return <div ref={wrapperRef}>{children}</div>;
};

ClickHandler.propTypes = {
  children: PropTypes.any.isRequired
};

export default ClickHandler;
