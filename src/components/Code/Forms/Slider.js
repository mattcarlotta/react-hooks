export default `import React, { Fragment, useCallback, useState } from "react";

// create a custom event handler hook that returns an initial object
// of values, a callback function to update the values and another
// callback function to reset the values.
const useEventHandler = initialState => {
  const [value, setValue] = useState(initialState);
  const handleChange = useCallback(
    ({ target: { name, value } }) => setValue({ [name]: value }),
    []
  );

  return {
    value,
    handleChange
  };
};

// utilize the custom useEventHandler hook within a function.
const Slider = () => {
  const { value, handleChange } = useEventHandler({
    temperature: ""
  });

  return (
    <Fragment>
       <p>Current Temp: {value.temperature || 50}°F</p>
       <span>
         <sub>0°F</sub>
         <input
           type="range"
           min="0"
           max="100"
           name="temperature"
           value={value.temperature}
           onChange={handleChange}
         />
         <sub>100°F</sub>
       </span>
     </Fragment>
  );
};

export default Slider;
`;
