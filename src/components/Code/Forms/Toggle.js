export default `import React, { Fragment, useCallback, useState } from "react";
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
    <Fragment>
            <span>Switch:</span>
            <button onClick={setToggleState}>
              {!toggleState ? <FaToggleOff /> : <FaToggleOn />}
            </button>
            <label htmlFor="example">Checkbox:</label>
            <input 
                name="example"
                checked={checkboxState} 
                onChange={setCheckboxState} 
                type="checkbox"
                value={checkboxState} 
            />
        </Fragment>
  );
};

export default Toggle;
`;
