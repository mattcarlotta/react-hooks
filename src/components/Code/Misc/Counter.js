export default `import React, { Fragment, useCallback, useReducer } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

// create a custom useReducer hook that returns an initial value, 
// and 3 callback functions: decValue, incValue and resetValue. 
const useCounter = initialState => {
  const reducer = (state = 0, { type }) => {
    switch (type) {
      case "inc":
        return state + 1;
      case "dec":
        return state > 0 ? state - 1 : 0;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  const [value, dispatch] = useReducer(reducer, initialState);

  const incValue = useCallback(() => dispatch({ type: "inc" }), [dispatch]);

  const decValue = useCallback(() => dispatch({ type: "dec" }), [dispatch]);

  const resetValue = useCallback(() => dispatch({ type: "reset" }), [dispatch]);

  return {
    decValue,
    incValue,
    resetValue,
    value
  };
};

// utilize the custom useCounter hook within a function.
const Counter = () => {
  const { decValue, incValue, resetValue, value } = useCounter(0);

  return (
    <Fragment>
      <label htmlFor="example">Counter:</label>
      <button onClick={decValue}>
        <FaMinus />
      </button>
      <div>{value}</div>
      <button onClick={incValue}>
        <FaMinus />
      </button>
      <button onClick={resetValue}>
        <FaTrash />
      </button>
    </Fragment>
  );
};

export default Counter;
`;
