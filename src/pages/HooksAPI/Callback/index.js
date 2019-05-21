export const callbackExample = `import React, { Fragment, useCallback, useState } from 'react';

const Input = ({ value, handleChange }) => (
  <input type="text" value={value} onChange={handleChange} />
);

const Toggle = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Toggle Input
  </button>
);

const Parent = () => {
  const [isDisabled, toggleInputState]= useState(false);
  const [value, setValue] = useState("");
  const [isSubmitting, setFormStatus] = useState(false);

  // "handleChange" accepts "event" from "Input"'s onChange
  // event handler, in addition, it can be disabled via "isDisabled"
  // or by "isSubmitting".
  const handleChange = useCallback(({ target: { value }}) => {
    if(!isDisabled || !isSubmitting) {
      setValue(value);
    }
  }, [isDisabled, isSubmitting]);

  const handleClick = useCallback(() => {
    toggleInputState(prevState => !prevState);
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setFormStatus(!!value); // if value is empty => false, else true
  }, [value])

  return (
    <form onSumbit={handleSubmit}>
      <Input handleChange={handleChange}  />
      <Toggle handleClick={handleButtonClick} />
      <button type="submit">Submit</button>
    <form>
  );
}
`;
