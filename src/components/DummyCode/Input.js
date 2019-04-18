import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  return (
    <>
      <input
        placeholder="Type something..."
        onChange={handleChange}
        value={inputValue}
      />
      <button onClick={resetInputValue}>
        <FaTrash style={{ verticalAlign: "middle" }} />
      </button>
    </>
  );
};

export default Input;
