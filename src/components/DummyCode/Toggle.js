import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <span onClick={() => setToggleState(!toggleState)}>
      {!toggleState ? <FaToggleOff /> : <FaToggleOn />}
    </span>
  );
};

export default Toggle;
