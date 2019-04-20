export default `import React, { useCallback, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

// create a custom toggle hook that returns an initial value and 
// a callback function to update the value.
const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(() => setValue(value => !value));
  return [value, handleChange];
};

// utilize the custom useToggle hook within a function.
const Toggle = () => {
  const [toggleState, setToggleState] = useToggle(false);
  const [checkboxState, setCheckboxState] = useToggle(false);

  return (
    <>
      <button onClick={setToggleState}>
        {!toggleState ? <FaToggleOff /> : <FaToggleOn />}
      </button>
      <input 
        checked={checkboxState} 
        onChange={setCheckboxState} 
        type="checkbox"
        value={checkboxState} 
      />
    </>
  );
};

export default Toggle;
`;
