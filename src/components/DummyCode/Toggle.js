import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleSwitch = () => {
    setToggleState(!toggleState);
  };

  return (
    <span onClick={toggleSwitch}>
      {!toggleState ? <FaToggleOff /> : <FaToggleOn />}
    </span>
  );
};

export default Toggle;
