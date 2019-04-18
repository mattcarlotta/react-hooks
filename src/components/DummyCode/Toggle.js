import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(true);

  const toggleSwitch = () => {
    setToggleState(!toggleState);
  };

  return (
    <span onClick={toggleSwitch}>
      {toggleState ? <FaToggleOff /> : <FaToggleOn />}
    </span>
  );
};

export default Toggle;
