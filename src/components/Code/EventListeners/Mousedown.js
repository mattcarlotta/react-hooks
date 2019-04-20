export default `import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";

// utilize createRef and useEffect with an event listener that
// calls a function.

// note: if you update state while the mousedown listener is active,
// then you must include the handleClick function as a 
// useEffect [dependency] to persist the event listener OR you
// can include the handleClick function inside of useEffect.
const ClickHandler = ({ children }) => {
  const wrapperRef = createRef();

  const handleClick = ({ target }) => {
    if (wrapperRef && wrapperRef.current.contains(target)) {
      alert("Hi.");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

ClickHandler.propTypes = {
  children: PropTypes.any.isRequired
};

export default ClickHandler;
`;
