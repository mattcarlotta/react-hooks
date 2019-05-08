export default `import React, { useCallback, useEffect } from "react";

// utilize useEffect with an event listener that calls a useCallback function.
const KeyListener = () => {
  const handleKeyDown = useCallback(({ keyCode }) => {
    if (keyCode === 13) alert("You pressed the enter key.");
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return null;
};

export default KeyListener;
`;
