export default `import React, { Fragment, useCallback, useState } from "react";

// create a custom event handler hook that returns an initial object
// of values and a callback function to update the values.
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

const options = ["blue", "red", "violet", "pink", "yellow"];

// utilize the custom useEventHandler hook within a function.
// to keep the radios as a group, they should all share the
// the same "name" property.
const RadioGroup = () => {
  const { value, handleChange } = useEventHandler({
    favoriteColor: ""
  });

  return (
    <Fragment>
            <p>Favorite:</p>
            {options.map(color => (
        <span key={color}>
                        <input 
                            type="radio" 
                            id={color}
                            name="favoriteColor"
                            value={color}
                            onChange={handleChange}
                            checked={color === value.favoriteColor}
                        />
                        <label htmlFor={color}/>{color}</label>
                  </span>
      ))}
        </Fragment>
  );
};

export default RadioGroup;
`;
