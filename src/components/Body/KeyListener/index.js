import { useEffect, useCallback } from "react";

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
