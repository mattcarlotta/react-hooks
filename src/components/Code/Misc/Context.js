export default `import React, {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useState
} from "react";
import { render } from "react-dom";
import { FaTrash } from "react-icons/fa";

// NOTE: Utilizing Context can be detrimental to an application's
// performance if the application is heavily nested. Changing a
// value stored within Context re-renders all of its children. As such,
// use sparingly and/or utilize "useMemo" to memoize the functions that
// update the value for a better performance.

// create a custom event handler hook that returns an initial value,
// a callback function to update the value and another callback
// function to reset the value.
const useEventHandler = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    ({ target: { value } }) => setValue(value),
    []
  );
  const resetValue = useCallback(() => setValue(initialValue), [initialValue]);

  return {
    value,
    handleChange,
    resetValue
  };
};

// create a "Context" variable for the "Provider" and "useContext"
// hook to utilize.
const Context = createContext();

// create a "Provider" component that receives "children" and an
// "initialValue".
// the "Provider" utilizes the "useEventHandler" hook and the "Context"
// defined above.
const Provider = ({ children, initialValue }) => {
  // utilizing the "useEventHandler" hook
  const props = useEventHandler(initialValue || "");

  // utilizing "Context" and passing props via its "value" property.
  // as of writing this, Context.Provider only accepts props through this
  // "value" property.
  return (
    <Context.Provider value={{ ...props }}>
      {children}
    </Context.Provider>
  );
};

// create an "Input" component that utilizes the "Context" defined above
// and pass it into "useContext". the result should return the
// "useEventHandler" properties: value, handleChange and resetValue.
const Input = () => {
  const { value, handleChange, resetValue } = useContext(Context);

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

// create an "App" component that wraps the "Input" component with the
// "Provider" component defined above.
// the "Provider" component needs to be utilized at the application's
// root level; that way, it always stays mounted despite its children changing.
// lastly, pass "Provider" an "initialValue" if needed.
const App = () => (
  <Provider initialValue="This is an initial value!">
    <Input />
  </Provider>
);

// render the "App" component defined above.
render(<App />, document.getElementById("root"));
`;
