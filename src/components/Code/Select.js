export default `import React, { useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";

// create a custom event handler hook that returns an initial object
// of values, a callback function to update the values and another
// callback function to reset the values.
const useDynamicEventHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(
    ({ target: { name, value } }) => setValues({ [name]: value }),
    []
  );
  const resetValue = useCallback(() => setValues(initialState), []);

  return {
    values,
    handleChange,
    resetValue
  };
};

const options = [
  "React.Component", 
  "React.PureComponent", 
  "React.StatelessComponent",
  "Pure Function"
];

// utilize the custom useDynamicEventHandler hook within a function.
const Select = () => {
  const { values, handleChange, resetValue } = useDynamicEventHandler({
    components: ""
  });

  return (
    <>
      <select
        name="components"
        placeholder="Type something..."
        onChange={handleChange}
        value={values.component}
      >
        {options.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={resetValue}>
        <FaTrash />
      </button>
    </>
  );
};

export default Select;
`;
