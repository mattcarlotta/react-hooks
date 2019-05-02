import { useReducer, useCallback } from "react";
import PropTypes from "prop-types";

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

useCounter.propTypes = {
  initialState: PropTypes.number.isRequired
};

export default useCounter;
