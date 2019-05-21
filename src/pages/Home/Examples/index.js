export const classInput = `import React, { Fragment, Component } from 'react';

class Input extends Component {
 constructor(props) {
   super(props);
   this.state = { value: "" };

   this.handleChange = this.handleChange.bind(this);
   this.resetValue = this.resetValue.bind(this);
 }

 handleChange({ target: { value } }) {
   this.setState({ value: value });
 }

 resetValue() {
   this.setState({ value: "" });
 }

 render() {
   const { value } = this.state;

   return (
     <Fragment>
       <input type="text" value={value} onChange={this.handleChange} />
       <button type="button" onClick={this.resetValue}>Reset</button>
     </Fragment>
   )
 }
}
`;

export const functionalInput = `import React, { Fragment, useCallback, useState } from "react";

const Input = () => {
  const [value, setInputValue] = useState("");

  const handleChange = useCallback(
    ({ target: { value } }) => setInputValue(value),
    []
  );

  const resetValue = useCallback(() => {
    setValue(initialState);
  }, [initialState]);

  return (
    <Fragment>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={resetValue}>Reset</button>
    </Fragment>
  );
};
`;

export const constructedArray = `const example = useState("");
const value = example[0]; // value === ""
const setInputValue = example[1]; // setInputValue === f()
`;

export const deconstructedArray = `const [0, 1] = useState("");
// 0 === value ("")
// 1 === setInputValue (f())
`;

export const customHook = `import React, { useCallback, useState } from "react";

const useStringValueHandler = initialState => {
  const [value, setValue] = useState(initialState); // sets initialState ("")

  const handleChange = useCallback(
    ({ target: { value } }) => setValue(value), // updates "value" with event.target.value
    []
  );

  const resetValue = useCallback(() => {
    setValue(initialState); // resets "value" with initialState ("")
  }, [initialState]);

  return {
    value,
    handleChange,
    resetValue
  };
};

export default useStringValueHandler;
`;

export const reuseableHook = `import React, { Fragment } from "react";
import useStringValueHandler from "../Hooks/useStringValueHandler";

const Input = () => {
  const { value, handleChange, resetValue } = useStringValueHandler("");

  return (
    <Fragment>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={resetValue}>Reset</button>
    </Fragment>
  );
};

`;

export const returnInput = `return (
  <input
    type="text"
    value={value}
    onChange={handleChange}
  />
);
`;

export const inlineFunction = `return (
  <input
    type="text"
    value={value}
    onChange={({ target: { value }}) => setInputValue(value)}
  />
);
`;
