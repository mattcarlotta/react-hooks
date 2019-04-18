export default `import React, { useCallback, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

// create a custom toggle hook that returns an initial value and 
// a callback function to update the value.
const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(() => setValue(value => !value));
  return [value, handleChange];
};

// utilize the custom useToggle hook
const Toggle = () => {
  const [toggleState, setToggleState] = useToggle(false);

  return (
    <span onClick={setToggleState}>
      {!toggleState ? <FaToggleOff /> : <FaToggleOn />}
    </span>
  );
};

export default Toggle;
`;
