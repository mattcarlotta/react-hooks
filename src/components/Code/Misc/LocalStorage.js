export default `import React, { Fragment, useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";

// create a custom useLocalEventStorage hook that returns an initial object
// of values, a callback function to update the values and another
// callback function to reset the values.
const useLocalEventStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // attempts to retrieve localStorage item via "key" upon initial load
      const item = window.localStorage.getItem(key); 
      // if present, parse and utilize value, else utilize "initialValue"
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      try {
        // update localStorage to reflect a "storedValue" change
        window.localStorage.setItem(key, JSON.stringify({ [name]: value }));
        // update "storedValue" with: [event.target.name]: event.target.value
        setStoredValue({ [name]: value });
      } catch (err) {
        console.log(err);
      }
    },
    [key]
  );

  const resetValue = useCallback(() => {
    try {
      // remove localStorage item via "key"
      window.localStorage.removeItem(key);
      // reset "storedValue" with "initialValue"
      setStoredValue(initialValue);
    } catch (err) {
      console.log(err);
      setStoredValue(initialValue);
    }
  }, [initialValue, key]);

  return {
    storedValue,
    handleChange,
    resetValue
  };
};


const options = [
  "Extra Small",
  "Small",
  "Medium",
  "Large",
  "Extra Large"
];

// utilize the custom useEventHandler hook within a function.
const LocalStorageSelect = () => {
  const { handleChange, resetValue, storedValue } = useLocalEventStorage(
    "size", // key used for localStorage
    {
      size: "" // value used for the select element
    }
  );

  return (
    <Fragment>
      <label htmlFor="size">Select:</label>
      <select
        name="size"
        placeholder="Select a size..."
        onChange={handleChange}
        value={storedValue.size}
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
    </Fragment>
  );
};

export default LocalStorageSelect;
`;
