export default `import React, { Fragment, useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";

// create a custom event handler hook that returns an initial object
// of values, a callback function to update the values and another
// callback function to reset the values.
const useEventHandler = initialState => {
  const [value, setValue] = useState(initialState);
  const handleChange = useCallback(
    ({ target: { name, value } }) => setValue({ [name]: value }),
    []
  );
  const resetValue = useCallback(() => setValue(initialState), [initialState]);

  return {
    value,
    handleChange,
    resetValue
  };
};

const selectOptions = [
  "React.Component",
  "React.PureComponent",
  "React.StatelessComponent",
  "Pure Function"
];

// utilize the custom useEventHandler hook within a function.
const Select = () => {
  const { value, handleChange, resetValue } = useEventHandler({
    components: ""
  });

  return (
    <Fragment>
      <label htmlFor="components">Select:</label>
      <select
        name="components"
        placeholder="Type something..."
        onChange={handleChange}
        value={value.component}
      >
        {selectOptions.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={resetValue}>
        <FaTrash />
      </button>
    </Fragment>
  );
};

export default Select;
`;
