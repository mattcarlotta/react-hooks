import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const InputExample = () => {
  const [inputState, setInputState] = useState("");

  return (
    <span>
      <input
        placeholder="Type something..."
        onChange={({ target: { value } }) => setInputState(value)}
        value={inputState}
      />
      <button onClick={() => setInputState("")}>
        <FaTrash style={{ verticalAlign: "middle" }} />
      </button>
    </span>
  );
};

export default InputExample;
