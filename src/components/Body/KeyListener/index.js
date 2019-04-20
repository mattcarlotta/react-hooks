import { useEffect } from "react";

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
