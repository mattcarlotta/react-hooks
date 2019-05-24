export const functionExample = `import React, { useState, useCallback } from 'react';

// defining a function expression (aka component)
// and utilizing state to control an input
const Input = ({ children }) => {
  // initializing the "value" as ""
  const [value, setValue] = useState("");

  const handleChange = useCallback(({ target: { value }}) => {
    // updating "value" with "event.target.value"
    setValue(value);
  }, []);

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};
`;
