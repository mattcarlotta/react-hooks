export const useReducerExample = `import React, { Fragment, useReducer } from "react";

// here is our "reducer" that is passed some intial "state"
// and an "action" object. we compare the action's "type"
// to one of the cases defined below and manipulate "state"
// accordingly
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      // this takes whatever is in "state" and adds 1
      return state + 1;
    case "dec":
    // this takes whatever is in "state" and adds 0
      return state > 0 ? state - 1 : 0;
    case "reset":
    // this resets "state" to 0
      return 0;
    default:
    // if none of the "type"s matches any of the cases,
    // then it just returns whatever is already in "state"
      return state;
  }
};

const Counter = () => {
  // initializing useReducer with our "reducer" above and some
  // initial state of "0"
  const [value, dispatch] = useReducer(reducer, 0);

  // now we can alter the state by simply "dispatch"ing an action
  // object with a "type" string property
  return (
    <Fragment>
      <button onClick={() => dispatch({ type: "dec" })}> - </button>
      <div>{value}</div>
      <button onClick={() => dispatch({ type: "inc" })}> + </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
    </Fragment>
  );
};

export default Counter;

`;
