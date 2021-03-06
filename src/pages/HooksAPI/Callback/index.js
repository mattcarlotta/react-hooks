export const callbackExample = `import React, {
  Fragment,
  useCallback,
  useState
} from 'react';

// a reuseable input component
const Input = ({ value, handleChange }) => (
  <input type="text" value={value} onChange={handleChange} />
);

// a toggle button for "isDisabled"
const Toggle = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Toggle Input
  </button>
);

const Parent = () => {
  // defining a boolean "isDisabled" state
  // and a "toggleInputState" function
  const [isDisabled, toggleInputState]= useState(false);

  // defining a string "value" state and a "setValue" function
  const [value, setValue] = useState("");

  // defining a boolean "isSubmitting" state
  // and a "setFormStatus" function
  const [isSubmitting, setFormStatus] = useState(false);

  // "handleChange" accepts "event" from "Input"'s onChange
  // event handler, in addition, it can be disabled via "isDisabled"
  // or by "isSubmitting".
  const handleChange = useCallback(({ target: { value }}) => {
    if(!isDisabled || !isSubmitting) {
      setValue(value);
    }
  }, [isDisabled, isSubmitting]);

  // utilizing the callback functionality within "toggleInputState"
  // to set the the inverse of the current boolean state
  const handleClick = useCallback(() => {
    toggleInputState(prevState => !prevState);
  }, []);

  // checking if value is present, which updates "isSubmitting" state
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
