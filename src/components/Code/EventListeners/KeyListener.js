export default `import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";

// utilize createRef and useEffect with an event listener that
// calls a function.
const KeyListener = () => {
  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) alert("You pressed the enter key.");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default KeyListener;
`;
