export default `import React, { Fragment, useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";

// create a custom event handler hook that returns an initial value, 
// a callback function to update the value and another callback 
// function to reset the value.
const useEventHandler = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    ({ target: { value } }) => setValue(value),
    []
  );
  const resetValue = useCallback(() => setValue(""), []);

  return {
    value,
    handleChange,
    resetValue
  };
};

// utilize the custom useEventHandler hook within a function.
const Input = () => {
  const { value, handleChange, resetValue } = useEventHandler("");

  return (
    <Fragment>
              <label htmlFor="example">Input:</label>
              <input
                  type="text"
                  name="example"
                  placeholder="Type something..."
                  onChange={handleChange}
                  value={value}
              />
              <button onClick={resetValue}>
                <FaTrash />
              </button>
        </Fragment>
  );
};

export default Input;
`;
